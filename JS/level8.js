function openfolder(folderName) {
    let contentDiv = document.getElementById("content");
    let folderContent = {
        'emails': "<p>📧 CEO: 'Wie lekt onze gegevens? Controleer de bijlagen!'</p><br><p>📧 Mama: 'Waar ben jij? Ik verwacht je over 4 minuten'</p><br><p>📧 DHL: 'Je paket komt over 10 minuten?'</p>",
        'files': "<p>📂 Document: 'geheime_documenten.pdf' ontdekt op een verdachte laptop.</p>",
        'users': "<p>👤 Verdachte logins: Mark heeft 's nachts ingelogd op de servers.</p>"
    };
    contentDiv.innerHTML = folderContent[folderName] || "<p>Geen inhoud gevonden.</p>";
}

// Codepuzzel
function checkCode() {
    let correctCode = "410"; // Afgeleid van de eerste letters uit de e-mail hint
    let userInput = document.getElementById("codeInput").value;
    if (userInput === correctCode) {
        alert("Correcte code! De mol is ontmaskerd.");
    } else {
        alert("Incorrecte code. Hint is 'Minuten'.");
    }
}



function accuse(suspect) {
    let correctSuspect = "Mark";
    if (suspect === correctSuspect) {
        document.getElementById("result").textContent = "Je hebt de mol gevonden! Mark was de verrader.";
        alert("Gefeliciteerd! Je hebt Level 8 voltooid.");
        updatePoints(1); // Voeg een punt toe
        setTimeout(() => {
            window.location.href = "levelSelect.html"; // Ga naar het level selectiescherm
        }, 2000);
    } else {
        alert("Verkeerde keuze! De informatie blijft lekken...");
        updatePoints(-1); // Trek een punt af
    }
}
