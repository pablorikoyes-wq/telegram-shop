const tg = window.Telegram.WebApp;
tg.ready();

// переключение активной кнопки
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".bottom-nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("splash").remove();
      document.getElementById("app").style.display = "block";
    }, 400);
  }, 1800);
});

document.querySelectorAll('.product-slider').forEach(slider => {
  const slides = slider.querySelector('.slides');
  const dotsWrap = slider.querySelector('.dots');
  const imgs = slides.querySelectorAll('img');

  imgs.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsWrap.appendChild(dot);
  });

  slides.addEventListener('scroll', () => {
    const index = Math.round(slides.scrollLeft / slides.clientWidth);
    dotsWrap.querySelectorAll('span').forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
  });
});

