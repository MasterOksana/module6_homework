let array = [165, 1, null, 'e', 'zero'];
function massivfun() {
let even = 0;
let odd = 0;

array.map(function (item, index, array) {
if (item == null) {
console.log("Элемент " + index + " равен null.");
return;
}

if (typeof item == "string") {
console.log("Элемент " + index + " - строка.");
return;
}
if (item % 2 === 0) even++;
else odd++;
});

    console.log("Чётных: " + even);
    console.log("Нечётных: " + odd);
}

massivfun();