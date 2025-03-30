let words = ["RESCATE","ACOTADO","CORNISA","LASTRAR","AVISTAR","CABEZAL","DILECTO", "SORTIJA",
                "POLLINO","MIRADOR","ARRABAL","FRAGATA","CANSINO","COLADOR","OBCECAR","INSIGNE",
                "PASADOR","CALIDAD","DIALOGO","MUTILAR"];
let selectedWord  = "";
let remainingWords = words.length;
let missesCount = 0;
let score = 0;
let lastScore = 0;
let highScore = 0;
let win = false;

function SelectWord(){
    lose = false;
    win = false;
    if(score > highScore){
        highScore = score;
    }
    lastScore = score;
    if(words.length > 0){
        score = 0;
        missesCount = 0;
        aleat = Math.random() * (words.length - 1);
        aleat = Math.round(aleat);
        selectedWord = words.splice(aleat, 1)[0];
        remainingWords -= 1;
        console.log(" Palabra: " + selectedWord + " | Restantes: " + remainingWords)
        const wordContainer = document.getElementById("wordToGuess");
        wordContainer.innerHTML = "";
        for (let i = 0; i < selectedWord.length; i++) {
            const LETTER = `<input class='letrainput' id='letter${i}' maxlength='1' readonly>`;
            wordContainer.innerHTML +=  LETTER;
        }
    }
    changeStats();
}

function CheckLetter(){
    let letterInput = (document.getElementById("letterInput").value);
    if (missesCount != 6 && win == false){
        letterInput = letterInput.toUpperCase();
        let ok = true;
        let found = false;
        for (let i = 0; i < selectedWord.length; i ++) {
            let letterPosition = selectedWord.charAt(i);
            const letterOutput = document.getElementById(`letter${i}`);
            if (letterInput === letterPosition && letterInput !== letterOutput.value){
                letterOutput.value = letterInput;
                found = true;
                score = calcularPuntuacion();
            }else if (letterInput === letterOutput.value && ok && !found){
                alert(`Ya usaste la letra '${letterInput}', prueba otra letra`);
                ok = false;
            }else if (i == selectedWord.length -1 && ok && !found){
                let letterInputClass = (document.getElementById("letterInput"));
                letterInputClass.classList.add("fallo");
                missesCount ++;
            }    
        }
    }else if (win == false){
        missesCount ++
        for (let i = 0; i < selectedWord.length; i ++) {
            const letterOutput = document.getElementById(`letter${i}`);
            if (letterOutput.value === "") {
                letterOutput.classList.add("fallo");
                letterOutput.value = (selectedWord.charAt(i));
            }else {
                letterOutput.classList.add("correcto");
            }
        } 
        console.log("¡Oh no! No has ganado esta vez 😢");
    }

    if(win == true && missesCount != 6){
        for (let i = 0; i < selectedWord.length; i ++) {
            const letterOutput = document.getElementById(`letter${i}`);
            letterOutput.classList.add("correcto");
        } 
        alert(`¡Felicidades! 🎉 Lo conseguiste con una puntuación de ${score}`);
    }
    score = calcularPuntuacion();
    changeStats()
}


function calcularPuntuacion(){
    let letterCorrect = 0;
    for (let i = 0; i < selectedWord.length; i ++) {
        const letterOutput = document.getElementById(`letter${i}`).value;
        if(letterOutput !== ""){
            letterCorrect += 1;
        }
    }
    if (letterCorrect == selectedWord.length){
        win = true;
    }
    return letterCorrect * (7 - missesCount);
}

function changeStats() {
    document.getElementById("score").textContent = score;
    document.getElementById("lastScore").textContent = lastScore;
    document.getElementById("highScore").textContent = highScore;
    document.getElementById("missesCount").textContent = missesCount;
    document.getElementById("remainingWords").textContent = remainingWords;
}

function cleanInput(){
    let letterInputClass = (document.getElementById("letterInput"));
    letterInputClass.classList.remove("fallo");
}
