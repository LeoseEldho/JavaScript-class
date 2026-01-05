
function reverseGravity(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    for (let col = 0; col < cols; col++) {
        let count = 0;
        for (let row = 0; row < rows; row++) {
            if (grid[row][col] === '#') {
                count++;
            }
        }
        for (let row = 0; row < rows; row++) {
            if (row < count) {
                grid[row][col] = '#';
            } else {
                grid[row][col] = '.';
            }
        }
    }
    return grid;
}
let grid = [
    ['.', '.', '#'],
    ['.', '#', '.'],
    ['#', '.', '#']
];
console.log(reverseGravity(grid));