const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const glow = document.querySelector(".logo-glow");
    const ring = glow.querySelector(".glow-ring");

    glow.addEventListener("mousemove", (e) => {
        const rect = glow.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        ring.style.setProperty("--x", `${xPercent}%`);
        ring.style.setProperty("--y", `${yPercent}%`);
    });

    glow.addEventListener("mouseleave", () => {
        ring.style.setProperty("--x", `50%`);
        ring.style.setProperty("--y", `50%`);
    });
});

document.querySelectorAll('.toggle-description').forEach(button => {
    button.addEventListener('click', () => {
      const descId = button.getAttribute('aria-controls');
      const desc = document.getElementById(descId);
      const expanded = button.getAttribute('aria-expanded') === 'true';
  
      // Скрываем все открытые описания (если хочешь, чтобы только одно было открыто)
      document.querySelectorAll('.procedure-description').forEach(d => {
        if (d !== desc) d.hidden = true;
      });
      document.querySelectorAll('.toggle-description').forEach(btn => {
        if (btn !== button) btn.setAttribute('aria-expanded', 'false');
      });
  
      // Переключаем выбранное описание
      desc.hidden = expanded;
      button.setAttribute('aria-expanded', !expanded);
    });
  });
  