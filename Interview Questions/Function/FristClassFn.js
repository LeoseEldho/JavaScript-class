const operations = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
};

function getOperation(type) {
    return operations[type]; // Returning a function
}

const addFn = getOperation('add');
console.log(addFn(2, 3)); // 5