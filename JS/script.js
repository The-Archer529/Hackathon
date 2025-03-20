function showOptions(id) {
    if(id == "option1b") {
        document.getElementById("option1").classList.add("hidden")
    }
    else {
        document.getElementById(id).classList.remove("hidden");
    }