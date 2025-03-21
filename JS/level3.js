function connectWiFi(isSecure) {
    if (!isSecure) {
        document.getElementById('virus').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('data-leak').classList.remove('hidden');
        }, 2000);
        updatePoints(-1); // Trek een punt af
    } else {
        alert('✅ Je bent veilig verbonden! Dit netwerk is versleuteld en beschermt je gegevens.');
        updatePoints(1); // Voeg een punt toe
        setTimeout(() => {
            window.location.href = "level4.html"; // Ga naar het volgende level
        }, 2000);
    }
}