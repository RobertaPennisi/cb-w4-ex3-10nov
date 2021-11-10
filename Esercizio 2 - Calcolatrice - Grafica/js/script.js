
// Calcolatrice:


function newCalculator(numbers) {
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
}

const operationChoice = document.querySelector('#operation');
const numbersChoiche = document.querySelector('#numbers');
const btnData = document.querySelector('#btn-data');

btnData.addEventListener('click', () =>{
    const operation = operationChoice.value;
    const numbers = numbersChoiche.value;
    const arrNumbers = numbers.split(',');
    const parsedNumbers = [];
    for (x of arrNumbers) {
        parsedNumbers.push(parseInt(x));
      }
    
    
    
    console.log(numbers);
    console.log(arrNumbers);
    console.log(parsedNumbers);
    console.log(newCalculator(parsedNumbers))
    
});
