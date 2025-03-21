document.addEventListener('DOMContentLoaded', () => {
    const emails = document.querySelectorAll('#emails li');
    const result = document.getElementById('result');
    const emailInfo = document.getElementById('email-info');

    document.querySelectorAll('#phishing-emails li').forEach(item => {
        item.addEventListener('click', event => {
            emailInfo.style.display = 'block';
            const info = event.target.getAttribute('data-info');
            document.getElementById('email-info').innerText = info;
        });
    });

    emails.forEach(email => {
        email.addEventListener('click', () => {
            if (email.dataset.phishing === 'true') {
                result.textContent = 'Goed gedaan! Je hebt de phishing mail gevonden.';
                result.style.color = 'green';
                updatePoints(1); // Voeg een punt toe
                setTimeout(() => {
                    window.location.href = "level2.html"; // Ga naar het volgende level
                }, 2000);
            } else {
                result.textContent = 'Dit is geen phishing mail. Probeer het opnieuw.';
                result.style.color = 'red';
                updatePoints(-1); // Trek een punt af
            }
        });
    });
});