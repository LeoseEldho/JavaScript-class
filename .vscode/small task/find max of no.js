let add=[5,1,3,2,6];


// let result=add.reduce((total,x)=>{ return total+=x});
let result =((add)=>{
    let max=0;
    for(let i=0; i<add.length; i++){
        if(add[i]>max){
            max=add[i]
        }
        
    }
    return max
})
