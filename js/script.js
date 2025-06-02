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

    // === Карточки процедур ===
    document.querySelectorAll('.toggle-description').forEach(button => {
        button.addEventListener('click', () => {
            const descId = button.getAttribute('aria-controls');
            const desc = document.getElementById(descId);
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Скрываем все другие описания (если нужно одиночное открытие)
            document.querySelectorAll('.procedure-description').forEach(d => {
                if (d.id !== descId) d.hidden = true;
            });
            document.querySelectorAll('.toggle-description').forEach(btn => {
                if (btn !== button) {
                    btn.setAttribute('aria-expanded', 'false');
                    btn.textContent = 'Czytaj więcej';
                }
            });

            // Переключаем видимость текущего
            desc.hidden = isExpanded;
            button.setAttribute('aria-expanded', String(!isExpanded));
            button.textContent = isExpanded ? 'Czytaj więcej' : 'Zwiń';
        });
    });
});
