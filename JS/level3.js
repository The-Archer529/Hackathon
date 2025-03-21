function connectWiFi(isSecure) {
    if (!isSecure) {
        document.getElementById('virus').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('data-leak').classList.remove('hidden');
        }, 2000);
    } else {
        alert('✅ Je bent veilig verbonden! Dit netwerk is versleuteld en beschermt je gegevens.');
    }
}