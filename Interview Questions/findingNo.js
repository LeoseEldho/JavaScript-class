const numbers = [3, 7, 2, 9, 5];
const target = 7;
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        found = true;
        console.log(target);
        break;
    }
}

if (!found) {
    console.log(`${target} not found `);
}