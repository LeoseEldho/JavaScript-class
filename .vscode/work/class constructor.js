
class student{
    constructor(name, class1, age){
        this.name=name;
        this.class1=class1;
        this.age=age;
    }
    study(){
        document.writeln(`the student ${this.name} is studying in${this.class1}`);
    }
}
let st1=new student("alan","1","19");
let st2=new student('leo','12','17')

st1.study()  
st2.study() 
