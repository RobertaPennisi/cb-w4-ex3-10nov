

function newCalculator(numbers) {
    try {
        let arr = numbers;
        if (arr.length === 0) throw "Nessun parametro passato alla funzione";
        if (arr.length === 1) throw "Hai passato un solo valore";

    const sum = () => numbers.reduce((acc , num) => acc + num);
    const sub = () => numbers.reduce((acc , num) => acc - num);
    const mul = () => numbers.reduce((acc , num) => acc * num);
    const div = () => numbers.reduce((acc , num) => acc / num);
    const ele = () => numbers.map(num => num * num);
    const rad = () => numbers.map(num => Math.sqrt(num));
    return {
        sum: sum(),
        sub: sub(),
        mul: mul(),
        div: div(),
        ele: ele(),
        rad: rad()
    }
        
    } catch (error) {
    //    console.log(error)
      if (error === "Nessun parametro passato alla funzione") {
         console.log("Nessun parametro passato alla funzione"); 
      }
      else if (error === "Hai passato un solo valore") {
        console.log("Hai passato un solo valore"); 
     }  
    }
}

let numbersChoiche = prompt("Inserisci numeri: ");
const splitNumbers = numbersChoiche.split(',');
console.log(splitNumbers)
const parsedNumbers = [];

for (x of splitNumbers) {
    if (x != '') {
        parsedNumbers.push(parseInt(x));
    }
}


console.log(parsedNumbers)
console.log(newCalculator(parsedNumbers));
