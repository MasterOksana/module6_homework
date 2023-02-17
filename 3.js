function  SumNumbers(number1) {
    return function (number2) {
        return number1 + number2;
    }
}

console.log(SumNumbers(311)(45423));