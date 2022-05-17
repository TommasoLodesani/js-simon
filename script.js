const myScreen = document.getElementById("screen");

const timerNumbers = document.getElementById("timer");



const arrayNumb = createRandUniqueNumArray(5, 1, 100);
console.log(arrayNumb);



myScreen.innerHTML = arrayNumb;

setTimeout(startTimer, 8000);

function startTimer() {
    myScreen.innerHTML = "";

    let seconds = 10;

    const counting = setInterval(

        function () {
            timerNumbers.innerHTML = seconds;
            if (seconds === 0) {
                clearInterval(counting);

                const arrayUtente = [];

                // let sommaNumeriUtente = 0;

                while (arrayUtente.length < 5) {

                    let numeroUtente = parseInt(prompt("Inserisci numero"));
                    arrayUtente.push(numeroUtente);
                    // sommaNumeriUtente += numeroUtente;
                }

                for(let i = 0; i < arrayUtente.length; i++){
                    console.log(arrayUtente[i]);

                    let arrayUteItems = arrayUtente[i];

                    if(arrayNumb.includes(arrayUteItems)){
                        console.log("numero trovato");
                    } else {
                        console.log("numero non trovato");
                    }
                }
                


                console.log(arrayUtente);
            } else {
                seconds--;
            }
        }

        , 1000)
}









// funzioni

function createRandUniqueNumArray(numItems, min, max) {
    const arrInt = [];
    while (arrInt.length < numItems) {
        let randNumInt = getRandomNumb(min, max);
        if (!arrInt.includes(randNumInt)) {
            arrInt.push(randNumInt);
        }
    }
    return arrInt;
}

function getRandomNumb(rangeMin, rangeMax) {

    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;

}