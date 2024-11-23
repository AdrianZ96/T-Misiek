// Pobranie elementów modala
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal__close');
const openModalButton = document.querySelector('.modal__open');

// Funkcja otwierania modala
function openModal() {
    modal.classList.add('show');
    document.body.classList.add('modal-open'); // Zablokuj tło
}

// Funkcja zamykania modala
function closeModal() {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open'); // Odblokuj tło
}

// Obsługa przycisków
openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);

// Zamykanie po kliknięciu poza treścią
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
