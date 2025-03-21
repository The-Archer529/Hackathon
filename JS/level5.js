let correctWord = "cyberbeveiligheid";
        let guessedWord = "C***r**v****g***d".split('');
        document.getElementById('hidden-word').innerText = guessedWord.join('');
        
        function plugInUSB() {
            document.getElementById('virus-screen').style.display = 'block';
        }
        
        function ignoreUSB() {
            alert("Goed gedaan! Je hebt het risico vermeden.");
        }
        
        function startPuzzle() {
            document.getElementById('puzzle').style.display = 'block';
        }
        
        function guessLetter() {
            let letter = document.getElementById('letter').value.toLowerCase();
            let updated = false;
            
            for (let i = 0; i < correctWord.length; i++) {
                if (correctWord[i] === letter) {
                    guessedWord[i] = letter;
                    updated = true;
                }
            }
            
            document.getElementById('hidden-word').innerText = guessedWord.join('');
            document.getElementById('letter').value = "";
            
            if (!guessedWord.includes('*')) {
                alert("Gefeliciteerd! Je hebt het virus verwijderd.");
                document.getElementById('virus-screen').style.display = 'none';
                document.getElementById('puzzle').style.display = 'none';
            } else if (!updated) {
                document.getElementById('message').innerText = "Foute letter, probeer opnieuw!";
                updatePoints(-1); // Trek een punt af
            } else {
                document.getElementById('message').innerText = "Goede letter!";
                updatePoints(1); // Voeg een punt toe
                setTimeout(() => {
                    window.location.href = "level4.html"; // Ga naar het volgende level
                }, 2000);
            }
        }