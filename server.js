const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors()); // Pozwala na połączenia z różnych źródeł (np. frontend)
app.use(express.json()); // Do parsowania JSON-a

app.post('/send-email', (req, res) => {
    const { name, age, weight, height, status, goal, deadline, training, work, calories, allergies, unwantedProducts, dietType, necessaryProducts, preferredMeals, mealCount, repeatingMeals, eatingLocation, timeLimitations, healthProblems, pastDiet, portionProblems, hydration } = req.body;

    // Konfiguracja transportu e-maili
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Możesz użyć innego serwisu, np. Outlook, Yahoo
        auth: {
            user: 'kirito.asn@gmail.com',
            pass: 'nboo zwqu ztvr xjzn'
        }
    });

    // Treść e-maila
    const mailOptions = {
        from: 'kirito.asn@gmail.com',
        to: 'adrianzdziarski96@gmail.com', // Możesz zmienić odbiorcę
        subject: 'Nowy Formularz: Plan Żywieniowy',
        text: `
            1. Imię i nazwisko: ${name}
            2. Wiek: ${age}
            3. Waga: ${weight}
            4. Wzrost: ${height}
            5. Status: ${status}
            6. Cel: ${goal}
            7. Termin: ${deadline}
            8. Trening: ${training}
            9. Praca: ${work}
            10. Kalorie: ${calories}
            11. Alergie: ${allergies}
            12. Niechciane produkty: ${unwantedProducts}
            13. Dieta: ${dietType}
            14. Produkty konieczne: ${necessaryProducts}
            15. Ulubione posiłki: ${preferredMeals}
            16. Liczba posiłków: ${mealCount}
            17. Powtarzające się posiłki: ${repeatingMeals}
            18. Miejsce jedzenia: ${eatingLocation}
            19. Ograniczenia czasowe: ${timeLimitations}
            20. Problemy zdrowotne: ${healthProblems}
            21. Doświadczenia z dietą: ${pastDiet}
            22. Problemy z porcjami: ${portionProblems}
            23. Kontrola płynów: ${hydration}
        `
    };

    // Wyślij e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Nie udało się wysłać e-maila.');
        } else {
            console.log('E-mail wysłany: ' + info.response);
            res.status(200).send('E-mail został wysłany!');
        }
    });
});

// Uruchom serwer
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
