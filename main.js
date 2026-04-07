'use strict';


var STRINGS = {
  ar: {
    search_placeholder: 'ابحث عن منتج...',
    hero_badge:         'أفضل المنتجات المختارة',
    hero_title_1:       'اكتشف',
    hero_title_2:       'عالم التسوق',
    hero_subtitle:      'تشكيلة رائعة من المنتجات بجميع أنواعها، تسوق بكل حرية - تسوق بذكاء',
    stat_products:      'منتج متاح',
    stat_authentic:     'منتجات أصليه',
    stat_support:       'تحديث فوري',
    section_title_all:  'جميع المنتجات',
    count_label:        function(n) { return n + ' منتج'; },
    order_now:          'اطلب الآن',
    price_label:        'السعر:',
    price_variable:     'متغير',
    bestseller_badge:   'الأكثر بيعاً',
    no_products:        'لا توجد منتجات تطابق بحثك',
    lang_btn_label:     'EN',
    footer_disclaimer:  'كمشارك في برنامج Amazon Associates، قد أحصل على عمولة من المشتريات المؤهلة.',
    footer_credit:      'صمم وبرمج هذا الموقع بواسطة'
  },
  en: {
    search_placeholder: 'Search for a product...',
    hero_badge:         'Best Curated Products',
    hero_title_1:       'Discover',
    hero_title_2:       'Shopping World',
    hero_subtitle:      'A wonderful variety of products of all kinds. Shop with freedom - Shop smart',
    stat_products:      'Products',
    stat_authentic:     'Original Products',
    stat_support:       'Instant Update',
    section_title_all:  'All Products',
    count_label:        function(n) { return n + ' Products'; },
    order_now:          'Order Now',
    price_label:        'Price:',
    price_variable:     'Variable',
    bestseller_badge:   'Best Seller',
    no_products:        'No products found',
    lang_btn_label:     'AR',
    footer_disclaimer:  'As an Amazon Associates participant, I may earn a commission from qualifying purchases.',
    footer_credit:      'Designed and developed by'
  }
};


var CATEGORIES = [
  { label: 'الكل',          labelEn: 'All',          value: 'all',       icon: 'fa-solid fa-border-all'     },
  { label: 'الأكثر بيعاً',  labelEn: 'Best Sellers', value: 'bestseller',icon: 'fa-solid fa-fire'           },
  { label: 'هواتف',         labelEn: 'Phones',       value: 'هواتف',     icon: 'fa-solid fa-mobile-screen'  },
  { label: 'غيرها',     labelEn: 'Other',  value: 'غيرها', icon: 'fa-solid fa-box-open'             },
];


var PRODUCTS = [
  {
    nameAr:  'هاتف A17 LTE، موبايل ذكي يعمل بنظام أندرويد مع مساحة تخزين 256 جيجابايت ورام 8 جيجابايت و6 تحديثات لنظام التشغيل وشاشة كبيرة وكاميرا 50 ميجابكسل بمثبت بصري، إصدار محلي، رمادي',
    nameEn:  'phone Samsung Galaxy A17 LTE mobile phone, Android smartphone with 256GB storage, 8GB RAM, 6 OS updates, large screen, 50MP camera with optical image stabilization, local version, gray.',
    cate:    'هواتف',
    disAr:   'جيميناي: تحدث بحرية مع جيميناي لايف وشارك لحظاتك بالكاميرا؛ التصميم أنيق بعرض 7.5 ملم، مفاتيح Key Island 2.0، وكاميرات متراصة بالأسود، الرمادي، الأزرق؛ الكاميرا تثبت الصور والفيديو ليلاً؛ 6 تحديثات نظام وأمان سنويًا لمدة 6 سنوات؛ الشاشة 6.7 بوصة سوبر أموليد 90هرتز بألوان نابضة.',
    disEn:   'Gemini: Talk freely with Gemini Live and share moments via the camera; Sleek 7.5mm design, Key Island 2.0 keys, compact cameras in black, gray, blue; Camera stabilizes photos/videos at night; 6 OS/security updates yearly for 6 years; 6.7-inch Super AMOLED 90Hz display with vibrant colors',
    mainimg: 'Prodict/1/main.jpg',
    img2:    'Prodict/1/2.jpg',
    img3:    'Prodict/1/3.jpg',
    price:   'متغير',
    url:     'https://amzn.to/41g2aAO'
  },
  {
    nameAr:  'ميزان مطبخ رقمي عالي الدقة 10 كجم - ميزان إلكتروني أبيض - ميزان مطبخ محمول بشاشة ال سي دي من بورتال',
    nameEn:  '10kg High-Precision Digital Kitchen Scale - White Electronic Scale - Portable Kitchen Scale with LCD Display by Portal',
    cate:    'غيرها',
    disAr:   'قياس دقيق: يزن حتى 5 كجم بدقة بزيادة 1 جم.وظيفة الوزن الفارغ: استخدم وظيفة الوزن الفارغ لإزالة وزن الحاوية من القياس النهائي لطعامك..شاشة عرض LCD: يمكنك قراءة القياسات بسهولة على شاشة ال سي دي بإضاءة خلفية.',
    disEn:   'Accurate measurement: Weighs up to 5 kg with an accuracy of 1 g increments. Tare weight function: Use the tare weight function to remove the weight of the container from your final food measurement. LCD display: You can easily read measurements on the backlit LCD screen.',
    mainimg: 'Prodict/2/main.jpg',
    img2:    'Prodict/2/2.jpg',
    img3:    'Prodict/2/3.jpg',
    price:   'متغير',
    url:     'https://amzn.to/47Lcvs5'
  },
  
];


var state = {
  lang:              'ar',
  theme:             'dark',
  activeCategory:    'all',
  searchQuery:       '',
  bestsellerPool:    [],
  modalProductIndex: -1,
  modalImageIndex:   0,
  modalImages:       [],
  canvasStop:        null,
  gtReady:           false,
  pendingTranslate:  false,
  suggestionsOpen:   false
};


function S() { return STRINGS[state.lang]; }

function $(id) { return document.getElementById(id); }

function getCategoryLabel(catValue) {
  for (var i = 0; i < CATEGORIES.length; i++) {
    if (CATEGORIES[i].value === catValue) {
      return state.lang === 'ar' ? CATEGORIES[i].label : CATEGORIES[i].labelEn;
    }
  }
  return S().section_title_all;
}

function getProductName(p) {
  return state.lang === 'ar' ? p.nameAr : p.nameEn;
}

function getProductDesc(p) {
  return state.lang === 'ar' ? p.disAr : p.disEn;
}

function getCategoryNameByValue(value) {
  for (var i = 0; i < CATEGORIES.length; i++) {
    if (CATEGORIES[i].value === value) {
      return state.lang === 'ar' ? CATEGORIES[i].label : CATEGORIES[i].labelEn;
    }
  }
  return value;
}


function pickBestsellerPool() {
  var all = PRODUCTS.map(function(_, i) { return i; });

  for (var j = all.length - 1; j > 0; j--) {
    var k = Math.floor(Math.random() * (j + 1));
    var tmp = all[j]; all[j] = all[k]; all[k] = tmp;
  }
  state.bestsellerPool = all.slice(0, Math.min(5, all.length));
}


function getFilteredProducts() {
  var list;

  if (state.activeCategory === 'all') {
    list = PRODUCTS.slice();
  } else if (state.activeCategory === 'bestseller') {
    list = state.bestsellerPool.map(function(i) { return PRODUCTS[i]; });
  } else {
    list = PRODUCTS.filter(function(p) { return p.cate === state.activeCategory; });
  }

  if (state.searchQuery.length > 0) {
    var q = state.searchQuery.toLowerCase();
    list = list.filter(function(p) {
      return p.nameAr.toLowerCase().indexOf(q) !== -1 ||
             p.nameEn.toLowerCase().indexOf(q) !== -1 ||
             p.disAr.toLowerCase().indexOf(q)  !== -1 ||
             p.disEn.toLowerCase().indexOf(q)  !== -1 ||
             p.cate.toLowerCase().indexOf(q)   !== -1;
    });
  }

  return list;
}

function getRealIndex(product) {
  return PRODUCTS.indexOf(product);
}


function renderStaticText() {
  var s = S();
  $('search-input').placeholder         = s.search_placeholder;
  $('hero-badge-text').textContent      = s.hero_badge;
  $('hero-title-word1').textContent     = s.hero_title_1;
  $('hero-title-word2').textContent     = s.hero_title_2;
  $('hero-subtitle-text').textContent   = s.hero_subtitle;
  $('stat-label-products').textContent  = s.stat_products;
  $('stat-label-authentic').textContent = s.stat_authentic;
  $('stat-label-support').textContent   = s.stat_support;
  $('footer-disclaimer').textContent    = s.footer_disclaimer;
  $('footer-credit-prefix').textContent = s.footer_credit;
  $('lang-btn-label').textContent       = s.lang_btn_label;
  $('section-title-text').textContent   = getCategoryLabel(state.activeCategory);

  var dealsEl = $('deals-btn-text');
  if (dealsEl) dealsEl.textContent = state.lang === 'ar' ? 'عروض اليوم' : 'Today\'s Deals';

  var bazarBtnEl = $('bazar-btn-text');
  if (bazarBtnEl) bazarBtnEl.textContent = state.lang === 'ar' ? 'تسوق في البازار' : 'Shop the Bazaar';


  var bazarTagline = $('bazar-tagline');
  if (bazarTagline) bazarTagline.textContent = state.lang === 'ar'
    ? 'عروض متتفوتش داخل البازار ادخل الحق اخر القطع'
    : 'Don\'t miss out — last pieces inside the Bazaar!';

  var bazarGoText = $('bazar-go-text');
  if (bazarGoText) bazarGoText.textContent = state.lang === 'ar' ? 'اذهب الي البازار' : 'Go to the Bazaar';


  var bazarImg = document.querySelector('.bazar-img');
  if (bazarImg) bazarImg.src = state.lang === 'ar' ? 'img/bazar.png' : 'img/bazar_en.png';
}

function renderCategories() {
  var row = $('categories-row');
  row.innerHTML = '';
  CATEGORIES.forEach(function(cat) {
    var btn = document.createElement('button');
    btn.className = 'cat-pill' + (state.activeCategory === cat.value ? ' active' : '');
    btn.setAttribute('role', 'listitem');
    btn.setAttribute('aria-pressed', state.activeCategory === cat.value ? 'true' : 'false');
    btn.innerHTML = '<i class="' + cat.icon + '" aria-hidden="true"></i>' +
                    (state.lang === 'ar' ? cat.label : cat.labelEn);
    btn.addEventListener('click', function() { selectCategory(cat.value); });
    row.appendChild(btn);
  });
}

function selectCategory(value) {
  state.activeCategory = value;
  if (value === 'bestseller') pickBestsellerPool();
  $('section-title-text').textContent = getCategoryLabel(value);
  renderCategories();
  renderProducts();
}

function renderProducts() {
  var grid = $('products-grid');
  var s    = S();
  var list = getFilteredProducts();

  $('section-count-text').textContent = s.count_label(list.length);
  grid.innerHTML = '';

  if (list.length === 0) {
    var empty = document.createElement('div');
    empty.className = 'empty-results';
    empty.setAttribute('role', 'listitem');
    empty.innerHTML = '<i class="fa-solid fa-box-open" aria-hidden="true"></i><p>' +
                      s.no_products + '</p>';
    grid.appendChild(empty);
    return;
  }

  var isBest   = (state.activeCategory === 'bestseller');
  var fallback = 'https://placehold.co/400x280/0f1524/c9900a?text=Product';

  list.forEach(function(product, idx) {
    var ri   = getRealIndex(product);
    var card = document.createElement('div');
    card.className = 'product-card' + (isBest ? ' is-bestseller' : '');
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', getProductName(product));
    card.style.animationDelay = (idx * 0.055) + 's';

    var ribbonHtml = isBest
      ? '<div class="bestseller-ribbon" aria-hidden="true">' +
        '<i class="fa-solid fa-fire" aria-hidden="true"></i>' +
        s.bestseller_badge + '</div>'
      : '';


    var catLabel = getCategoryNameByValue(product.cate);

    card.innerHTML =
      ribbonHtml +
      '<div class="card-image-container">' +
        '<img src="' + (product.mainimg || '') + '" alt="' + getProductName(product) +
             '" loading="lazy" onerror="this.src=\'' + fallback + '\'">' +
      '</div>' +
      '<div class="card-body">' +
        '<span class="card-category-label">' + catLabel + '</span>' +
        '<h3 class="card-product-name">' + getProductName(product) + '</h3>' +
        '<p class="card-product-desc">' + getProductDesc(product) + '</p>' +
      '</div>' +
      '<div class="card-footer-row">' +
        '<span class="card-price-tag">' + (product.price || s.price_variable) + '</span>' +
        '<button class="card-order-btn" ' +
                'data-url="' + (product.url || '') + '" ' +
                'aria-label="' + s.order_now + ' ' + getProductName(product) + '">' +
          '<i class="fa-solid fa-bag-shopping" aria-hidden="true"></i>' +
          s.order_now +
        '</button>' +
      '</div>';


    card.addEventListener('click', function(evt) {
      if (evt.target.closest('.card-order-btn')) {
        evt.stopPropagation();
        var url = evt.target.closest('.card-order-btn').getAttribute('data-url');
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
        return;
      }
      openModal(ri);
    });
    card.addEventListener('keydown', function(evt) {
      if (evt.key === 'Enter' || evt.key === ' ') { evt.preventDefault(); openModal(ri); }
    });

    grid.appendChild(card);
  });
}

function buildSuggestions(query) {
  if (!query || query.length < 1) return [];
  var q   = query.toLowerCase();
  var res = [];
  PRODUCTS.forEach(function(p) {
    var nameAr = p.nameAr.toLowerCase();
    var nameEn = p.nameEn.toLowerCase();
    var disAr  = p.disAr.toLowerCase();
    var disEn  = p.disEn.toLowerCase();
    var cat    = p.cate.toLowerCase();
    var score  = 0;
    if (nameAr.indexOf(q) === 0 || nameEn.indexOf(q) === 0)                   score = 3;
    else if (nameAr.indexOf(q) !== -1 || nameEn.indexOf(q) !== -1)            score = 2;
    else if (disAr.indexOf(q) !== -1 || disEn.indexOf(q) !== -1 ||
             cat.indexOf(q) !== -1)                                            score = 1;
    if (score > 0) res.push({ product: p, score: score });
  });
  res.sort(function(a, b) { return b.score - a.score; });
  return res.slice(0, 6).map(function(r) { return r.product; });
}

function renderSuggestions(query) {
  var box  = $('search-suggestions');
  var list = buildSuggestions(query);

  if (!query || list.length === 0) {
    box.classList.remove('show');
    box.innerHTML = '';
    state.suggestionsOpen = false;
    return;
  }

  var catLabel;
  box.innerHTML = '';
  list.forEach(function(product) {
    catLabel = getCategoryNameByValue(product.cate);
    var item = document.createElement('div');
    item.className = 'suggestion-item';
    item.innerHTML =
      '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
      '<span>' + getProductName(product) + '</span>' +
      '<span class="sug-cat">' + catLabel + '</span>';

    item.addEventListener('mousedown', function(evt) {

      evt.preventDefault();
      $('search-input').value = getProductName(product);
      state.searchQuery = getProductName(product);
      hideSuggestions();
      renderProducts();
      scrollToProducts();
    });
    box.appendChild(item);
  });

  box.classList.add('show');
  state.suggestionsOpen = true;
}

function hideSuggestions() {
  $('search-suggestions').classList.remove('show');
  $('search-suggestions').innerHTML = '';
  state.suggestionsOpen = false;
}

function scrollToProducts() {
  var anchor = $('products-anchor');
  if (anchor) {
    var offset = anchor.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

function buildImagesList(product) {
  var imgs = [];
  if (product.mainimg) imgs.push(product.mainimg);
  if (product.img2)    imgs.push(product.img2);
  if (product.img3)    imgs.push(product.img3);
  if (imgs.length === 0) imgs.push('https://placehold.co/600x450/0f1524/c9900a?text=No+Image');
  return imgs;
}

function openModal(realIndex) {
  var product = PRODUCTS[realIndex];
  if (!product) return;
  var s = S();

  state.modalProductIndex = realIndex;
  state.modalImages       = buildImagesList(product);
  state.modalImageIndex   = 0;

  $('modal-main-image').src            = state.modalImages[0];
  $('modal-main-image').alt            = getProductName(product);
  $('modal-cat-text').textContent      = getCategoryNameByValue(product.cate);
  $('modal-name-el').textContent       = getProductName(product);
  $('modal-desc-el').textContent       = getProductDesc(product);
  $('modal-price-label-el').textContent= s.price_label;
  $('modal-price-value-el').textContent= product.price || s.price_variable;
  $('modal-order-btn-text').textContent= s.order_now;
  $('modal-order-btn').href            = product.url || '#';

  $('modal-nav-row').style.display = state.modalImages.length <= 1 ? 'none' : 'flex';

  buildModalDots();
  updateModalDots();

  $('modal-backdrop').classList.add('is-open');
  document.body.classList.add('modal-open');
  $('modal-close-btn').focus();
}

function buildModalDots() {
  var row = $('modal-dots-row');
  row.innerHTML = '';
  state.modalImages.forEach(function(_, i) {
    var dot = document.createElement('div');
    dot.className = 'modal-dot';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', 'صورة ' + (i + 1));
    (function(idx) {
      dot.addEventListener('click', function() {
        state.modalImageIndex = idx;
        setModalImage(state.modalImages[idx]);
        updateModalDots();
      });
    })(i);
    row.appendChild(dot);
  });
}

function updateModalDots() {
  var dots = $('modal-dots-row').children;
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = 'modal-dot' + (i === state.modalImageIndex ? ' is-active' : '');
    dots[i].setAttribute('aria-selected', i === state.modalImageIndex ? 'true' : 'false');
  }
}

function setModalImage(src) {
  var img = $('modal-main-image');
  img.classList.add('modal-image-fade');
  setTimeout(function() {
    img.src = src;
    img.classList.remove('modal-image-fade');
  }, 220);
}

function galleryNavigate(direction) {
  if (state.modalImages.length <= 1) return;
  state.modalImageIndex =
    (state.modalImageIndex + direction + state.modalImages.length) % state.modalImages.length;
  setModalImage(state.modalImages[state.modalImageIndex]);
  updateModalDots();
}

function closeModal() {
  $('modal-backdrop').classList.remove('is-open');
  document.body.classList.remove('modal-open');
}


function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', state.theme);
  $('theme-icon').className = state.theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  restartCanvas();
}

function toggleLang() {
  if (state.lang === 'ar') {
    state.lang = 'en';
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.setAttribute('dir', 'ltr');
    activateGoogleTranslate('en');
  } else {
    state.lang = 'ar';
    document.documentElement.setAttribute('lang', 'ar');
    document.documentElement.setAttribute('dir', 'rtl');
    activateGoogleTranslate('ar');
  }
  renderStaticText();
  renderCategories();
  renderProducts();
  updateBazarArrow();

  if (state.searchQuery) renderSuggestions(state.searchQuery);
}

function activateGoogleTranslate(targetLang) {
  if (state.gtReady) {
    applyGTTranslation(targetLang);
  } else {
    state.pendingTranslate = targetLang;
  }
}

function applyGTTranslation(targetLang) {

  var sel = document.querySelector('.goog-te-combo');
  if (sel) {
    sel.value = targetLang;
    sel.dispatchEvent(new Event('change'));
  }

  setTimeout(function() {
    var bar = document.querySelector('.goog-te-banner-frame');
    if (bar) bar.style.display = 'none';
    document.body.style.top = '0';
  }, 400);
}


window.googleTranslateElementInit = function() {

  new google.translate.TranslateElement(
    {
      pageLanguage:      'ar',
      includedLanguages: 'en,ar',
      autoDisplay:       false,
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
    'google_translate_element'
  );
  state.gtReady = true;
  if (state.pendingTranslate) {
    var lang = state.pendingTranslate;
    state.pendingTranslate = false;
    setTimeout(function() { applyGTTranslation(lang); }, 600);
  }
};

(function loadGTScript() {
  var script    = document.createElement('script');
  script.src    = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async  = true;
  document.head.appendChild(script);
})();

function initCanvas() {
  var canvas = $('canvas-bg');
  var ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  var W = canvas.width, H = canvas.height;
  var isDark = state.theme === 'dark';


  var starCount = Math.min(Math.floor((W * H) / 7000), 220);
  var stars = [];
  for (var i = 0; i < starCount; i++) {
    stars.push({
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  Math.random() * 1.6 + 0.2,
      a:  Math.random(),
      da: (Math.random() - 0.5) * 0.007,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12
    });
  }


  var meteors = [];
  function spawnMeteor() {
    if (!isDark) return;
    meteors.push({
      x:     Math.random() * W * 0.8,
      y:     Math.random() * H * 0.3,
      len:   70 + Math.random() * 120,
      speed: 4 + Math.random() * 6,
      angle: Math.PI / 4,
      life:  1.0
    });
  }
  var meteorInterval = setInterval(spawnMeteor, 2800);

  var rafId;
  function drawFrame() {
    ctx.clearRect(0, 0, W, H);


    if (isDark) {
      var g1 = ctx.createRadialGradient(W * 0.25, H * 0.15, 0, W * 0.5, H * 0.5, W * 0.75);
      g1.addColorStop(0, 'rgba(18,28,75,0.55)');
      g1.addColorStop(1, 'rgba(7,9,15,0)');
      ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H);

      var g2 = ctx.createRadialGradient(W * 0.82, H * 0.72, 0, W * 0.7, H * 0.8, W * 0.5);
      g2.addColorStop(0, 'rgba(201,144,10,0.055)');
      g2.addColorStop(1, 'rgba(7,9,15,0)');
      ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H);
    } else {
      var g3 = ctx.createRadialGradient(W * 0.5, H * 0.1, 0, W * 0.5, H * 0.5, W * 0.85);
      g3.addColorStop(0, 'rgba(184,126,8,0.045)');
      g3.addColorStop(1, 'rgba(247,242,232,0)');
      ctx.fillStyle = g3; ctx.fillRect(0, 0, W, H);
    }

    for (var s = 0; s < stars.length; s++) {
      var st = stars[s];
      st.a += st.da;
      if (st.a > 1 || st.a < 0) st.da *= -1;
      st.x += st.vx; st.y += st.vy;
      if (st.x < 0) st.x = W; if (st.x > W) st.x = 0;
      if (st.y < 0) st.y = H; if (st.y > H) st.y = 0;
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
      ctx.fillStyle = isDark
        ? 'rgba(195,215,255,' + (st.a * 0.75) + ')'
        : 'rgba(130,100,40,'  + (st.a * 0.18) + ')';
      ctx.fill();
    }

    if (isDark) {
      var alive = [];
      for (var m = 0; m < meteors.length; m++) {
        var mt = meteors[m];
        mt.x    += Math.cos(mt.angle) * mt.speed;
        mt.y    += Math.sin(mt.angle) * mt.speed;
        mt.life -= 0.016;
        if (mt.life <= 0 || mt.x > W || mt.y > H) continue;
        var tx = mt.x - Math.cos(mt.angle) * mt.len;
        var ty = mt.y - Math.sin(mt.angle) * mt.len;
        var mg = ctx.createLinearGradient(tx, ty, mt.x, mt.y);
        mg.addColorStop(0, 'rgba(255,255,255,0)');
        mg.addColorStop(1, 'rgba(255,255,255,' + (mt.life * 0.72) + ')');
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(mt.x, mt.y);
        ctx.strokeStyle = mg; ctx.lineWidth = 1.4; ctx.stroke();
        alive.push(mt);
      }
      meteors = alive;
    }

    rafId = requestAnimationFrame(drawFrame);
  }

  drawFrame();

  return function() {
    clearInterval(meteorInterval);
    if (rafId) cancelAnimationFrame(rafId);
  };
}

function restartCanvas() {
  if (state.canvasStop) state.canvasStop();
  state.canvasStop = initCanvas();
}




$('theme-toggle-btn').addEventListener('click', toggleTheme);

$('lang-toggle-btn').addEventListener('click', toggleLang);


$('modal-close-btn').addEventListener('click', closeModal);
$('modal-backdrop').addEventListener('click', function(evt) {
  if (evt.target === $('modal-backdrop')) closeModal();
});


$('arrow-prev').addEventListener('click', function() {
  galleryNavigate(document.documentElement.dir === 'rtl' ? 1 : -1);
});
$('arrow-next').addEventListener('click', function() {
  galleryNavigate(document.documentElement.dir === 'rtl' ? -1 : 1);
});

document.addEventListener('keydown', function(evt) {
  var backdrop = $('modal-backdrop');
  if (evt.key === 'Escape') {
    if (backdrop.classList.contains('is-open')) { closeModal(); return; }
    if (state.suggestionsOpen) { hideSuggestions(); return; }
  }
  if (backdrop.classList.contains('is-open')) {
    if (evt.key === 'ArrowLeft')
      galleryNavigate(document.documentElement.dir === 'rtl' ? 1 : -1);
    if (evt.key === 'ArrowRight')
      galleryNavigate(document.documentElement.dir === 'rtl' ? -1 : 1);
  }
});


$('search-input').addEventListener('input', function() {
  state.searchQuery = this.value.trim();
  renderSuggestions(state.searchQuery);
  renderProducts();
});

$('search-icon-btn').addEventListener('click', function() {
  hideSuggestions();
  renderProducts();
  scrollToProducts();
});


$('search-input').addEventListener('keydown', function(evt) {
  if (evt.key === 'Enter') {
    evt.preventDefault();
    hideSuggestions();
    renderProducts();
    scrollToProducts();
  }

  if (evt.key === 'Escape') { hideSuggestions(); }
});


$('search-input').addEventListener('blur', function() {

  setTimeout(hideSuggestions, 180);
});


$('search-input').addEventListener('focus', function() {
  if (state.searchQuery) renderSuggestions(state.searchQuery);
});


window.addEventListener('scroll', function() {
  var btn = $('scroll-to-top-btn');
  if (window.scrollY > 420) btn.classList.add('is-visible');
  else                       btn.classList.remove('is-visible');
});
$('scroll-to-top-btn').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


var resizeTimer = null;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(restartCanvas, 180);
});


pickBestsellerPool();
renderStaticText();
renderCategories();
renderProducts();
state.canvasStop = initCanvas();


function openBazarModal() {
  var backdrop = document.getElementById('bazar-backdrop');
  if (backdrop) {
    backdrop.classList.add('is-open');
    document.body.classList.add('modal-open');
  }
}

function closeBazarModal() {
  var backdrop = document.getElementById('bazar-backdrop');
  if (backdrop) {
    backdrop.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  }
}

function closeBazarOutside(evt) {
  if (evt.target === document.getElementById('bazar-backdrop')) {
    closeBazarModal();
  }
}

document.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    var bazar = document.getElementById('bazar-backdrop');
    if (bazar && bazar.classList.contains('is-open')) {
      closeBazarModal();
    }
  }
});

function updateBazarArrow() {
  var icon = document.getElementById('bazar-arrow-icon');
  if (!icon) return;
  icon.className = document.documentElement.dir === 'rtl'
    ? 'fa-solid fa-arrow-left'
    : 'fa-solid fa-arrow-right';
}
