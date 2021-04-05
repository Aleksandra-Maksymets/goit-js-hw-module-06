// ЗАДАЧА 09/44

function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  const newNumbers = [];
  numbers.forEach(number => {
      if (number % 2 !== 0) {
          newNumbers.push(number);
      } else if (number % 2 === 0) { 
          newNumbers.push(number + value); }
    });
    return newNumbers;
   
    // Пиши код выше этой строки
  }



console.log(changeEven([1, 2, 3, 4, 5], 10));

console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
