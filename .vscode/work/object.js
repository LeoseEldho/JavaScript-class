let store=new Map([
    ['book',30],
    ['pen',10],
    ['box',50],
    ['rubber',3]
])

store.set('lapt0p', 50000);
store.delete('pen')


store.forEach((value,key)=> document.writeln(`the ${key} $${value}<br>`))
document.writeln(store.has('book'))
document.writeln(store.size)