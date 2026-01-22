const tg = window.Telegram.WebApp;
tg.ready();

const products = [
  {
    id: 'sofa-1',
    title: 'Uglovoy arab divan (16 narsa)',
    price: 480000,
    oldPrice: 990000,
    discount: '-75%',
    rating: 4.8,
    deliveryText: 'Ertaga',
    images: [
      'assets/products/sofa/sofa-1.jpg',
      'assets/products/sofa/sofa-2.jpg',
      'assets/products/sofa/sofa-3.jpg',
      'assets/products/sofa/sofa-4.jpg',
      'assets/products/sofa/sofa-5.jpg',
      'assets/products/sofa/sofa-6.jpg'
    ],
    colors: [
      { label: 'Qizil', value: 'qizil', imageIndex: 0 },
      { label: 'Yashil', value: 'yashil', imageIndex: 2 },
      { label: "Ko'k", value: 'kok', imageIndex: 4 }
    ],
    description: {
      title: 'L shaklidagi arabcha divan',
      lines: [
        "Biz O'zbekiston bo'ylab yetkazib beramiz",
        '<strong>Narxga nimalar kiradi:</strong>',
        "Yopishqoq qoplamalar + gubka",
        "U 16 ta qismdan iborat va polga mo'ljallangan gilamchani o'z ichiga oladi.",
        '<strong>Narxga nimalar kiradi?</strong>',
        '4 ta 190*70*10 sm pol yostiqchalari',
        '4 ta 95*45*10 sm orqa yostiqchalar',
        "3 ta qo'ltiqtayanchlar",
        '1 ta 60*45*10 sm burchak yostiqchalari',
        "1 ta 120*180 sm polga mo'ljallangan gilamcha",
        '1 ta kofe stoli',
        '3 ta bolalar yostiqchalari',
        'Jami 16 ta'
      ]
    },
    specs: [
      { label: 'Xususiyati', value: 'Buklanadigan' },
      { label: 'Material', value: 'Mato' },
      { label: "Qo'llanilishi", value: "Mehmonxona, ochiq joy, vino sovutgichi, zal, yerto'la" },
      { label: 'Dizayn uslubi', value: "An'anaviy" },
      { label: "Tashqi ko'rinishi", value: 'Antikvar buyum' }
    ],
    reviews: [
      {
        name: 'Aziza',
        date: '12 yanvar 2026',
        text: "Aytishga hojat yo'q, bu ajoyib, chinakamiga hayratlanarli, yuqori sifatli matodan tikilgan, kuchli ekzotik uslubga ega!",
        images: [
          'assets/products/sofa/sofa-1.jpg',
          'assets/products/sofa/sofa-2.jpg',
          'assets/products/sofa/sofa-3.jpg'
        ]
      },
      {
        name: 'Bekzod',
        date: '10 yanvar 2026',
        text: "Divan juda qulay, uzun o'tirganda ham belga og'riq bermaydi. Yostiqchalari yumshoq va shinam."
      },
      {
        name: 'Malika',
        date: '09 yanvar 2026',
        text: "Matosi juda sifatli, rangi ham chiroyli. Mehmonlarimiz ham divanni maqtashdi, juda qulay.",
        images: [
          'assets/products/sofa/malika-1.jpg',
          'assets/products/sofa/malika-2.jpg',
          'assets/products/sofa/malika-3.jpg'
        ]
      },
      {
        name: 'Jasur',
        date: '08 yanvar 2026',
        text: "Uy uchun ideal, buklanadiganligi juda qulay va joyni tejaydi. Oila bilan dam olishga zo'r."
      },
      {
        name: 'Nodira',
        date: '07 yanvar 2026',
        text: "Keng va shinam, uyquga ham yaroqli. Bolalar ham divanda o'ynashni yaxshi ko'radi."
      },
      {
        name: 'Sardor',
        date: '06 yanvar 2026',
        text: "Qulayligi va dizayni yoqdi, yig'ish oson bo'ldi. Divan mustahkam, kundalik foydalanish uchun zo'r."
      },
      {
        name: 'Zarina',
        date: '05 yanvar 2026',
        text: "Mehmonxona uchun ayni muddao, divan juda qulay va keng. Gilamchasi ham foydali chiqdi."
      }
    ]
  },
  {
    id: 'projector-1',
    title: 'Telefon uchun 4K kino proyektori',
    price: 210000,
    oldPrice: 1200000,
    rating: 4.9,
    deliveryText: 'Ertaga',
    images: [
      'assets/products/projector/main-1.jpg',
      'assets/products/projector/main-2.jpg',
      'assets/products/projector/main-3.jpg',
      'assets/products/projector/main-4.jpg',
      'assets/products/projector/main-5.jpg',
      'assets/products/projector/main-6.jpg',
      'assets/products/projector/main-7.jpg',
      'assets/products/projector/main-8.jpg'
    ],
    description: {
      title: "Proyektor — oilaviy film tomosha qilish uchun qulay",
      lines: [
        "Proyektor oilaviy film tomoshalari uchun juda mos! Mini-proyektor xonangizni uy kinoteatriga aylantiradi.",
        "U kino, sevimli seriallar, sport translyatsiyalari va multfilmlarni uyda qulay tomosha qilish imkonini beradi.",
        "Asosiy afzalliklaridan biri — Bluetooth va Wi-Fi orqali simsiz ulanish. Android asosidagi dasturiy ta'minot turli ilova va o'yinlarni o'rnatishga imkon beradi.",
        "Proyektorga sichqoncha, klaviatura, kolonkani ulab, telefon yoki planshetdan videoni uzatish mumkin.",
        "Proyektorni devor, shift yoki rulonli ekran kabi tekis yuzaga yo'naltirsangiz, katta ekranda video ko'rsatadi.",
        "Kichik o'lchami sababli uni olib yurish va saqlash juda qulay. Safarga olib borish yoki uyning turli xonalarida ishlatish mumkin.",
        "Proyektor pult orqali boshqariladi va ichki giroskop yordamida tasvirni burchakka moslab avtomatik sozlaydi.",
        "Uyda sifatli tasvir va tovush bilan sevimli filmlar va multfilmlarni tomosha qilish uchun a'lo tanlov!"
      ]
    },
    specs: [
      { label: 'Ekran formati', value: '16:9' },
      { label: 'Ekran ruxsati', value: '1280*720 HD' },
      { label: 'Kontrast', value: '1500:1' },
      { label: 'Ichki xotira (GB)', value: '8' },
      { label: 'Kuchlanish', value: '5' },
      { label: 'Simsiz interfeyslar', value: 'Bluetooth; Wi-Fi' },
      { label: 'Karnay quvvati', value: '5 vt' }
    ],
    reviews: [
      {
        name: 'Dilshod',
        date: '15 yanvar 2026',
        text: "Proyektor juda zo'r ekan, men o'ylagandim sifati yaxshi bo'lmaydi, lekin hammasi zo'r ekan ☺️",
        images: [
          'assets/products/projector/reviews/review-1-1.jpg',
          'assets/products/projector/reviews/review-1-2.jpg'
        ]
      },
      {
        name: 'Madina',
        date: '14 yanvar 2026',
        text: "Sifati zo'r, hammaga tavsiya qilaman.",
        images: ['assets/products/projector/reviews/review-2-1.jpg']
      },
      {
        name: 'Rustam',
        date: '13 yanvar 2026',
        text: "Hammasi juda yaxshi, sifati kinoteatrdagidek.",
        images: ['assets/products/projector/reviews/review-3-1.jpg']
      },
      {
        name: 'Zuhra',
        date: '12 yanvar 2026',
        text: "Vaaau, bunday arzon narx uchun juda sifatli proyektor 😍😍😍",
        images: ['assets/products/projector/reviews/review-4-1.jpg']
      },
      {
        name: 'Aziz',
        date: '11 yanvar 2026',
        text: 'Tavsiya qilaman 👍🏻'
      },
      {
        name: 'Diyor',
        date: '10 yanvar 2026',
        text: "Minuslari yo'q, dostavka juda tez, raxmat."
      },
      {
        name: 'Gulnoza',
        date: '09 yanvar 2026',
        text: 'Qizimga oldim, juda xursand.'
      }
    ]
  },
  {
    id: 'water-stand-1',
    title: "19 litr suv bochkasi qopqog'i",
    price: 230000,
    oldPrice: 850000,
    discount: '-73%',
    rating: 5.0,
    deliveryText: 'Ertaga',
    images: [
      'assets/products/water-stand/main-1.jpg',
      'assets/products/water-stand/main-2.jpg',
      'assets/products/water-stand/main-3.jpg',
      'assets/products/water-stand/main-4.jpg'
    ],
    description: {
      title: "19 litr shisha qopqog'i",
      lines: [
        "Stol usti-qora porloq sun'iy tosh.",
        "Faqat bizda, suvdan qo'rqmaydigan, namlikdan shishib ketmaydigan va vaqt o'tishi bilan deformatsiyalanmaydigan, yog'ochdan farqli o'laroq, sun'iy toshdan yasalgan stol usti bor.",
        "Stol usti shunchalik kuchliki, chiplar va tirnalishlar qo'rqinchli emas.",
        'Diqqat! Qora nasos kiritilgan!',
        "19 litrli shisha qopqog'i aylanadigan g'ildiraklarda turadi, bu og'ir to'ldirilgan idishning oson harakatlanishini anglatadi, hatto bola ham bardosh bera oladi.",
        "Mahsulot yog'ochdan qilingan."
      ]
    },
    specs: [
      { label: "Ob'ektning balandligi", value: '35 sm' },
      { label: 'Element kengligi', value: '35 sm' },
      { label: 'Mavzu chuqurligi', value: '55 sm' },
      { label: 'Paket bilan vazn', value: '9 Kg' },
      { label: 'Paket bilan vazn', value: '60 sm' },
      { label: 'Paket balandligi', value: '40 sm' },
      { label: 'Paket kengligi', value: '40 sm' }
    ],
    reviews: [
      {
        name: 'Aziza',
        date: '16 yanvar 2026',
        text: 'Bizning uyimizga juda mos keldi 😍😍😍 raxmat',
        images: [
          'assets/products/water-stand/reviews/review-1-1.jpg',
          'assets/products/water-stand/reviews/review-1-2.jpg'
        ]
      },
      {
        name: 'Sardor',
        date: '15 yanvar 2026',
        text: "Bir marta bosish uchun juda qulay nasos, bir stakan suv oladi, juda zamonaviy, men sotib olganimdan xursandman.",
        images: ['assets/products/water-stand/reviews/review-2-1.jpg']
      },
      {
        name: 'Madina',
        date: '14 yanvar 2026',
        text: "Chiroyli mahsulot va tez yetkazib berish uchun sotuvchiga rahmat.",
        images: ['assets/products/water-stand/reviews/review-3-1.jpg']
      },
      {
        name: 'Javohir',
        date: '13 yanvar 2026',
        text: "Xarid qilishdan juda mamnunman, juda chiroyli va zamonaviy ko'rinadi.",
        images: ['assets/products/water-stand/reviews/review-4-1.jpg']
      }
    ]
  },
  {
    id: 'dishwasher-1',
    title: 'Idish yuvish mashinasi mini ixcham',
    price: 350000,
    oldPrice: 1210000,
    discount: '-71%',
    rating: 4.9,
    deliveryText: 'Ertaga',
    images: [
      'assets/products/dishwasher/main-1.jpg',
      'assets/products/dishwasher/main-2.jpg',
      'assets/products/dishwasher/main-3.jpg',
      'assets/products/dishwasher/main-4.jpg',
      'assets/products/dishwasher/main-5.jpg'
    ],
    description: {
      title: 'Idish yuvish mashinasi mini ixcham',
      lines: [
        "Zamonaviy yoki minimalist oshxonalarga mos keladigan ajoyib qora korpusli 6 to'plamli stol idish yuvish mashinasi.",
        "Beshta dastur ifloslanish darajasiga qarab jarayonni moslashuvchan sozlash imkonini beradi: intensiv, normal, Eko, shisha va tez rejimlar.",
        "Sensorli boshqaruv paneli texnika bilan o'zaro aloqani osonlashtiradi va suv yumshatgich barqaror samaradorlikni saqlashga g'amxo'rlik qiladi va shkalaning oldini oladi.",
        "Kondensatsiyani quritish tufayli idishlar tomchilarsiz qoladi va qurilmaning o'zi minimal joyni egallaydi, bu uni kichik kvartiralar va studiyalar uchun ideal qiladi."
      ]
    },
    specs: [
      { label: "Ob'ektning balandligi", value: '45 sm' },
      { label: 'Element kengligi', value: '55 sm' },
      { label: 'Mavzu chuqurligi', value: '50 sm' },
      { label: 'Paketsiz vazn', value: '19 Kg' },
      { label: 'Paket bilan vazn', value: '22 Kg' },
      { label: 'Paket bilan vazn', value: '59 sm' },
      { label: 'Paket balandligi', value: '53 sm' },
      { label: 'Paket kengligi', value: '58 sm' }
    ],
    reviews: [
      {
        name: 'Shahnoza',
        date: '16 yanvar 2026',
        text: "Idish yuvish moshinasi juda daxshat, hech minuslari yo'q, 5 kun ishlatvoman hech minuslarini topomadim, dastavla juda tez edi😊",
        images: ['assets/products/dishwasher/reviews/review-1-1.jpg']
      },
      {
        name: 'Farrux',
        date: '15 yanvar 2026',
        text: "Dastavkasi juda tez kelgan, mashinasi zo'r, xali minus tomonlarini topomadim, gap yo'q.",
        images: ['assets/products/dishwasher/reviews/review-2-1.jpg']
      },
      {
        name: 'Madina',
        date: '14 yanvar 2026',
        text: "Yaxshi yuvadi va sifatli, endi xotinim umuman charchamaydi va bu narxdan mamnun bo'lib yuradi, faqat eng yaxshi topilma."
      },
      {
        name: 'Javohir',
        date: '13 yanvar 2026',
        text: 'Juda daxshat narsa ekan 😍',
        images: ['assets/products/dishwasher/reviews/review-4-1.jpg']
      }
    ]
  },
  {
    id: 'a4-printer-1',
    title: 'A4 chop etish uchun mini printer',
    price: 240000,
    oldPrice: 1340000,
    discount: '-82%',
    rating: 5.0,
    deliveryText: 'Ertaga',
    images: [
      'assets/products/a4-printer/main-1.jpg',
      'assets/products/a4-printer/main-2.jpg',
      'assets/products/a4-printer/main-3.jpg'
    ],
    description: {
      title: 'A4 chop etish uchun mini printer',
      lines: [
        "Hujjatlar, eslatmalar yoki rasmlarni istalgan joyda va qulay vaqtda chop etish uchun universal echimni qidiryapsizmi? Sizning e'tiboringizga siyoh ishlatmasdan chop etish imkoniyati beruvchi portativ simsiz A4 printerini taqdim etamiz.",
        "Ushbu ajoyib A4 printeri ilg'or texnologiyalar va foydalanish qulayligini birlashtirib, uni turli vazifalar uchun mukammal tanlov qiladi.",
        "Rangli sahifani, muhim hujjatni, hatto tatuirovkalarni chop etishingiz kerakmi yoki yo'qmi, bu termal printer har qanday vazifani bajaradi.",
        "Siz printerga osongina ulanishingiz mumkin. Bluetooth va hujjatlarni to'g'ridan-to'g'ri smartfon yoki planshetdan chop eting.",
        "Siyohsiz chop etish imkoniyati bilan siz kartridjlarni almashtirishda tejaysiz va printerdan istalgan vaqtda, istalgan joyda foydalanishingiz mumkin.",
        "Ushbu mini A4 printeri ixcham o'lcham va engil vaznga ega bo'lib, uni sayohat, maktab yoki ish uchun ideal qiladi.",
        "Mini simsiz printerda yorliqlar yoki stikerlarni chop etish ham mavjud."
      ]
    },
    specs: [
      { label: "Ob'ektning balandligi", value: '26 sm' },
      { label: 'Element kengligi', value: '8 sm' },
      { label: 'Mavzu chuqurligi', value: '4.7 sm' },
      { label: 'Paketsiz vazn', value: '0.73 Kg' },
      { label: 'Paket bilan vazn', value: '1.36 Kg' },
      { label: 'Paket bilan vazn', value: '30 sm' },
      { label: 'Paket balandligi', value: '12 sm' },
      { label: 'Paket kengligi', value: '13 sm' }
    ],
    reviews: [
      {
        name: 'Kamola',
        date: '16 yanvar 2026',
        text: "Bosib chiqarish sifati juda yaxshi, men 5 yulduzni qo'ydim.",
        images: ['assets/products/a4-printer/reviews/review-1-1.jpg']
      },
      {
        name: 'Sherzod',
        date: '15 yanvar 2026',
        text: "1 kun ichida etib keldi, raxmat, juda zo'r narsa.",
        images: ['assets/products/a4-printer/reviews/review-2-1.jpg']
      },
      {
        name: 'Dilnoza',
        date: '14 yanvar 2026',
        text: "Gap yo'q, printer juda zo'r, tavsiya qilaman.",
        images: ['assets/products/a4-printer/reviews/review-3-1.jpg']
      },
      {
        name: 'Jasur',
        date: '13 yanvar 2026',
        text: "😍😍😍 zo'r narsa, telfon orqali pechat qilish oson, olinglar, minuslarini topolmadim.",
        images: [
          'assets/products/a4-printer/reviews/review-4-1.jpg',
          'assets/products/a4-printer/reviews/review-4-2.jpg'
        ]
      },
      {
        name: 'Malika',
        date: '12 yanvar 2026',
        text: 'Printerga gap yo\'q, hammasi ishlayapti, talabalar uchun zarur narsa 😊'
      }
    ]
  }
];

const productsById = new Map(products.map(product => [product.id, product]));
let currentProductId = products[0]?.id;
let currentProductColor = null;
const selectedColors = new Map();

const stockRanges = [
  { min: 15, max: 20 },
  { min: 7, max: 15 },
  { min: 1, max: 5 }
];

const starIconMarkup = `
  <svg class="star-icon-small" viewBox="0 0 24 24" fill="#FFA500">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
`;

function formatPrice(value) {
  return Number(value || 0).toLocaleString();
}

function getPriceLabel(product) {
  if (product.priceLabel) return product.priceLabel;
  return `${formatPrice(product.price)} so'm`;
}

function getProduct(productId) {
  return productsById.get(productId);
}

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getStockCount(productId) {
  const dayIndex = Math.floor(Date.now() / 86400000);
  const range = stockRanges[dayIndex % stockRanges.length];
  const seed = dayIndex + hashString(productId);
  const rnd = seededRandom(seed);
  return range.min + Math.floor(rnd * (range.max - range.min + 1));
}

function getStockLabel(productId) {
  const count = getStockCount(productId);
  return `Qoldi ${count} dona`;
}

function getDefaultColor(product) {
  return product?.colors?.[0] || null;
}

function getProductColor(product) {
  if (!product?.colors?.length) return null;
  return selectedColors.get(product.id) || getDefaultColor(product);
}

function getColorImage(product, color) {
  if (!product?.images?.length) return '';
  if (color && Number.isInteger(color.imageIndex)) {
    return product.images[color.imageIndex] || product.images[0];
  }
  return product.images[0];
}

function renderStars() {
  return `${starIconMarkup.repeat(5)}`;
}

function renderReviewImages(images = []) {
  if (!images.length) return '';
  const imagesMarkup = images.map(src => `<img src="${src}">`).join('');
  return `<div class="review-images">${imagesMarkup}</div>`;
}

function renderReviewCard(review) {
  return `
    <div class="review-card">
      <div class="review-rating">
        ${renderStars()}
      </div>
      ${review.date ? `<div class="review-date">${review.date}</div>` : ''}
      <p class="review-text">
        <strong>${review.name}:</strong> ${review.text}
      </p>
      ${renderReviewImages(review.images)}
    </div>
  `;
}

function renderProductColors(product) {
  const container = document.getElementById('product-colors');
  if (!container) return;

  if (!product?.colors?.length) {
    container.innerHTML = '';
    container.style.display = 'none';
    currentProductColor = null;
    return;
  }

  const selectedColor = getProductColor(product);
  currentProductColor = selectedColor;
  selectedColors.set(product.id, selectedColor);
  container.style.display = 'block';
  container.innerHTML = `
    <div class="color-title">Rangi</div>
    <div class="color-options">
      ${product.colors
        .map(
          (color) =>
            `<button class="color-option" type="button" data-color-value="${color.value}">${color.label}</button>`
        )
        .join('')}
    </div>
  `;

  if (Number.isInteger(selectedColor?.imageIndex)) {
    productSliderIndex = Math.min(selectedColor.imageIndex, product.images.length - 1);
    updateProductSlider();
  }

  const buttons = container.querySelectorAll('.color-option');
  buttons.forEach((button) => {
    const isActive = button.dataset.colorValue === selectedColor?.value;
    if (isActive) button.classList.add('active');
    button.addEventListener('click', () => {
      const nextColor = product.colors.find(
        (color) => color.value === button.dataset.colorValue
      );
      if (!nextColor) return;
      selectedColors.set(product.id, nextColor);
      currentProductColor = nextColor;
      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      if (Number.isInteger(nextColor.imageIndex)) {
        productSliderIndex = Math.min(nextColor.imageIndex, product.images.length - 1);
        updateProductSlider();
      }
    });
  });
}

function renderProductCards() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  grid.innerHTML = products.map(product => {
    const slidesMarkup = product.images.map(src => `<img src="${src}">`).join('');
    const dotsMarkup = product.images
      .map((_, index) => `<span${index === 0 ? ' class="active"' : ''}></span>`)
      .join('');
    const oldPriceMarkup = product.oldPrice
      ? `<div class="price-old">${formatPrice(product.oldPrice)} so'm</div>`
      : '';
    const priceLabel = getPriceLabel(product);
    const reviewsLabel = `(${product.reviews.length} ta sharh)`;
    const defaultColor = getDefaultColor(product);
    const colorImage = getColorImage(product, defaultColor);

    return `
      <div class="product-card" data-product-id="${product.id}">
        <div class="slider">
          <div class="slides">
            ${slidesMarkup}
          </div>
        </div>

        <div class="dots">
          ${dotsMarkup}
        </div>

        <div class="price">
          <div class="price-new">${priceLabel}</div>
          ${oldPriceMarkup}
        </div>

        <div class="title">${product.title}</div>

        <div class="rating">
          <span class="star"></span>
          <span class="rate">${product.rating.toFixed(1)}</span>
          <span class="reviews">${reviewsLabel}</span>
        </div>

        <button
          class="add-btn"
          data-id="${product.id}"
          data-title="${product.title}"
          data-price="${Number(product.price) || 0}"
          data-image="${colorImage}"
          data-delivery-text="${product.deliveryText || 'Ertaga'}"
          onclick="event.stopPropagation(); quickAddToCart(event)"
        >
          <span class="cart-icon">
            <svg viewBox="0 0 24 24" class="cart-svg">
              <path d="M6 8h12l-1.2 11H7.2L6 8Z"/>
              <path d="M9 8V6a3 3 0 0 1 6 0v2"/>
            </svg>
          </span>
          <span class="delivery-text">${product.deliveryText || 'Ertaga'}</span>
        </button>
      </div>
    `;
  }).join('');

  bindProductCardEvents();
  initCardSliders();
}

function bindProductCardEvents() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      openProduct(card.dataset.productId);
    });
  });
}

function initCardSliders() {
  document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    const dots = slider.parentElement.querySelectorAll('.dots span');

    let index = 0;
    let startX = 0;

    const updateSlider = () => {
      slides.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index]?.classList.add('active');
    };

    slider.ontouchstart = (e) => {
      startX = e.touches[0].clientX;
    };

    slider.ontouchend = (e) => {
      const diff = startX - e.changedTouches[0].clientX;

      if (diff > 40 && index < images.length - 1) index += 1;
      if (diff < -40 && index > 0) index -= 1;

      updateSlider();
    };

    updateSlider();
  });
}

function renderProductPage(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const title = document.getElementById('product-title');
  const rate = document.getElementById('product-rate');
  const reviewsCount = document.getElementById('product-reviews-count');
  const priceCurrent = document.getElementById('product-price-current');
  const priceOld = document.getElementById('product-price-old');
  const discount = document.getElementById('product-discount');
  const reviewCountTitle = document.getElementById('product-review-count');
  const reviewPreview = document.getElementById('product-review-preview');
  const description = document.getElementById('product-description');
  const specs = document.getElementById('product-specs');
  const bottomPrice = document.getElementById('product-bottom-price');
  const bottomDelivery = document.getElementById('product-bottom-delivery');
  const stock = document.getElementById('product-stock');
  const sliderImages = document.getElementById('product-slider-images');
  const sliderDots = document.getElementById('product-dots');

  title.textContent = product.title;
  rate.textContent = product.rating.toFixed(1);
  reviewsCount.textContent = `(${product.reviews.length} ta sharh)`;
  priceCurrent.textContent = getPriceLabel(product);

  if (product.oldPrice) {
    priceOld.textContent = `${formatPrice(product.oldPrice)} so'm`;
    priceOld.style.display = 'block';
  } else {
    priceOld.textContent = '';
    priceOld.style.display = 'none';
  }

  if (product.discount) {
    discount.textContent = product.discount;
    discount.style.display = 'inline-flex';
  } else {
    discount.textContent = '';
    discount.style.display = 'none';
  }

  reviewCountTitle.textContent = `${product.reviews.length} ta sharh`;
  reviewPreview.innerHTML = product.reviews.length
    ? renderReviewCard(product.reviews[0])
    : "<p class='review-text'>Hozircha sharh yo'q</p>";

  description.innerHTML = `
    <h3>${product.description.title}</h3>
    ${product.description.lines.map(line => `<p>${line}</p>`).join('')}
  `;

  specs.innerHTML = product.specs
    .map(spec => `<p><strong>${spec.label}:</strong> ${spec.value}</p>`)
    .join('');

  if (bottomPrice) bottomPrice.textContent = getPriceLabel(product);
  if (bottomDelivery) bottomDelivery.textContent = product.deliveryText || 'Ertaga';
  if (stock) stock.textContent = getStockLabel(product.id);

  sliderImages.innerHTML = product.images
    .map(src => `<img src="${src}" alt="${product.title}">`)
    .join('');
  sliderDots.innerHTML = product.images
    .map((_, index) => `<span class="dot${index === 0 ? ' active' : ''}"></span>`)
    .join('');

  productSliderIndex = 0;
  initProductSlider();
  renderProductColors(product);
  switchTab(0);
}

function renderReviewsPage(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const title = document.getElementById('reviews-page-title');
  const list = document.getElementById('reviews-list');

  title.textContent = `Sharhlar (${product.reviews.length})`;
  list.innerHTML = product.reviews.map(review => renderReviewCard(review)).join('');
}

/* ===== SPLASH (один раз) ===== */
document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const app = document.getElementById("app");

  const splashShown = sessionStorage.getItem("splashShown");

  if (!splashShown) {
    splash.style.display = "flex";
    setTimeout(() => {
      splash.style.display = "none";
      app.style.display = "block";
      sessionStorage.setItem("splashShown", "true");
    }, 1500);
  } else {
    splash.style.display = "none";
    app.style.display = "block";
  }
  
  renderProductCards();
  if (currentProductId) {
    renderProductPage(currentProductId);
  }
  updateMainPageButton();
});


/* ===== PAGE SWITCH (SPA) ===== */
document.querySelectorAll('.bottom-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const page = link.dataset.page;

    // переключаем страницы
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active');
    });

    const targetPage = document.getElementById('page-' + page);
    if (targetPage) targetPage.classList.add('active');

    // активная кнопка
    document.querySelectorAll('.bottom-nav a').forEach(a => {
      a.classList.remove('active');
    });
    link.classList.add('active');

    // 🔥 ВАЖНО: если зашли в корзину — перерисовываем её
    if (page === 'cart') {
      renderCart();
    }
  });
});


/* ===== PROFILE SAVE / LOAD ===== */
document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("profile-name");
  const surnameInput = document.getElementById("profile-surname");
  const phoneInput = document.getElementById("profile-phone");
  const addressInput = document.getElementById("profile-address");
  const saveBtn = document.getElementById("save-profile");
  const contactBtn = document.getElementById("contact-us");

  // загрузка профиля
  const savedProfile = localStorage.getItem("profile");
  if (savedProfile) {
    const profile = JSON.parse(savedProfile);
    nameInput.value = profile.name || "";
    surnameInput.value = profile.surname || "";
    phoneInput.value = profile.phone || "";
    addressInput.value = profile.address || "";
  }

  // сохранение профиля
  saveBtn.addEventListener("click", () => {
    const profile = {
      name: nameInput.value.trim(),
      surname: surnameInput.value.trim(),
      phone: phoneInput.value.trim(),
      address: addressInput.value.trim()
    };

    localStorage.setItem("profile", JSON.stringify(profile));
    tg.showAlert('Saqlandi!');
  });

  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      openManagerContact();
    });
  }
});



function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function buildCartItem(product, color) {
  const colorLabel = color?.label || '';
  const colorValue = color?.value || '';
  return {
    id: product.id,
    title: product.title,
    price: Number(product.price) || 0,
    image: getColorImage(product, color),
    qty: 1,
    selected: true,
    colorLabel,
    colorValue
  };
}

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    let cart = getCart();
    const index = cart.findIndex(i => i.id === id);
    const text = btn.querySelector('.delivery-text');

    if (index !== -1) {
      cart.splice(index, 1);
      saveCart(cart);

      text.textContent = 'Ertaga';
      btn.classList.remove('savatchada');
    } else {
      cart.push({
        id,
        title: btn.dataset.title,
        price: Number(btn.dataset.price),
        image: btn.dataset.image,
        qty: 1,
        selected: true
      });

      saveCart(cart);

      text.textContent = 'Savatchada';
      btn.classList.add('savatchada');
    }

    renderCart();
  });
});





/* RENDER CART */
function renderCart() {
  const empty = document.getElementById('cart-empty');
  const cart = getCart();
  const list = document.getElementById('cart-items');
  const totalEl = document.getElementById('total-sum');
  const checkout = document.getElementById('checkout-btn');

  if (!list) return;

  list.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    if (item.selected) {
      total += item.price * item.qty;
    }

    empty.style.display = cart.length === 0 ? 'block' : 'none';
    const colorMarkup = item.colorLabel
      ? `<div class="cart-color">Rangi: ${item.colorLabel}</div>`
      : '';


    list.innerHTML += `
      <div class="cart-item">
        <input type="checkbox" ${item.selected ? 'checked' : ''}
          onchange="toggleSelect(${index})">

        <img src="${item.image}">

        <div class="cart-info">
          <div>${item.title}</div>
          ${colorMarkup}
          <strong>${(item.price * item.qty).toLocaleString()} so'm</strong>

          <div class="cart-actions">
  <div class="qty-box">
    <button onclick="changeQty(${index}, -1)">−</button>
    <span>${item.qty}</span>
    <button onclick="changeQty(${index}, 1)">+</button>
  </div>

  <button class="buy-btn">Sotib olish</button>
</div>

        </div>
      </div>
    `;
  });

  totalEl.textContent = total.toLocaleString();
  checkout.style.display = cart.length ? 'block' : 'none';
}

function changeQty(index, delta) {
  const cart = getCart();
  cart[index].qty += delta;
  if (cart[index].qty < 1) cart[index].qty = 1;
  saveCart(cart);
  renderCart();
}

function toggleSelect(index) {
  const cart = getCart();
  cart[index].selected = !cart[index].selected;
  saveCart(cart);
  renderCart();
}

/* ===== TOGGLE ADD / REMOVE (ERTAGA) ===== */

function isInCart(id) {
  return getCart().some(item => item.id === id);
}

function removeFromCart(id) {
  let cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
}




/* ===== BUTTON STATES ===== */

/* ===== OPEN PRODUCT PAGE ===== */
function openProduct(productId = currentProductId) {
  const product = getProduct(productId);
  if (!product) return;
  currentProductId = product.id;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-product').classList.add('active');
  
  document.querySelectorAll('.bottom-nav a').forEach(a => a.classList.remove('active'));

  renderProductPage(product.id);
  checkProductInCart();
  updateMainPageButton();
}

function goToHome() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-home').classList.add('active');
  
  document.querySelectorAll('.bottom-nav a').forEach(a => a.classList.remove('active'));
  document.querySelector('[data-page="home"]').classList.add('active');
}

function updateMainPageButton() {
  const cart = getCart();
  const buttons = document.querySelectorAll('.add-btn');
  
  buttons.forEach(btn => {
    const productId = btn.dataset.id;
    const text = btn.querySelector('.btn-label') || btn.querySelector('.delivery-text');
    if (!text || !productId) return;
    const defaultText = btn.dataset.defaultText || btn.dataset.deliveryText || 'Ertaga';
    const addedText = btn.dataset.addedText || 'Savatchada';

    const item = cart.find(i => i.id === productId);
    
    // Удаляем все старые бейджи
    const oldBadges = btn.querySelectorAll('.cart-badge');
    oldBadges.forEach(badge => badge.remove());
    
    if (item) {
      text.textContent = addedText;
      btn.classList.add('savatchada');
      
      // Добавляем ОДИН новый бейдж
      if (!btn.classList.contains('no-badge')) {
        const badge = document.createElement('span');
        badge.className = 'cart-badge';
        badge.textContent = item.qty;
        btn.appendChild(badge);
      }
    } else {
      text.textContent = defaultText;
      btn.classList.remove('savatchada');
    }
  });
}

/* ===== PRODUCT SLIDER ===== */
let productSliderIndex = 0;

function initProductSlider() {
  productSliderIndex = 0;
  updateProductSlider();
  
  const slider = document.getElementById('product-slider-images');
  const track = document.querySelector('#page-product .product-slider-track');
  const dots = document.querySelectorAll('#product-dots .dot');
  let startX = 0;
  if (!slider || !track) return;

  track.style.touchAction = 'pan-y';

  const handleSwipe = (endX) => {
    const diff = startX - endX;
    const totalSlides = slider.querySelectorAll('img').length;

    if (Math.abs(diff) < 40) return;

    if (diff > 0 && productSliderIndex < totalSlides - 1) {
      productSliderIndex += 1;
    } else if (diff < 0 && productSliderIndex > 0) {
      productSliderIndex -= 1;
    }

    updateProductSlider();
  };

  if ('PointerEvent' in window) {
    track.onpointerdown = (e) => {
      startX = e.clientX;
    };

    track.onpointerup = (e) => {
      handleSwipe(e.clientX);
    };
  } else {
    track.ontouchstart = (e) => {
      startX = e.touches[0].clientX;
    };

    track.ontouchend = (e) => {
      handleSwipe(e.changedTouches[0].clientX);
    };
  }
  
  dots.forEach((dot, index) => {
    dot.onclick = () => {
      productSliderIndex = index;
      updateProductSlider();
    };
  });
}

function updateProductSlider() {
  const slider = document.getElementById('product-slider-images');
  const dots = document.querySelectorAll('#product-dots .dot');
  
  slider.style.transform = `translateX(-${productSliderIndex * 100}%)`;
  
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === productSliderIndex);
  });
}

/* ===== TABS ===== */
function switchTab(tabIndex) {
  const tabs = document.querySelectorAll('#page-product .tab');
  const contents = document.querySelectorAll('#page-product .tab-content');
  
  tabs.forEach((tab, index) => {
    tab.classList.toggle('active', index === tabIndex);
  });
  
  contents.forEach((content, index) => {
    content.classList.toggle('active', index === tabIndex);
  });
}

/* ===== ADD TO CART FROM PRODUCT ===== */
function addToCartFromProduct() {
  let cart = getCart();
  const product = getProduct(currentProductId);
  if (!product) return;
  
  const color = getProductColor(product);
  const existingIndex = cart.findIndex(item => item.id === product.id);
  
  if (existingIndex !== -1) {
    cart.splice(existingIndex, 1);
  } else {
    cart.push(buildCartItem(product, color));
  }
  
  saveCart(cart);
  checkProductInCart();
  updateMainPageButton();
}

/* ===== QUICK ADD (НА ГЛАВНОЙ) ===== */
function addToCartFromCard(event) {
  event.stopPropagation();

  let cart = getCart();
  const btn = event.target.closest('button');
  if (!btn) return;
  const productId = btn.dataset.id;
  const product = getProduct(productId);
  if (!product) return;

  const color = getDefaultColor(product);
  const existingIndex = cart.findIndex(item => item.id === product.id);

  if (existingIndex !== -1) {
    // Удаляем из корзины
    cart.splice(existingIndex, 1);
  } else {
    // Добавляем в корзину
    cart.push(buildCartItem(product, color));
  }

  saveCart(cart);
  renderCart();
  updateMainPageButton();
  checkProductInCart();
}

function quickAddToCart(event) {
  addToCartFromCard(event);
}

function buyNowFromProduct() {
  const product = getProduct(currentProductId);
  if (!product) return;

  const color = getProductColor(product);
  let cart = getCart().map(item => ({ ...item, selected: false }));
  const existingIndex = cart.findIndex(item => item.id === product.id);
  const nextItem = buildCartItem(product, color);

  if (existingIndex !== -1) {
    cart[existingIndex] = {
      ...cart[existingIndex],
      ...nextItem,
      selected: true
    };
  } else {
    cart.push(nextItem);
  }

  saveCart(cart);
  renderCart();
  updateMainPageButton();
  checkProductInCart();
  openCheckout();
}

/* ===== OPEN REVIEWS PAGE ===== */
function openReviews() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-reviews').classList.add('active');
  renderReviewsPage(currentProductId);
}

function backToProduct() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-product').classList.add('active');
}

/* ===== CHECK IF IN CART ON OPEN ===== */
function checkProductInCart() {
  const cart = getCart();
  const btn = document.getElementById('product-add-btn');
  if (!btn) return;
  const btnText = btn.querySelector('.btn-label') || btn.querySelector('.btn-text');
  const btnCount = btn.querySelector('.btn-count');
  const item = cart.find(i => i.id === currentProductId);
  
  if (item) {
    btn.classList.add('in-cart');
    if (btnText) btnText.textContent = 'Savatchada';
    if (btnCount) btnCount.style.display = 'none';
  } else {
    btn.classList.remove('in-cart');
    if (btnText) btnText.textContent = 'Savatga';
    if (btnCount) btnCount.style.display = 'none';
  }
}

/* ===== CHECKOUT ===== */
function openCheckout() {
  const cart = getCart();
  const selected = cart.filter(item => item.selected);
  
  if (selected.length === 0) {
    tg.showAlert('Savatda mahsulot yo\'q');
    return;
  }

  // переключаем страницы
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-checkout').classList.add('active');

  // данные профиля
  const profile = JSON.parse(localStorage.getItem('profile')) || {};
  
  // Объединяем имя и фамилию
  const fullName = [profile.name, profile.surname].filter(Boolean).join(' ');
  document.getElementById('checkout-name').value = fullName;
  document.getElementById('checkout-phone').value = profile.phone || '';
  document.getElementById('checkout-address').value = profile.address || '';

  // товары
  const list = document.getElementById('checkout-items');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const totalEl = document.getElementById('checkout-total');

  list.innerHTML = '';
  let total = 0;

  selected.forEach(item => {
    total += item.price * item.qty;
    const colorInfo = item.colorLabel
      ? `<div class="checkout-item-color">Rangi: ${item.colorLabel}</div>`
      : '';

    list.innerHTML += `
      <div class="checkout-item">
        <img src="${item.image}">
        <div class="checkout-item-info">
          <div class="checkout-item-title">${item.title}</div>
          ${colorInfo}
          <div class="checkout-item-qty">${item.qty} dona</div>
          <div class="checkout-item-price">${(item.price * item.qty).toLocaleString()} so'm</div>
        </div>
      </div>
    `;
  });

  subtotalEl.textContent = total.toLocaleString() + ' so\'m';
  totalEl.textContent = total.toLocaleString() + ' so\'m';
}

function backToCart() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-cart').classList.add('active');
  
  document.querySelectorAll('.bottom-nav a').forEach(a => a.classList.remove('active'));
  document.querySelector('[data-page="cart"]').classList.add('active');
  
  renderCart();
}

/* ===== PAYMENT PAGE ===== */
let paymentTimer;
let timeLeft = 1800; // 30 минут в секундах

function openPaymentPage() {
  const name = document.getElementById('checkout-name').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();
  const address = document.getElementById('checkout-address').value.trim();
  
  if (!name || !phone || !address) {
    tg.showAlert('Iltimos, barcha maydonlarni to\'ldiring!');
    return;
  }

  // Сохраняем данные заказа
  const cart = getCart();
  const selected = cart.filter(item => item.selected);
  const total = selected.reduce((sum, item) => sum + item.price * item.qty, 0);
  
  localStorage.setItem('currentOrder', JSON.stringify({
    customer: { name, phone, address },
    items: selected,
    total: total
  }));

  // Открываем страницу оплаты
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-payment').classList.add('active');

  // Устанавливаем сумму
  document.getElementById('payment-amount').textContent = total.toLocaleString() + ' so\'m';

  // Запускаем таймер
  startPaymentTimer();
}

function startPaymentTimer() {
  // Сбрасываем предыдущий таймер если был
  if (paymentTimer) {
    clearInterval(paymentTimer);
  }

  timeLeft = 1800; // 30 минут
  updateTimerDisplay();

  paymentTimer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(paymentTimer);
      tg.showAlert('Vaqt tugadi! Iltimos, qaytadan urinib ko\'ring.');
      backToCheckout();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('timer').textContent = display;
}

function copyCardNumber() {
  const cardNumber = '9860100126145935';
  
  // Копируем в буфер обмена
  if (navigator.clipboard) {
    navigator.clipboard.writeText(cardNumber).then(() => {
      tg.showAlert('Karta raqami nusxalandi!');
    });
  } else {
    // Fallback для старых браузеров
    const input = document.createElement('input');
    input.value = cardNumber;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    tg.showAlert('Karta raqami nusxalandi!');
  }
}

function backToCheckout() {
  if (paymentTimer) {
    clearInterval(paymentTimer);
  }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-checkout').classList.add('active');
}

function confirmPayment() {
  // Останавливаем таймер
  if (paymentTimer) {
    clearInterval(paymentTimer);
  }

  // Открываем страницу отправки чека
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-receipt').classList.add('active');
}

/* ===== RECEIPT PAGE ===== */
function openManagerChat() {
  // ВАЖНО: Замените на ваш username или ID менеджера
  const managerUsername = 'uzumbox_support'; // Например: 'uzumbox_manager'
  // const managerUserId = '123456789'; // Или ID менеджера
  
  // Получаем данные заказа
  const order = JSON.parse(localStorage.getItem('currentOrder') || '{}');
  const fallbackItems = getCart().filter(item => item.selected);
  const items = Array.isArray(order.items) && order.items.length ? order.items : fallbackItems;
  const itemsTotal = items.reduce((sum, item) => {
    const qty = Number(item.qty) || 1;
    const price = Number(item.price) || 0;
    return sum + qty * price;
  }, 0);
  const totalValue = Number(order.total);
  const total = Number.isFinite(totalValue) && totalValue > 0 ? totalValue : itemsTotal;
  const itemsText = items.length
    ? items
        .map(item => {
          const product = getProduct(item.id);
          const title = item.title || product?.title || 'Mahsulot';
          let colorLabel = item.colorLabel || '';
          if (!colorLabel && item.colorValue && product?.colors?.length) {
            colorLabel =
              product.colors.find(color => color.value === item.colorValue)?.label || '';
          }
          const colorText = colorLabel ? `, rangi: ${colorLabel}` : '';
          const qty = Number(item.qty) || 1;
          const lineTotal = (Number(item.price) || 0) * qty;
          return `• ${title}${colorText} — ${qty} dona — ${lineTotal.toLocaleString()} so'm`;
        })
        .join('\n')
    : '—';
  
  // Формируем сообщение для менеджера
  const message = `
🛒 Yangi buyurtma!

👤 Mijoz: ${order.customer?.name || ''}
📞 Telefon: ${order.customer?.phone || ''}
📍 Manzil: ${order.customer?.address || ''}

📦 Buyurtma:
${itemsText}

💰 Summa: ${total.toLocaleString()} so'm

✅ To'lov amalga oshirildi
  `.trim();

  // Открываем чат с менеджером
  // Вариант 1: По username
  const url = `https://t.me/${managerUsername}?text=${encodeURIComponent(message)}`;
  
  // Вариант 2: По ID (раскомментируйте если используете ID)
  // const url = `tg://user?id=${managerUserId}`;
  
  // Открываем ссылку
  if (tg && typeof tg.openTelegramLink === 'function') {
    tg.openTelegramLink(url);
  } else {
    window.open(url, '_blank');
  }
  
  // Очищаем корзину
  const cart = getCart();
  const remaining = cart.filter(item => !item.selected);
  saveCart(remaining);
  
  // Показываем уведомление
  setTimeout(() => {
    tg.showAlert('Chekni menejerga yuboring!');
  }, 500);
}

function openManagerContact() {
  const managerUsername = 'uzumbox_support';
  const url = `https://t.me/${managerUsername}`;
  if (tg && typeof tg.openTelegramLink === 'function') {
    tg.openTelegramLink(url);
  } else {
    window.open(url, '_blank');
  }
}

function submitOrder() {
  const name = document.getElementById('checkout-name').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();
  const address = document.getElementById('checkout-address').value.trim();
  
  // Валидация
  if (!name || !phone || !address) {
    tg.showAlert('Iltimos, barcha maydonlarni to\'ldiring!');
    return;
  }
  
  const cart = getCart();
  const selected = cart.filter(item => item.selected);
  const total = selected.reduce((sum, item) => sum + item.price * item.qty, 0);
  
  // Формируем данные заказа
  const orderData = {
    items: selected,
    customer: { name, phone, address },
    total: total,
    timestamp: new Date().toISOString()
  };
  
  // Отправляем в бота
  tg.sendData(JSON.stringify(orderData));
  
  // Очищаем корзину
  const remaining = cart.filter(item => !item.selected);
  saveCart(remaining);
  
  // Закрываем Mini App
  tg.close();
}