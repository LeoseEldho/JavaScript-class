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