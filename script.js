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



/* ===== CART ===== */

function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const empty = document.getElementById('cart-empty');
  const checkout = document.getElementById('checkout-btn');

  if (!cartItems) return;

  const cart = getCart();
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    empty.style.display = 'block';
    checkout.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  checkout.style.display = 'block';

  cart.forEach(item => {
  cartItems.innerHTML += `
    <div class="cart-item">
      <img src="${item.image}">
      <div class="cart-info">
        <div>${item.title}</div>
        <strong>${(item.price * item.qty).toLocaleString()} so'm</strong>
<div>Soni: ${item.qty}</div>
      </div>
      <button class="remove-btn" data-id="${item.id}">✕</button>
    </div>
  `;
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('remove-btn')) {
    const id = e.target.dataset.id;
    let cart = getCart();

    cart = cart.filter(item => item.id !== id);

    saveCart(cart);
    renderCart();
  }
});

}

/* ADD TO CART */
/* ===== CART LOGIC ===== */

function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(data) {
  let cart = getCart();
  const existing = cart.find(i => i.id === data.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...data, qty: 1, selected: true });
  }

  saveCart(cart);
}

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const data = {
      id: btn.dataset.id,
      title: btn.dataset.title,
      price: Number(btn.dataset.price),
      image: btn.dataset.image
    };

    addToCart(data);

    // визуальный эффект как WB
    btn.querySelector('.delivery-text').textContent = 'Savatchada';
    const badge = btn.querySelector('.cart-count');
    badge.hidden = false;
    badge.textContent = '1';
  });
});



/* INIT CART */
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const empty = document.getElementById('cart-empty');
  const checkout = document.getElementById('checkout-btn');
  const totalEl = document.getElementById('cart-total');

  if (!cartItems) return;

  const cart = getCart();
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    empty.style.display = 'block';
    checkout.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  checkout.style.display = 'block';

  let total = 0;

  cart.forEach((item, index) => {
    if (item.selected) {
      total += item.price * item.qty;
    }

    cartItems.innerHTML += `
      <div class="cart-item">
        <input type="checkbox" ${item.selected ? 'checked' : ''}
          onchange="toggleSelect(${index})">

        <img src="${item.image}">

        <div class="cart-info">
          <div>${item.title}</div>
          <strong>${(item.price * item.qty).toLocaleString()} so'm</strong>

          <div class="qty">
            <button onclick="changeQty(${index}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${index}, 1)">+</button>
          </div>
        </div>

        <button class="buy-now">Купить</button>
      </div>
    `;
  });

  totalEl.innerText = total.toLocaleString() + " so'm";
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

function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('total-sum');

  if (!container) return;

  container.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    if (item.selected) total += item.price * item.qty;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div>
          <div>${item.title}</div>
          <strong>${item.price.toLocaleString()} so'm</strong>

          <div class="qty">
            <button onclick="changeQty('${item.id}', -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty('${item.id}', 1)">+</button>
            <button class="buy-btn">Купить</button>
          </div>
        </div>
      </div>
    `;
  });

  totalEl.textContent = total.toLocaleString();
}

function changeQty(id, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty < 1) item.qty = 1;

  saveCart(cart);
  renderCart();
}
