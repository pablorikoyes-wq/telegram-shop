const tg = window.Telegram.WebApp;
tg.ready();

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
  
  // Обновляем кнопку при загрузке
  updateMainPageButton();
});

/* ===== SLIDER ===== */
document.querySelectorAll(".slider").forEach(slider => {
  const slides = slider.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  const dots = slider.parentElement.querySelectorAll(".dots span");

  let index = 0;
  let startX = 0;

  function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index]?.classList.add("active");
  }

  slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", e => {
    const diff = startX - e.changedTouches[0].clientX;

    if (diff > 40 && index < images.length - 1) index++;
    else if (diff < -40 && index > 0) index--;

    updateSlider();
  });

  updateSlider();
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
});



function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
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


    list.innerHTML += `
      <div class="cart-item">
        <input type="checkbox" ${item.selected ? 'checked' : ''}
          onchange="toggleSelect(${index})">

        <img src="${item.image}">

        <div class="cart-info">
          <div>${item.title}</div>
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
function openProduct() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-product').classList.add('active');
  
  document.querySelectorAll('.bottom-nav a').forEach(a => a.classList.remove('active'));
  
  initProductSlider();
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
    const text = btn.querySelector('.delivery-text');
    if (!text) return;
    
    const item = cart.find(i => i.id === 'sofa-1');
    
    // Удаляем все старые бейджи
    const oldBadges = btn.querySelectorAll('.cart-badge');
    oldBadges.forEach(badge => badge.remove());
    
    if (item) {
      text.textContent = 'Savatchada';
      btn.classList.add('savatchada');
      
      // Добавляем ОДИН новый бейдж
      const badge = document.createElement('span');
      badge.className = 'cart-badge';
      badge.textContent = item.qty;
      btn.appendChild(badge);
    } else {
      text.textContent = 'Ertaga';
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
  const dots = document.querySelectorAll('#product-dots .dot');
  let startX = 0;
  
  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  
  slider.addEventListener('touchend', (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    const totalSlides = slider.querySelectorAll('img').length;
    
    if (diff > 50 && productSliderIndex < totalSlides - 1) {
      productSliderIndex++;
    } else if (diff < -50 && productSliderIndex > 0) {
      productSliderIndex--;
    }
    
    updateProductSlider();
  });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      productSliderIndex = index;
      updateProductSlider();
    });
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
  
  const product = {
    id: 'sofa-1',
    title: 'Uglovoy arab divan (16 narsa)',
    price: 250000,
    image: 'assets/products/sofa/sofa-1.jpg',
    qty: 1,
    selected: true
  };
  
  const existingIndex = cart.findIndex(item => item.id === product.id);
  
  if (existingIndex !== -1) {
    cart[existingIndex].qty += 1;
    tg.showAlert('Miqdor oshirildi!');
  } else {
    cart.push(product);
    tg.showAlert('Savatga qo\'shildi!');
  }
  
  saveCart(cart);
  checkProductInCart();
  updateMainPageButton();
}

/* ===== QUICK ADD (НА ГЛАВНОЙ) ===== */
function quickAddToCart(event) {
  event.stopPropagation();
  
  let cart = getCart();
  const btn = event.target.closest('button');
  const text = btn.querySelector('.delivery-text');
  
  const product = {
    id: 'sofa-1',
    title: 'Uglovoy arab divan (16 narsa)',
    price: 250000,
    image: 'assets/products/sofa/sofa-1.jpg',
    qty: 1,
    selected: true
  };
  
  const existingIndex = cart.findIndex(item => item.id === product.id);
  
  // Убираем старый бейдж если есть
  const oldBadge = btn.querySelector('.cart-badge');
  if (oldBadge) oldBadge.remove();
  
  if (existingIndex !== -1) {
    // Удаляем из корзины
    cart.splice(existingIndex, 1);
    text.textContent = 'Ertaga';
    btn.classList.remove('savatchada');
  } else {
    // Добавляем в корзину
    cart.push(product);
    text.textContent = 'Savatchada';
    btn.classList.add('savatchada');
    
    // Добавляем ОДИН бейдж
    const badge = document.createElement('span');
    badge.className = 'cart-badge';
    badge.textContent = '1';
    btn.appendChild(badge);
  }
  
  saveCart(cart);
  renderCart();
}

/* ===== OPEN REVIEWS PAGE ===== */
function openReviews() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-reviews').classList.add('active');
}

function backToProduct() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-product').classList.add('active');
}

/* ===== CHECK IF IN CART ON OPEN ===== */
function checkProductInCart() {
  const cart = getCart();
  const btn = document.getElementById('product-add-btn');
  const btnText = btn.querySelector('.btn-text');
  const btnCount = btn.querySelector('.btn-count');
  
  const item = cart.find(i => i.id === 'sofa-1');
  
  if (item) {
    btn.classList.add('in-cart');
    btnText.textContent = 'Savatchada';
    btnCount.textContent = item.qty;
    btnCount.style.display = 'flex';
  } else {
    btn.classList.remove('in-cart');
    btnText.textContent = 'Savatga';
    btnCount.style.display = 'none';
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

    list.innerHTML += `
      <div class="checkout-item">
        <img src="${item.image}">
        <div class="checkout-item-info">
          <div class="checkout-item-title">${item.title}</div>
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
  
  // Формируем сообщение для менеджера
  const message = `
🛒 Yangi buyurtma!

👤 Mijoz: ${order.customer?.name || ''}
📞 Telefon: ${order.customer?.phone || ''}
📍 Manzil: ${order.customer?.address || ''}

💰 Summa: ${order.total?.toLocaleString() || '0'} so'm

✅ To'lov amalga oshirildi
  `.trim();

  // Открываем чат с менеджером
  // Вариант 1: По username
  const url = `https://t.me/${managerUsername}?text=${encodeURIComponent(message)}`;
  
  // Вариант 2: По ID (раскомментируйте если используете ID)
  // const url = `tg://user?id=${managerUserId}`;
  
  // Открываем ссылку
  window.open(url, '_blank');
  
  // Очищаем корзину
  const cart = getCart();
  const remaining = cart.filter(item => !item.selected);
  saveCart(remaining);
  
  // Показываем уведомление
  setTimeout(() => {
    tg.showAlert('Chekni menejerga yuboring!');
  }, 500);
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