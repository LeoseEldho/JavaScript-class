// push pop
let arr = [1, 2, 3, 4]

arr.push(3);
console.log(arr);
arr.pop()
console.log(arr);
arr.reverse();



// unshift shift
arr=[1,2,3,4]

arr.unshift(.5,0)
console.log(arr)

arr.shift();
console.log(arr);



// splice
let arr = [1, 2, 3, 4, 5];

arr.splice(2, 3);
//first no is index where to start and second no is how many no. to delete

console.log(arr)
arr = [10, 2,9,7,1];
arr.splice(2, 1)
//first no is index where to start and second no is how many no. to delete

console.log(arr);

arr = [1, 2, 3, 4, 5];
arr.splice(1,3,"A","B","C")
// first no is index where to start and second no. is how many no. to be deleted , and the 
// third is that delete and add insted of deleted one
console.log(arr)

arr = [1, 2, 3, 4, 5];
arr.splice(1, 3, 10,11,);
console.log(arr);



// concate methode
let arr = [1, 2, 3, 4, 5];
let arr1 = [8, 9];
let concate = arr.concat(arr1);
// combaine two arrays to one array;  RETURN NEW ARRAY
console.log(concate);



// slice methode
 arr = [1, 2, 3, 4, 5];

const slicearray = arr.slice(1, 3);
// first no. is index no. where to start and second no. is how many to select;
// RETURN NEW ARRAY;
console.log(slicearray)



// indexOf methode
let arr = [1, 2, 3, 4, 5];

const indexOf = arr.indexOf(5);
// find index of the given no. //RETURN NEW ARRAY;
console.log(indexOf);



// lastIndexOf methode
let arr = [1, 5,2, 3,5, 4, 5];

const lastIndexOf = arr.lastIndexOf(5);
// find last index of the given no. //RETURN NEW ARRAY;
console.log(lastIndexOf);



// find methode
let arr = [1,2,3,4,5]

const findNo = arr.find(x=>x>3)
// RETRUN fisrt no. of callback satisfy;
console.log(findNo);



// findIndex methode
let arr = [1,2,3,4,5]

const findNo = arr.findIndex(x=>x>3)
// RETRUN fisrt no. of callback satisfys index;
console.log(findNo);



// filter methode
let arr = [1,2,3,4,5]

const findNo = arr.filter(x=>x>3)
// RETRUN  array of filter elements
console.log(findNo);



// includes methode
let arr = [1,2,3,4,5]

const findNo = arr.includes(3)
// check wathere the element includes in the array;
console.log(findNo);



// reverse methode
 arr = [1,2,3,4,5]

const findNo = arr.reverse()
console.log(findNo);



// sort methode
 arr = [1,4,2,0]

const findNo = arr.sort()
console.log(findNo);



// join methode
 arr = ['a','b','c']

const findNo = arr.join('-')
//joint with the given item and retruns new array;
console.log(findNo);



// join methode
 arr = ['a','b','c']

const findNo = arr.join('')
//joint with the given item and retruns new array; 
// abc
console.log(findNo);



// fill methode
 arr = [1,3,4,5,'c']

const findNo = arr.fill(0,0,3)
// fill the first no. to selected place .
console.log(findNo) 