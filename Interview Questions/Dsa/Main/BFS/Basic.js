let graph = {
    'Alice': ['Tom', 'Sarah'],
    'Tom': ['Mike', 'Emma'],
    'Sarah': ['David', 'Lisa'],
    'Mike': ['Bob'],
    'Emma': [],
    'David': [],
    'Lisa': [],
    'Bob': []
};

function bfs(graph, start, target) {
    let queue = [start];

    let visited = new Set();
    visited.add(start)
  while (queue.length > 0) {

    let current = queue.shift();
        console.log(`Visiting: ${current}`);
        if (current === target) {
            console.log(`Found ${target}!`);
            return true;
        }
        let neighbors = graph[current];
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    console.log(`${target} not found`);
    return false;
}
bfs(graph, 'Alice', 'keise');