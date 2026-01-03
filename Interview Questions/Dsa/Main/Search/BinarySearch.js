function search(arr, t) {
  let left = 0;                 
  let right = arr.length - 1;      
  
  while (left <= right) {    
    let midd = Math.floor((left + right) / 2);
    
    if (t == arr[midd]) {      
      return midd;             
    }
    if (t < arr[midd]) { 
      right = midd - 1;     
    } else {                    
      left = midd + 1;             
    }
  }
  return -1; 
}
console.log(search([-5, 2, 4, 6, 10], 10)); 
console.log(search([-5, 2, 4, 6, 10], 6));   
console.log(search([-5, 2, 4, 6, 10], 20));