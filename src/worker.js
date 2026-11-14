// Site Musâfir : les pages sont servies telles quelles (ASSETS).
// Seule l'adresse /api/attente est traitée ici : elle enregistre un e-mail dans la liste
// d'attente (stockage Cloudflare KV « ATTENTE », clé = e-mail, valeur = date + langue).
// Les inscrits se consultent dans le tableau de bord Cloudflare : Workers KV > musafir-attente.
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/attente') return env.ASSETS.fetch(request);
    if (request.method !== 'POST') return json({ ok: false }, 405);

    const origin = request.headers.get('origin');
    if (origin && new URL(origin).host !== url.host) return json({ ok: false }, 403);

    let data;
    try { data = await request.json(); } catch { return json({ ok: false }, 400); }
    if (data.site) return json({ ok: true });                 // champ piège : rempli seulement par les robots

    const email = String(data.email || '').trim().toLowerCase();
    if (email.length > 254 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || data.consent !== true) return json({ ok: false }, 400);
    const lang = ['fr', 'ar', 'en'].includes(data.lang) ? data.lang : 'fr';

    if (!(await env.ATTENTE.get(email))) {
      await env.ATTENTE.put(email, JSON.stringify({ date: new Date().toISOString(), lang }));
    }
    return json({ ok: true });
  },
};
