function countEvensAndOdds(numbers) {
    let evenCount = 0;
    let oddCount = 0;
    
    for (let number of numbers) {
      if (number % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    
    return {
      evenCount: evenCount,
      oddCount: oddCount
    };
  }
  
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = countEvensAndOdds(numbers);
  
  console.log(result);
