let hackerIndex = Math.floor(Math.random() * 4);
let hackers = [
    { name: "John Doe", ip: "192.168.1.12" },
    { name: "Jane Smith", ip: "192.168.1.45" },
    { name: "EvilH4x0r", ip: "203.0.113.55" },
    { name: "Bob Johnson", ip: "192.168.1.78" }
].map((h, index) => ({ ...h, isHacker: index === hackerIndex }));

let logs = [
    "Gebruiker ingelogd om " + new Date().toLocaleTimeString(),
    `Verbinding met IP ${hackers[hackerIndex].ip} gedetecteerd`
];

let networkConnections = hackers.map(h => h.ip);

function updateLogs() {
    document.getElementById("logList").innerHTML = logs.map(log => `<li>${log}</li>`).join('');
}

function updateNetworkLog() {
    document.getElementById("networkLog").innerHTML = networkConnections
        .filter(ip => !blockedIPs.includes(ip)) // Filter out blocked IPs
        .map(ip => `<li>Live verbinding: ${ip}</li>`).join('');
}

let applications = ["Google Chrome", "Teams", "App.py"];
let openApps = [...applications];

function updateTaskbar() {
    document.getElementById("taskbar").innerHTML = applications.map(app => 
        `<li class="${openApps.includes(app) ? '' : 'closed-app'}" onclick="toggleApplication('${app}')">${app}</li>`
    ).join('');
}

function toggleApplication(app) {
    if (openApps.includes(app)) {
        openApps = openApps.filter(a => a !== app);
        logs.push(`${app} gesloten om ` + new Date().toLocaleTimeString());
        if (app === "App.py") {
            logs.push("Webcam activiteit gestopt");
            document.getElementById("webcamIndicator").style.animation = "none";
            // Remove hacker IP from network log if App.py is closed
            networkConnections = networkConnections.filter(ip => ip !== hackers[hackerIndex].ip);
        }
    } else {
        openApps.push(app);
        logs.push(`${app} geopend om ` + new Date().toLocaleTimeString());
        if (app === "App.py") {
            logs.push("Webcam activiteit gedetecteerd");
            document.getElementById("webcamIndicator").style.animation = "blink 1s infinite";
        }
    }
    updateLogs();
    updateTaskbar();
}

let blockedIPs = [];

function blockIP() {
    const ipToBlock = document.getElementById("ipBlockDropdown").value;
    const alertMessage = document.getElementById("alertMessage");
    const fullscreenAlert = document.getElementById("fullscreenAlert");

    if (ipToBlock && !blockedIPs.includes(ipToBlock)) {
        blockedIPs.push(ipToBlock);
        updateNetworkLog(); // Refresh the network log to exclude blocked IPs

        if (ipToBlock === hackers[hackerIndex].ip) {
            alertMessage.textContent = `Het IP ${ipToBlock} is succesvol geblokkeerd!`;
        } else {
            alertMessage.textContent = `Het IP ${ipToBlock} is niet de juiste hacker!`;
        }

        fullscreenAlert.style.display = 'flex'; // Show fullscreen alert
        setTimeout(() => fullscreenAlert.style.display = 'none', 3000); // Hide after 3 seconds
    } else if (!ipToBlock) {
        alert("Kies een IP om te blokkeren.");
    } else {
        alert("Dit IP is al geblokkeerd.");
    }
}

// Update the dropdown with hacker IPs
function updateIPDropdown() {
    const dropdown = document.getElementById("ipBlockDropdown");
    hackers.forEach(h => {
        const option = document.createElement("option");
        option.value = h.ip;
        option.textContent = h.ip;
        dropdown.appendChild(option);
    });
}

function checkAnswers() {
    const answer1 = document.getElementById("question1").value;
    const answer2 = document.getElementById("question2").value;

    if (answer1 === "blue" && answer2 === hackers[hackerIndex].ip) {
        document.getElementById("greenScreen").style.display = 'block';
        document.getElementById("redScreen").style.display = 'none';
    } else {
        document.getElementById("redScreen").style.display = 'block';
        document.getElementById("greenScreen").style.display = 'none';
    }
}

function toggleWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.classList.toggle("active");
}

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (elmnt) {
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
window.addEventListener("orientationchange", function() {
    console.log("Orientation changed: " + window.orientation);
    if (window.orientation === 0 || window.orientation === 180) {
        // Staande modus
        document.getElementById("orientation-warning").style.display = "block";
    } else {
        // Liggende modus
        document.getElementById("orientation-warning").style.display = "none";
    }
});



window.onload = () => {
if (window.orientation === 0 || window.orientation === 180) {
document.getElementById("orientation-warning").style.display = "block";
} else {
document.getElementById("orientation-warning").style.display = "none";
}
updateLogs();
updateNetworkLog();
updateTaskbar();
updateIPDropdown();
};
