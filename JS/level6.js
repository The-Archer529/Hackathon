let storyElement = document.getElementById("story");
let choicesElement = document.getElementById("choices");
let currentStep = 0;
let isJanPhishing = 0; // Deze variabele bepaalt of je bent gehackt door Jan.

// Start van het spel
function startGame() {
    isJanPhishing === 0; // Reset de phishing-status
    currentStep = 0;
    gegevensGegeven = 0;
    let elements = [
        'Jan1', 'Jan2-1', 'Jan2-2', 'Jan2-3', 'Jan3-1', 'Jan3-2', 'Lisa1', 'Lisa2-1', 'Lisa2-2', 'Lisa2-3', 'Lisa3-1', 'Lisa3-2', 
        'Hacker1', 'Hacker2-1', 'Hacker2-2', 'Hacker2-3', 'Hacker3-1', 'Hacker3-2', 'End1', 'End2', 'End3'
    ];

    elements.forEach(id => {
        let el = document.getElementById(id);
        if (el) {
            el.style.display = "none";
        } else {
            console.warn(`Element with id '${id}' not found!`);
        }
    });
    showJanInteraction();
}

// Interactie met Jan (Phishing gast)
function showJanInteraction() {
    currentStep === 1;
    isJanPhishing === 0;
    document.getElementById('Jan1').style.display= 'block';;
}

// Keuze voor Jan
function checkJan(choice) {
    if (choice === 'vraag') {
        document.getElementById('Jan1').style.display= 'none';
        document.getElementById('Jan2-1').style.display= 'block';
    } else if (choice === 'vragen') {
        document.getElementById('Jan1').style.display= 'none';
        document.getElementById('Jan2-2').style.display= 'block';
    } else if (choice === 'informatie') {
        document.getElementById('Jan1').style.display= 'none';
        document.getElementById('Jan2-3').style.display= 'block';
    }
}

// Finale keuze bij Jan
function finalChoiceJan(choice) {
    if (choice === 'ja') {
        isJanPhishing += 1;  // Jan is de phishinggast
        gegevensGegeven += 1;
        document.getElementById('Jan2-1').style.display= 'none';
        document.getElementById('Jan2-2').style.display= 'none';
        document.getElementById('Jan2-3').style.display= 'none';
        document.getElementById('Jan3-1').style.display= 'block';
    } else {
        document.getElementById('Jan2-1').style.display= 'none';
        document.getElementById('Jan2-2').style.display= 'none';
        document.getElementById('Jan2-3').style.display= 'none';
        document.getElementById('Jan3-2').style.display= 'block';
    }
}

// Interactie met Lisa (Betrouwbare collega)
function showLisaInteraction() {
    currentStep = 2;
    document.getElementById('Jan3-1').style.display= 'none';
    document.getElementById('Jan3-2').style.display= 'none';
    document.getElementById('Lisa1').style.display= 'block';
}

// Keuze voor Lisa
function checkLisa(choice) {
    if (choice === 'bestanden') {
        document.getElementById('Lisa1').style.display= 'none';
        document.getElementById('Lisa2-1').style.display= 'block';
    } else if (choice === 'reden') {
        document.getElementById('Lisa1').style.display= 'none';
        document.getElementById('Lisa2-2').style.display= 'block';
    } else if (choice === 'informatie') {
        document.getElementById('Lisa1').style.display= 'none';
        document.getElementById('Lisa2-3').style.display= 'block';
    }
}

// Finale keuze bij Lisa
function finalChoiceLisa(choice) {
    if (choice === 'ja') {
        gegevensGegeven += 1;
        document.getElementById('Lisa2-1').style.display= 'none';
        document.getElementById('Lisa2-2').style.display= 'none';
        document.getElementById('Lisa2-3').style.display= 'none';
        document.getElementById('Lisa3-1').style.display= 'block';
    } else {
        document.getElementById('Lisa2-1').style.display= 'none';
        document.getElementById('Lisa2-2').style.display= 'none';
        document.getElementById('Lisa2-3').style.display= 'none';
        document.getElementById('Lisa3-2').style.display= 'block';
    }
}

// Interactie met de hacker (de echte phishing gast)
function showHackerInteraction() {
    currentStep === 3;
    document.getElementById('Lisa3-1').style.display= 'none';
    document.getElementById('Lisa3-2').style.display= 'none';
    document.getElementById('Hacker1').style.display= 'block';
}

// Keuze voor de hacker
function checkHacker(choice) {
    if (choice === 'vraag') {
        document.getElementById('Hacker1').style.display= 'none';
        document.getElementById('Hacker2-1').style.display= 'block';
    } else if (choice === 'reden') {
        document.getElementById('Hacker1').style.display= 'none';
        document.getElementById('Hacker2-2').style.display= 'block';
    } else if (choice === 'informatie') {
        document.getElementById('Hacker1').style.display= 'none';
        document.getElementById('Hacker2-3').style.display= 'block';
    }
}

// Finale keuze bij de hacker
function finalChoiceHacker(choice) {
    if (choice === 'ja') {
        gegevensGegeven += 1;
        document.getElementById('Hacker2-1').style.display= 'none';
        document.getElementById('Hacker2-2').style.display= 'none';
        document.getElementById('Hacker2-3').style.display= 'none';
        document.getElementById('Hacker3-1').style.display= 'block';
    } else {
        document.getElementById('Hacker2-1').style.display= 'none';
        document.getElementById('Hacker2-2').style.display= 'none';
        document.getElementById('Hacker2-3').style.display= 'none';
        document.getElementById('Hacker3-2').style.display= 'block';
    }
}

// Einde van het spel
function endGame() {
    if (isJanPhishing === 1) {
        document.getElementById('Hacker3-1').style.display= 'none';
        document.getElementById('Hacker3-2').style.display= 'none';
        document.getElementById('End1').style.display= 'block';
        updatePoints(-1); // Trek een punt af
    } else if (gegevensGegeven >= 1) {
        document.getElementById('Hacker3-1').style.display= 'none';
        document.getElementById('Hacker3-2').style.display= 'none';
        document.getElementById('End2').style.display= 'block';
        updatePoints(-1); // Trek een punt af

    } else {
        document.getElementById('Hacker3-1').style.display= 'none';
        document.getElementById('Hacker3-2').style.display= 'none';
        document.getElementById('End3').style.display= 'block';
        updatePoints(1); // Voeg een punt toe
        setTimeout(() => {
            window.location.href = "level7.html"; // Ga naar het volgende level
        }, 2000);
    }
}

// Start het spel bij het laden van de pagina
startGame(); 