let store=new Map([
    ['shirt',23],
    ['jeans',45],
    ['hat',51],
    ['socks',45]
]);

store.set('helmet', 50)
store.delete('hat')
document.writeln(store.has('hat'))

store.forEach((value,key) => document.writeln(key,value))    
    