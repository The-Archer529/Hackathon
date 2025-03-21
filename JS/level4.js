document.addEventListener("DOMContentLoaded", function() {
    hide();
});
function hide() {
    document.getElementById('part2').style.display = "none";
    document.getElementById('option1').style.display = "none";
    document.getElementById('option2').style.display = "none";
}


function start() {
    document.getElementById('intro').style.display= "none";
    document.getElementById('part2').style.display= "block";
}
function option1() {
    document.getElementById('part2').style.display= "none";
    document.getElementById('option1').style.display= "block";
}
function option2() {
    document.getElementById('part2').style.display= "none";
    document.getElementById('option2').style.display= "block";
}