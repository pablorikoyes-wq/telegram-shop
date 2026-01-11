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

document.querySelectorAll(".slider").forEach(slider => {
  const slides = slider.querySelector(".slides");
  const dots = slider.querySelectorAll(".dots span");
  let index = 0;
  let startX = 0;

  slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (endX < startX - 40) index++;
    if (endX > startX + 40) index--;

    index = Math.max(0, Math.min(index, dots.length - 1));
    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
  });
});


