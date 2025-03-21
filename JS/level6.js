let storyElement = document.getElementById("story");
let choicesElement = document.getElementById("choices");
let currentStep = 0;
let isJanPhishing = false; // Deze variabele bepaalt of je bent gehackt door Jan.

// Start van het spel
function startGame() {
    currentStep = 0;
    isJanPhishing = false; // Reset de phishing-status
    let elements = [
        'Jan1', 'Jan2-1', 'Jan2-2', 'Jan2-3', 'Jan3-1', 'Jan3-2', 'Lisa1', 'Lisa2-1', 'Lisa2-2', 'Lisa2-3', 'Lisa3-1', 'Lisa3-2'
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
    currentStep = 1;
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
        isJanPhishing = true;  // Jan is de phishinggast
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
    storyElement.innerHTML = "<p>Lisa: 'Hey, ik zag een vreemd bestand in je inbox. Heb je dat ontvangen? Ik stuurde het naar je voor de vergadering.'</p>";
    choicesElement.innerHTML = `
        <button onclick="checkLisa('bestanden')">Vraag meer over het bestand</button>
        <button onclick="checkLisa('reden')">Vraag waarom ze het bestand stuurde zonder vooraf te vragen</button>
        <button onclick="checkLisa('informatie')">Vraag of je je gegevens moet verstrekken om het bestand te openen</button>
    `;
}

// Keuze voor Lisa
function checkLisa(choice) {
    if (choice === 'bestanden') {
        storyElement.innerHTML = "<p>Lisa legt uit dat het bestand noodzakelijk is voor de vergadering, maar ze kan je niet precies vertellen wat het bestand bevat.</p>";
        choicesElement.innerHTML = `
            <button onclick="finalChoiceLisa('nee')">Geef geen gegevens</button>
            <button onclick="finalChoiceLisa('ja')">Geef je gegevens</button>
        `;
    } else if (choice === 'reden') {
        storyElement.innerHTML = "<p>Lisa vertelt je dat ze het bestand zomaar heeft gestuurd omdat ze dacht dat je het nodig had. Dit klinkt niet helemaal eerlijk.</p>";
        choicesElement.innerHTML = `
            <button onclick="finalChoiceLisa('nee')">Geef geen gegevens</button>
            <button onclick="finalChoiceLisa('ja')">Geef je gegevens</button>
        `;
    } else if (choice === 'informatie') {
        storyElement.innerHTML = "<p>Lisa vraagt je om je gegevens om toegang te krijgen tot het bestand. Dit klinkt weer een beetje vreemd.</p>";
        choicesElement.innerHTML = `
            <button onclick="finalChoiceLisa('nee')">Geef geen gegevens</button>
            <button onclick="finalChoiceLisa('ja')">Geef je gegevens</button>
        `;
    }
}

// Finale keuze bij Lisa
function finalChoiceLisa(choice) {
    if (choice === 'ja') {
        storyElement.innerHTML = "<p>Je hebt je gegevens verstrekt, maar blijkt dat Lisa je wilde misleiden. Het bestand was een phishingpoging!</p>";
    } else {
        storyElement.innerHTML = "<p>Je hebt geen gegevens verstrekt en dat was de juiste keuze! Lisa was een onbetrouwbare collega.</p>";
    }
    choicesElement.innerHTML = "<button onclick='showHackerInteraction()'>Ga door naar de onbekende hacker</button>";
}

// Interactie met de hacker (de echte phishing gast)
function showHackerInteraction() {
    currentStep = 3;
    storyElement.innerHTML = "<p>Een onbekende persoon zegt: 'Hé, ik werk bij het IT-team. Je hebt een nieuw systeem nodig, geef me snel je gegevens om toegang te krijgen.'</p>";
    choicesElement.innerHTML = `
        <button onclick="checkHacker('vraag')">Vraag om meer informatie over het systeem</button>
        <button onclick="checkHacker('reden')">Vraag waarom hij zo snel gegevens wil ontvangen</button>
        <button onclick="checkHacker('informatie')">Vraag om je gegevens te geven voor toegang tot het systeem</button>
    `;
}

// Keuze voor de hacker
function checkHacker(choice) {
    if (choice === 'vraag') {
        storyElement.innerHTML = "<p>De onbekende hacker geeft een vaag antwoord en blijft aandringen dat je snel je gegevens moet verstrekken om toegang te krijgen.</p>";
        choicesElement.innerHTML = `
            <button onclick="finalChoiceHacker('nee')">Geef geen gegevens</button>
            <button onclick="finalChoiceHacker('ja')">Geef je gegevens</button>
        `;
    } else if (choice === 'reden') {
        storyElement.innerHTML = "<p>De onbekende hacker zegt dat het dringend is, maar er is iets in zijn antwoord dat je niet helemaal vertrouwt.</p>";
        choicesElement.innerHTML = `
            <button onclick="finalChoiceHacker('nee')">Geef geen gegevens</button>
            <button onclick="finalChoiceHacker('ja')">Geef je gegevens</button>
        `;
    } else if (choice === 'informatie') {
        storyElement.innerHTML = "<p>De onbekende hacker vraagt je om je gegevens te geven. Dit klinkt absoluut niet goed.</p>";
        choicesElement.innerHTML = `
            <button onclick="finalChoiceHacker('nee')">Geef geen gegevens</button>
            <button onclick="finalChoiceHacker('ja')">Geef je gegevens</button>
        `;
    }
}

// Finale keuze bij de hacker
function finalChoiceHacker(choice) {
    if (choice === 'ja') {
        storyElement.innerHTML = "<p>Je hebt je gegevens verstrekt, maar blijkt dat de onbekende persoon een hacker is. Je hebt belangrijke gegevens prijsgegeven!</p>";
    } else {
        storyElement.innerHTML = "<p>Je hebt geen gegevens verstrekt en dat was de juiste keuze! De onbekende hacker probeerde je te misleiden.</p>";
    }
    choicesElement.innerHTML = "<button onclick='endGame()'>Speel opnieuw</button>";
}

// Einde van het spel
function endGame() {
    if (isJanPhishing = true) {
        storyElement.innerHTML = "<p>Je hebt het spel beëindigd. Let goed op wie je vertrouwt online! Je weet nu dat Jan de phishing-gast was, en dat je je gegevens nooit zomaar moet delen.</p>";
    } else {
        storyElement.innerHTML = "<p>Je hebt het spel beëindigd zonder dat je gegevens hebt gedeeld. Goed gedaan, je hebt geen risico genomen!</p>";
    }
    choicesElement.innerHTML = "<button onclick='startGame()'>Speel opnieuw</button>";
}

// Start het spel bij het laden van de pagina
startGame();