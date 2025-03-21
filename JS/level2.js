function toonQRCodes() {
    document.getElementById("qr-codes").style.display = "flex";
}

function checkQRCode(isReal) {
    if (isReal) {
        window.location.href = "level2echtQR.html";
    } else {
        window.location.href = "level2nepQR.html";
    }
}