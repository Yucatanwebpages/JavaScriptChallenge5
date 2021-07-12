// Arrow function

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test 1 - we use let to reassigned it later in the code

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

console.log(`The Dolphins team got ${avgDolphins} and the Koalas team got ${avgKoalas}`)


const checkWinner = function checkWinner(avgDolphins, avgKoala) {

    if (avgDolphins >= 2 * avgKoala) {
        console.log(`The Dolphins team has won having ${avgDolphins}`)
    }

    else if (avgKoala >= 2 * avgDolphins) {
        console.log(`The Koalas team has won having ${avgKoala}`)
    } else {
        console.log('No of the teams has won!')
    }

    return checkWinner;
}

checkWinner()


// Test 2 - here we do not use LET as we only reassigned variables

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

console.log(`The Dolphins team got ${avgDolphins} and the Koalas team got ${avgKoalas}`)

checkWinner()