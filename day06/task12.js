//create two dimention array and log the them


const arr = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  
 
 
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(`Element at [${i}][${j}] is ${arr[i][j]}`);
    }
  }
  
