const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = navMenu.querySelectorAll('a');

// Клик по кнопке — показываем/скрываем меню
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Клик по любому пункту меню — скрываем меню
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Закрывать меню при клике вне меню и кнопки
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    navMenu.classList.remove('active');
  }
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
