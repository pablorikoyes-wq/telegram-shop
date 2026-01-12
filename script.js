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

    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active');
    });

    document.getElementById('page-' + page).classList.add('active');

    document.querySelectorAll('.bottom-nav a').forEach(a => {
      a.classList.remove('active');
    });

    link.classList.add('active');
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

    if (window.Telegram?.WebApp) {
      Telegram.WebApp.showAlert("Profil saqlandi ✅");
    } else {
      alert("Profil saqlandi");
    }
  });
});

/* ===== PROFILE SAVE ===== */
const saveBtn = document.getElementById('save-profile');

if (saveBtn) {
  saveBtn.addEventListener('click', () => {
    const data = {
      name: document.getElementById('profile-name').value,
      surname: document.getElementById('profile-surname').value,
      phone: document.getElementById('profile-phone').value,
      address: document.getElementById('profile-address').value,
    };

    localStorage.setItem('profile', JSON.stringify(data));
    alert('Profil saqlandi ✅');
  });
}

/* LOAD PROFILE */
const saved = localStorage.getItem('profile');
if (saved) {
  const p = JSON.parse(saved);
  document.getElementById('profile-name').value = p.name || '';
  document.getElementById('profile-surname').value = p.surname || '';
  document.getElementById('profile-phone').value = p.phone || '';
  document.getElementById('profile-address').value = p.address || '';
}
