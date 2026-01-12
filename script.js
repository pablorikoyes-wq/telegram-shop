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
      btn.classList.remove('in-cart');
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
      btn.classList.add('in-cart');
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

  totalEl.textContent = total.toLocaleString() + " so'm";
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

function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}




/* ===== BUTTON STATES ===== */

