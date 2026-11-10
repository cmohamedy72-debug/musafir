// Traductions du site Musâfir (FR par défaut, AR, EN). Les pages légales restent en français.
(function () {
  const SEL = 'nav a, .hero h1, .hero p, .tag, .trust span, .cap, #produit h2, #produit .lead, .specs div, #gestes h2, .steps h3, .steps p, #gestes .lead, #engagements h2, .eng h3, .eng p, .story h2, .story p, #faq h2, summary, details p, .cta h2, .cta .lead, .cta .btn, footer .slogan, footer p.legal';
  const M = 'boutiquemusafir@gmail.com', ML = '<a href="mailto:' + M + '" style="color:var(--gold)">' + M + '</a>', MLp = '<a href="mailto:' + M + '">' + M + '</a>';
  const T = {
    ar: ['المنتج', 'الأسئلة', 'تواصل',
      'لا تترك سجادتك <em>في البيت.</em>',
      'سجادة صلاة رقيقة، ملفوفة في حقيبة صغيرة تُعلَّق بحقيبتك. في العمل، في التنقل، في الرياضة.',
      'الإطلاق قريبًا',
      'دفع آمن', 'إرجاع خلال 14 يومًا', 'رد شخصي',
      'صورة توضيحية · قد يختلف المنتج النهائي',
      'سجادة، حقيبة، وحلقة تعليق.',
      'سجادة صلاة رقيقة وخفيفة، ملفوفة في حقيبة صغيرة، تعلّقها بحقيبتك أو بحزامك. جاهزة في ثوانٍ، أينما كنت.',
      '<b>المقاسات</b>بعد الفحص', '<b>الوزن</b>بعد الفحص', '<b>الألوان</b>عدة ألوان، بشعار مسافر', '<b>التعليق</b>حلقة معدنية',
      'عيناتنا الأولى قيد فحص الجودة. ستُنشر الصور والمقاسات والسعر فور اعتمادها.',
      'في 3 خطوات',
      'أُخرجها', 'الحقيبة معلّقة بحقيبتي. حلقة واحدة، لا حاجة للبحث.',
      'أفردها', 'تنبسط السجادة على أرض نظيفة في ثوانٍ.',
      'أصلي', 'ثم أطويها وأعيدها إلى حقيبتها حتى الصلاة القادمة.',
      'سيُقاس الوقت الدقيق ويُصوَّر على عيّناتنا.',
      'التزاماتنا',
      'دفع آمن', 'يتم الدفع عبر Stripe. لا نرى بياناتك البنكية أبدًا.',
      'إرجاع خلال 14 يومًا', 'غيّرت رأيك؟ لديك 14 يومًا بعد الاستلام لإرجاعها.',
      'منتجات مُختبرة', 'كل نموذج يُختبر قبل عرضه. لا نعلن شيئًا لم نتحقق منه.',
      'شخص حقيقي', 'كل رسالة تتلقى ردًّا شخصيًا، لا ردًّا آليًا.',
      'قصتنا',
      'اسمي محمد. مثل كثيرين، أعمل وأتنقل، وكثيرًا ما يحين وقت الصلاة حيث لا مسجد ولا سجادة.',
      'أنشأت «مسافر» ليتمكن كل واحد من الصلاة بكرامة، أينما كان.',
      'كل نموذج يُختبر قبل عرضه. إن كان هناك أي مشكلة، تجدني على العنوان ' + ML + '.',
      'مُسَافِر · المسافر',
      'أسئلة شائعة',
      'متى ستتوفر السجادة؟', 'فور اجتياز عيّناتنا فحص الجودة. سيُعلن موعد الإطلاق هنا وعلى حسابنا في تيك توك.',
      'أين تُصنع؟', 'تُصنع السجادة في الصين لدى مورّد اخترناه. تُفحص العيّنات في فرنسا قبل أي بيع.',
      'ما مقاساتها؟', 'ستُذكر بدقة بعد فحص العيّنات. نفضّل ألّا نعلن شيئًا لم نقِسه بأنفسنا.',
      'لماذا هي رقيقة؟', 'لتدخل في حقيبة صغيرة وترافقك في كل مكان. تحميك من أوساخ الأرض، لكنها لا تعوّض راحة السجادة السميكة. فالسجادة السميكة، ولو قليلًا، لا تدخل في الحقيبة بعد طيّها.',
      'هل تناسب الأطفال؟', 'نعم، صُممت لكل من يصلي، بمن فيهم الأطفال. وسيلة جيدة لتعويدهم على الصلاة في كل مكان.',
      'كيف أدفع؟', 'بالبطاقة البنكية، عبر الإنترنت، من خلال خدمة Stripe الآمنة.',
      'إلى أين توصلون؟', 'إلى فرنسا القارية حاليًا، عبر البريد الفرنسي. تُذكر التكاليف والمدة قبل الدفع.',
      'هل يمكنني إرجاع المنتج؟', 'نعم، لديك 14 يومًا بعد الاستلام للتراجع. التفاصيل في <a href="cgv.html">شروط البيع</a> (بالفرنسية).',
      'كيف أتواصل معكم؟', 'عبر البريد الإلكتروني ' + MLp + '. نرد شخصيًا على كل رسالة.',
      'كن أول من يعلم بالإطلاق', 'تابعنا على تيك توك أو راسلنا عبر البريد الإلكتروني.',
      'تابعنا على تيك توك', 'راسلنا عبر البريد',
      'دائمًا في الطريق. ولا تنسَ <em>صلاتك.</em>',
      '<a href="mentions-legales.html">الإشعارات القانونية</a>·<a href="cgv.html">شروط البيع</a>·<a href="confidentialite.html">الخصوصية</a> (بالفرنسية)'],
    en: ['Product', 'FAQ', 'Contact',
      'Never leave your prayer mat <em>at home</em> again.',
      'A thin prayer mat, rolled into a pouch that clips onto your bag. At work, on the move, at the gym.',
      'LAUNCHING SOON',
      'Secure payment', '14-day returns', 'Personal reply',
      'Illustration · the final product may differ',
      'A mat, a pouch, a carabiner.',
      'A thin, light prayer mat, rolled into a compact pouch you clip onto your bag or belt. Ready in seconds, wherever you are.',
      '<b>Size</b>after testing', '<b>Weight</b>after testing', '<b>Colours</b>several, Musâfir logo', '<b>Fastening</b>carabiner',
      'Our first samples are being quality-checked. Photos, size and price will be published once they are approved.',
      'In 3 steps',
      'Take it out', 'The pouch hangs on my bag. One carabiner, nothing to look for.',
      'Unroll it', 'The mat opens on a clean floor in seconds.',
      'Pray', 'Then I roll it back into its pouch until the next prayer.',
      'The exact time will be measured and filmed on our samples.',
      'Our commitments',
      'Secure payment', 'Payment goes through Stripe. We never see your bank details.',
      '14-day returns', 'Changed your mind? You have 14 days after delivery to send it back.',
      'Tested products', 'Every model is tested before it is offered. Nothing is claimed without being checked.',
      'A real person', 'Every email gets a personal reply, not a bot.',
      'Our story',
      'My name is Mohamed. Like many, I work and travel, and too often prayer time comes where there is no mosque and no mat.',
      'I created Musâfir so that everyone can pray with dignity, wherever they are.',
      'Every model is tested before it is offered. If anything is wrong, you will find me at ' + ML + '.',
      'مُسَافِر · the traveller',
      'Frequently asked questions',
      'When will the mat be available?', 'As soon as our samples pass quality control. The launch date will be announced here and on our TikTok account.',
      'Where is it made?', 'The mat is made in China by a supplier we selected. Samples are checked in France before anything is sold.',
      'What size is it?', 'It will be stated precisely after our samples are checked. We prefer not to announce anything we have not measured ourselves.',
      'Why is it thin?', 'So it fits in a small pouch and goes everywhere with you. It protects you from a dirty floor; it does not replace the comfort of a thick mat. Even a slightly thick mat no longer fits in a bag once folded.',
      'Is it suitable for children?', 'Yes, it is made for everyone who prays, children included. A good way to get used to praying anywhere.',
      'How can I pay?', 'By bank card, online, through the secure provider Stripe.',
      'Where do you deliver?', 'To mainland France for now, by La Poste. Costs and delivery time are shown before payment.',
      'Can I return the product?', 'Yes, you have 14 days after delivery to withdraw. Details are in our <a href="cgv.html">terms of sale</a> (in French).',
      'How can I contact you?', 'By email at ' + MLp + '. We reply personally to every message.',
      'Be the first to know', 'Follow us on TikTok or contact us by email.',
      'Follow on TikTok', 'Send an email',
      'Always on the road. Never without your <em>prayer.</em>',
      '<a href="mentions-legales.html">Legal notice</a>·<a href="cgv.html">Terms of sale</a>·<a href="confidentialite.html">Privacy</a> (in French)']
  };
  const els = [...document.querySelectorAll(SEL)], FR = els.map(e => e.innerHTML);
  if (T.ar.length !== els.length || T.en.length !== els.length) console.warn('i18n: ' + els.length + ' éléments, ar ' + T.ar.length + ', en ' + T.en.length);
  function set(l) {
    const src = l === 'fr' ? FR : T[l];
    els.forEach((e, i) => { if (src[i] != null) e.innerHTML = src[i]; });
    document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.l === l));
    try { localStorage.setItem('musafir-lang', l); } catch (e) {}
  }
  document.querySelectorAll('.lang button').forEach(b => b.onclick = () => set(b.dataset.l));
  let l = new URLSearchParams(location.search).get('lang');
  if (!l) { try { l = localStorage.getItem('musafir-lang'); } catch (e) {} }
  if (!l) { const n = (navigator.language || 'fr').slice(0, 2); l = n === 'ar' ? 'ar' : n === 'fr' ? 'fr' : 'en'; }
  if (l !== 'fr') set(l); else set('fr');
})();
