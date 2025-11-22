
    // простой скрипт открытия/закрытия модального окна
    document.addEventListener('DOMContentLoaded', () => {
      const modal = document.getElementById('food-modal');
      const closeBtn = modal.querySelector('.modal-close');

      // если много кнопок
      document.querySelectorAll('.about-food-button').forEach(btn => {
        btn.addEventListener('click', () => {
          modal.style.display = 'flex';
          modal.setAttribute('aria-hidden', 'false');
        });
      });

      function closeModal() {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }

      closeBtn.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    });
 