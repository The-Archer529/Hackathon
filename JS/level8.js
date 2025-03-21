function openFolder(folderName) {
    let contentDiv = document.getElementById("content");
    let folderContent = {
        'emails': "<p>📧 CEO: 'Wie lekt onze gegevens? Controleer de bijlagen!'</p>",
        'files': "<p>📂 Document: 'geheime_documenten.pdf' ontdekt op een verdachte laptop.</p>",
        'users': "<p>👤 Verdachte logins: Mark heeft 's nachts ingelogd op de servers.</p>"
    };
    contentDiv.innerHTML = folderContent[folderName] || "<p>Geen inhoud gevonden.</p>";
}

// Codepuzzel
function checkCode() {
    let correctCode = "VWI"; // Afgeleid van de eerste letters uit de e-mail hint
    let userInput = document.getElementById("codeInput").value;
    if (userInput === correctCode) {
        alert("Correcte code! De mol is ontmaskerd.");
    } else {
        alert("Incorrecte code. Probeer het nog eens.");
    }
}

function checkPassword() {
    let correctPassword = "utzvcd";
    let userInput = document.getElementById("passwordInput").value;
    if (userInput === correctPassword) {
        alert("Correct wachtwoord!");
    } else {
        alert("Incorrect wachtwoord. Probeer het nog eens.");
    }
}

function accuse(suspect) {
    let correctSuspect = "Mark";
    if (suspect === correctSuspect) {
        document.getElementById("result").textContent = "Je hebt de mol gevonden! Mark was de verrader.";
        alert("Gefeliciteerd! Je hebt Level 8 voltooid.");
    } else {
        alert("Verkeerde keuze! De informatie blijft lekken...");
    }
}