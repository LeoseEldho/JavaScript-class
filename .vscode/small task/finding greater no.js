let x=3;
let y=12;
let z=1;

if(x>y&&x>z){
    document.writeln(`this${x} is greater`)
}else if(y>x&&y>z){
    document.writeln(`this no:${y} greater`)
}else{
    document.writeln(`${z } is greater`)
}         



// console.log(Math.max(1,2,3,4))



let nums=[1,2,3,4,5,,6,7,]

let greaternum=(nums)=>{
    let greater=0
    for(let i=1; i<=nums.length; i++){
        if(nums[i]>greater){
            greater=nums[i]
        }
    }
    return greater
}
console.log(greaternum(nums))