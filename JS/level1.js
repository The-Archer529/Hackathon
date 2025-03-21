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
            } else {
                result.textContent = 'Dit is geen phishing mail. Probeer het opnieuw.';
                result.style.color = 'red';
            }
        });
    });
});