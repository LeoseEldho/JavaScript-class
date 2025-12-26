function climbingStaircase(n) {
    let ways = [1, 2]
    for (let i = 2; i <= n; i++){
        ways[i] = ways[i - 1] + ways[i - 2];
    }
    return ways[n-1]
}
console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))