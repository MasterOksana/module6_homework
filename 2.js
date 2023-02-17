function nunbers (number) {
  if (number > 1000) return "Больше 1000";
  if (number === 0) return  "Ноль";
  if (number === 1) return "Один";

  let digit = 0;
  for  (let i = 1; i <= number; i++) {
      if  (number % i === 0) digit++;
  }

  if  (digit === 2)
      return "Число простое.";
  else
      return "Число не простое.";
}

console.log(nunbers(6));