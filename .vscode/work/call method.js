let animal ={
    name: 'animal',
    display:function(name1){
        return `this is an -${name1} `
    }
}

let dog={
    name:'dog'
}

document.writeln(animal.display('animal'    ));
document.writeln(animal.display.call(dog,dog.name))


let person={
    firstname: 'john',
    lastname:'doe',
    display :function(){
    return `the fullname is ${this.firstname} ${this.lastname} `
    }
}

let player={
    firstname:'leo',
    lastname:'messi',
    age:35,
}

document.writeln(person.display.call(player))      
