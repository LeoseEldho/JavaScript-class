// var a=0;
// if(a>0){
//     document.write("+");
// }else if(a<0){
//     document.write("-");
// }else{
//     document.write("=");
// }

// var day="8";
// switch(day){
//     case "1":
//     document.write("mon");
//     break;
//     case "2":
//         document.write("tues");
//         break;
//     case "3":
//         document.write("wes");
//         break;
//     default:
//         document.write("invaild");
//         break;
// }

// for(i=0; i<=5; i++ ){
//     document.write(i+"<br>");
// }

// var i=1;
// while( i <= 8){
//     document.write(i+"<br>");
//     i++;
// }

// var i=8;
// do{
//     document.write(i+"<br>");
//     i--;
// }
// while(i>=1);

// function hello(n2,n3){
//     return n2+n3;
// }
// var b=hello(1,2);
// document.write(b);

// var animal=["a","b","c","f"];
// var x=animal.length;

// for(var i=0; i<x; i++){
//     document.write(
//         animal[i]+"<br>"
//     );
// }

// var no=[6,5,7,2];
// document.write(no[1]+no[2]);

// var a= document.getElementsByName("text")[0];
// var b= document.querySelector(".text2");
// function message(){
//    b.innerHTML = "hai"+a.value;
// }

// var heading =document.createElement("H1");
// function create(){
//     heading.innerHTML="hello world";
//     document.body.appendChild(heading)
// }
// function remove(){
//     heading.remove();
// }

// var heading=document.getElementById("head");
// var btn=document.getElementById("btn");
// btn.addEventListener("click", changeColor);
// function changeColor(){
//     heading.style.color="red";
// }

// let a=5;
// let b= a==5 ? "ture":"false";
// document.write(b);

// let a=document.querySelector(".btn");
// let b=document.querySelector(".text");
// // let c=document.querySelector(".btn2");
// a.addEventListener("click", create);
// document.querySelector(".btn2").addEventListener("click", remove);
// function create(){
//     b.innerHTML="hello";
//     document.body.appendChild(b);
// }
// function remove(){
//     b.remove();
// }

// let a=document.getElementsByClassName(".demo");
// let b=document.getElementById("demo1");
// console.log(document.getElementsByTagName('div')[2]);

// let a=document.querySelector(".btn");
// let b=document.querySelector(".text");

// let a=document.querySelector("#firstno");
// let b=document.querySelector("#secondno");
// let c=document.querySelector("#btnadd");
// let x=document.querySelector("#result");
// function addon(){
//     let sum=parseInt(a.value)+parseInt(b.value);
//     result.innerHTML = "the result is "+ sum;
// }

// let age=56;
// let result=(age>=18) ?((age>25) ? "can vote and drink":"can vote"):"can not vote";
// document.write(result);

// function factorial(number){
//     if(number==1)
//     return 1;
//     return number*factorial(number -1)
// }
// let x=factorial(4);
// document.write(x)

// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let number=5;
// const length=numbers.length
// let i=0;
// while(i<10){
//     let result=number*numbers[i]
//     i++
//     if(i%2==0)
//     document.write(`${number}*${i}=${result}<br>`)
// }

// let x=5;
// let i=1;
// while(i<=10){
//    let result=i*x

//    document.writeln(`${x}*${i}=${result}<br>`)
//    i++
// }

// let person={
//     name:'peter',
//     age:34,
//     gender:'male',
//     display:function(){
//         document.writeln(this.name , this.age , this.gender);
//     },
//     setname:function(name1){
//     this.name=name1;
//     },
//     getname(){
//         return this.name;
//     }
// }
// person.setname('biju')
// document.write(person.getname())

// function person(name,age,gender){
//     this.name=name
//     this.age=age
//     this.gender=gender
//     this.display =function(){
//         document.write('the name is '+ this.name ,this.age +' and the gender is '+ this.gender)
//     }
// }
// p1=new person('alan', '24' ,'male');

// p1.display()

// for in loop
// let person={
//     fristname:'john',
//     lastname:'doe',
//     age:21,
//     gender: 'male',
// }
// for (let key in person) {
//     document.write(`${key} =  ${person[key]}  <br>`)
//     }

//  for of loop
// let names=[1,3,4,5,2];

// for (const element of names) {
//     document.writeln(element+'<br>')
// }

// let ḍ='javascript'   ;
// text="";
// for (const element of str) {
//     text += element +'-'
// }
// document.writeln(text)

// for each
// let arr=[11,12,13,14,15];
// let arr1=[]
// arr.forEach(myfunction)

// function myfunction(value, index, array){
//     arr1.push(value)
// }
// document.write(arr)
// document.writeln(arr1)

// let str=[1,2,3,4,5,6 ,7];
// let str1=[]

// str.forEach((value)=>str1.push(value))
// function myfunction(value){
//     str1.push(value)
// }
// document.writeln(str1+'<br>')
// document.writeln(str)

// let array=[1,2,3,4,2];
// let set1 =new Set();
// array.forEach((item)=> {
//     item=item+10;
//     set1.add(item )
// })
// set1.add(7)
// set1.add(9)
// console.log(set1)

// let map1=new Map()
// map1.set(1, 'one');
// map1.set(2, 'two')
// map1.set(3, 'three')

// // document.writeln(map1.get(1))
// // map1.delete(2)
// // map1.clear()
// // document.writeln(...map1 +'<br>')
// map1.forEach(maplist)
// function maplist(value,key){
//     document.write(`${key}=${value}<br>`)
// }
// document.writeln(...map1.values())

// let a=document.querySelector('#box');
// let b=document.querySelector('btn');

// card1=document.querySelector('#card1');
// card2=document.querySelector('#card2');
// card3=document.querySelector('#card3');

// function message(){
//     if(a.checked){
//         document.writeln('you are subscribed');
//     }else{
//         document.writeln('you are not subscribed')
//     }

// if(card1.checked){
//     document.writeln('you paying with visa')
// }else if(card2.checked){
//     document.writeln('paying with master card');
// }else if(card3.checked){
//     document.writeln('paying with paypal')
// }else{
//     document.writeln('select a payment method')
// }
// }

// let label=document.writeln('#label')

// function person(fristname,lastname){
//     this.fristname=fristname
//     this.lastname=lastname;
// }
// person.prototype.display=function(){
//     return  `fullname is ${this.fristname} ${this.lastname}`
// }
// function player(fristname,lastname,age){
//     this.fristname=fristname
//     this.lastname=lastname
//     this.age=age
// }
// player.prototype.display= function(){
//     return `${this.fristname} ${this.lastname} full name of the player ${this.age}`
// }
// let player1 =new player('leo','messi' , 35);
// Object.setPrototypeOf(person.prototype, player.prototype)
// document.writeln(player1.display())

// sum(2,3 , displaydom)

// function sum(x,y ,callback){
//     let result=x+y;
//     callback (result)
// }

// function displayconsole(output){
//     console.log(output)
// }
// function displaydom(output){
//     text.innerHTML=output
// }

// let str='apple';

// let x=str.length

// for(let i=x-1; i>=0; i--){
//     document.writeln(typeof str[i])
// }

//   input => [[1, 2], [3, 4]]
//   output => [{x: 1, y: 2}, ...]

// let array=[[1,2],[3,4]];

// let x=array.flat()
// function subarray(){
//     let x =array[0][0]
//     document.writeln(x);
// }
// subarray()

// let array=[[1,2],[3,4]];
// let obj=Object.array

// let x=array.slice(0)
// let y=array.splice(1)

// for(i=0; i<array.length; i++){
//     document.writeln(`x: ${x[0]}`)
//     document.writeln(`y: ${y[i]}`)
// }

// document.writeln(x)
// document.writeln(y)

// function ran(){
//     return Math.floor(Math.random()*10)
// }
// for(let i=1 ; i<=5; i++){
//     document.writeln(ran()+'<br>')
// }

// function check(num1,num2){

//     if(num1==100|| num2==100 || num1+num2==100){
//     document.writeln('the condition is True')
//     }
// }

// check(99, 1)

// let check=((num1,num2)=>{
//     if(num1==100 || num2==100 ||num1+num2==100){
//         document.writeln('The condition is True')
//     }else{
//         document.writeln('false')
//     }
// })
// console.log(check(2,100)

// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let number=5;
// const length=numbers.length
// let i=0;
// while(i<10){
//     let result=number*numbers[i]
//     i++
//     if(i%2==0)
//     console.log(`${number}*${i}=${result}<br>`)

// let str=(String.fromCharCode(69))
// console.log(str)

// let date=new Date()

// let formatdate=(date)=>{
//     let day=date.getDay()
//     let month=date.getMonth()+1
//     let year=date.getFullYear()

//     return `${day}-${month}- ${year}`
// }

// console.log(formatdate(date))

// let move=((str)=>{
//     return str
//     .split('').map(char=>String.fromCharCode(char.charCodeAt(0)+1)).join('')
//     // .split('').map(char=>String.fromCharCode(char.charCodeAt(0)+1)).join('');
// })

// console.log(move('abcd'))

// for(let i=1; i<=10; i++){
//     console.log(i)
// }

// Array.map(()=>{})
//***********************/
///gdsdfkj
///bdsdfjhjc
///dedfjiis

//dusdhd
// async function productfetch() {
//     let response=await fetch('./product.json')
//     let data=await response.json()
//     allData=data

//     let result=allData.map((X)=> X.name)
//     console.log(result)

//     let newArray=allData.map((x)=>({name:x.name , salary: x.salary}))
//     console.log((newArray))
//     let taxed=0.10
//     let newTax=allData.map((x)=>({...x,tax:x.salary*taxed}))
//     console.log(newTax)

//     let developers=allData.filter((x)=> x.role=="developer")
//     console.log(developers)

//     let age25=allData.filter((x)=> x.age>25)
//     console.log(age25)

//     let salary=allData.filter((x)=> x.salary<5000)
//     console.log(salary)

//     let ascending=allData.sort((x,y)=>x.age-y.age)
//     console.log(ascending)

//     let descending=allData.sort((x,y)=> y.salary-x.salary)
//     console.log(descending)

//     let aZ=allData.sort((x,y)=> x.name.localeCompare(y.name))
//     console.log(aZ)

//     let totalSalary=allData.reduce((x,y)=> x+y.salary,0)
//     console.log(totalSalary)
// }
// productfetch()

//------------------------------------------------------------------------------------------------------------------------

//.................................................
// let n=27
// function perfectNo(n){
//     let sum=0
//     for(let i=1; i<n; i++){
//         if(n%i==0){
//             sum+=i
//             console.log(i)
//         }else{
//             console.log(i,"not")
//         }
//     }
//     console.log("the sum",sum)
//     if(sum==n){
//         console.log('true')
//     }else{
//         console.log('false')
//     }
// }
// perfectNo(n)

// let symbol=window.prompt('enter the symbol')
// let row=window.prompt('enter the row')
// let colum =window.prompt('enter the colum')

// function drawCenterPyramid(rows) {
//     for (let i = 0; i < rows; i++) {
//         let pattern = '';
//         for (let j = 0; j < rows - i - 1; j++) {
//             pattern += ' ';
//         }
//         for (let k = 0; k < 2 * i + 1; k++) {
//             pattern += '*';
//         }
//         console.log(pattern);
//     }
// }

// drawCenterPyramid(5);

// let a=[5,2,9,1,6,3]
// function quicksort(a,left,right){
//     if(left>= right)return
//     let pivot=a[right]
//     let i=left-1
//     for(let j=left;j<right;j++){
//         if(a[j]<pivot){
//             i++
//             let temp=a[i]
//             a[i]=a[j]
//             a[j]=temp
//         }
//     }
//     // kjhnwer32    ;
//     let temp=a[i+1]
//     a[i+1]=a[right]
//     a[right]=temp
//     let pivotIndex=i+1
//     quicksort(a,left,pivotIndex-1)
//     quicksort(a,pivotIndex+1,right)
//    return a
// }
// console.log(quicksort(a,0,a.length-1))
// sdfewasdfw
// ---------------------------------------------------------------------------------------------------------------------------
//  const obj ={user:{name:'Tom',address:{city:'ny',pin:1001}}}
// // output = [['user.name','tom'],['user.address.city','ny'],['user.address.pin',1001]]
// function nestObj(obj){
//     let result=[]
//     for(let key in obj){
//         console.log(key[name])
//     }
// }
// console.log(nestObj(obj))
// function sortArray(arr,callback){
//   let result =[]
//   for(let i=0; i<arr.length; i++){
//      for(let j=0; j<arr.length; j++){
//       result=callback(arr[i],arr[j])
//      }
//   }
//   return result
// }
// console.log(sortArray([5,2,8,1], (a,b)=>a-b))p

// const obj ={user:{name:'Tom',address:{city:'Brazil',pin:1001}}}
// function objArray(obj, parent = '', result = [],i=0) {
//     for (let key in obj) {
//         let fullkey = parent ? `${parent}.${key}` : key
//         if (typeof (obj[key]) == 'object'&&obj[key]!==null) {
//             objArray(obj[key], fullkey, result, i)
//             console.log(obj[key])
//         } else {
//             result[i] = []
//             result[i][0] = fullkey
//             result[i][1] = obj[key]
//             i++
//         }
//     }
//     return result
// }
// console.log(objArray(obj))

let number = 15
function revNo(n) {
    let temp=n
    let sum = 0;
    while (n > 0) {
        let last = n % 10;
        sum += last ** 3
        n=Math.floor(n/10)
    }
    if (sum == temp) {
        console.log('true')
    } else {
        console.log('false')
    }
    
}
revNo(number)
//[ asdfasdfasdf