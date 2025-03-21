document.addEventListener("DOMContentLoaded", function() {
    hide();
});


function hide() {
    let elements = [
        'part2', 'option1', 'badBadEnd', 'option1a', 
        'option1b', 'option1b1', 'option1b2', 'option1b1a', 
        'option1b1b', 'terugNaarKruispunt', 'Victory', 'gearresteerd',
        'option1b1b1', 'option1b1a1'
    ];

    elements.forEach(id => {
        let el = document.getElementById(id);
        if (el) {
            el.style.display = "none";
        } else {
            console.warn(`Element with id '${id}' not found!`);
        }
    });
}


function start() {
    document.getElementById('intro').style.display= "none";
    document.getElementById('part2').style.display= "block";
}


function option1() {
    document.getElementById('part2').style.display= "none";
    document.getElementById('option1').style.display= "block";
}


function badBadEnd() {
    document.getElementById('part2').style.display= "none";
    document.getElementById('badBadEnd').style.display= "block";
}


function option1b2() {
    document.getElementById('option1b').style.display= "none";
    document.getElementById('option1b2').style.display= "block";
}


function option1a() {
    document.getElementById('option1').style.display= "none";
    document.getElementById('option1a').style.display= "block";
}


function option1b() {
    document.getElementById('option1').style.display= "none";
    document.getElementById('option1b').style.display= "block";
}

function option1b1() {
    document.getElementById('option1b').style.display= "none";
    document.getElementById('option1b1').style.display= "block";
}

function option1b1a() {
    document.getElementById('option1b1').style.display= "none";
    document.getElementById('option1b1a').style.display= "block";
}

function option1b1b() {
    document.getElementById('option1b1').style.display= "none";
    document.getElementById('option1b1b').style.display= "block";
}

function terugNaarKruispunt() {
    document.getElementById('option1b1a').style.display= "none";
    document.getElementById('option1b1b').style.display= "none";
    document.getElementById('terugNaarKruispunt').style.display= "block";
}

function option1b1b1() {
    document.getElementById('option1b1b').style.display= "none";
    document.getElementById('option1b1b1').style.display= "block";
}

function option1b1a1() {
    document.getElementById('option1b1a').style.display= "none";
    document.getElementById('option1b1a1').style.display= "block";
}

function Victory() {
    document.getElementById('option1b1a1').style.display= "none";
    document.getElementById('Victory').style.display= "block";
}

function gearresteerd() {
    document.getElementById('option1a').style.display= "none";
    document.getElementById('gearresteerd').style.display= "block";
}
