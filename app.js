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
document.querySelector('.form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Formularz został wysłany!');
        } else {
            alert('Wystąpił błąd podczas wysyłania formularza.');
        }
    } catch (error) {
        console.error('Błąd:', error);
        alert('Nie udało się połączyć z serwerem.');
    }
});
