





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