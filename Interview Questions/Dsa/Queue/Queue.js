class Queue{
    constructor() {
        this.item = {};
        this.front = 0;
        this.rear = 0;
    }
    enqueue(element) {
        this.item[this.rear] = element;
        this.rear++
    }
    dequeue() {
        let item = this.item[this.front]
        delete this.item[this.front]
        this.front++
        return item
    }
    isEmpty() {
        return this.rear - this.front === 0;
    }
    peek() {
        return this.item[this.front];
    }
    size() {
        return this.rear - this.front;
    }
    print() {
        console.log(this.item)
    }
}
const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue("10")
queue.enqueue(34)
console.log(queue.size())
console.log(queue.dequeue())
console.log(queue.peek())
queue.print()