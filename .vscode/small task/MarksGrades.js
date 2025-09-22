let marks=[95,67 ,80]
let result=marks.map((x)=>{
    if(x>=95){
        return 'A'
    }else if(x>=80){
        return 'B'
    }else if(x>=67){
        return 'C'
    }
})
console.log(result)