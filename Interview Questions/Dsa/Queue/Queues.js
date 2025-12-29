
class circularQueue{
    constructor(capacity) {
        this.item = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }
    isFull() {
        return this.currentLength === this.capacity;
    }
    isEmpty() {
        return this.currentLength == 0;
    }
    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.item[this.rear] = element
            this.currentLength += 1;
            if (this.front == -1) {
                this.front = this.rear;
            }
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.item[this.front];
        this.item[this.front] = null;
        this.front =( this.front + 1)%this.capacity
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item
    //   asfdadsfasdxcvzxcvzxcxzvxczxasdfdasfsdfasdfsdfassdfas
    }
    peek() {
        if (this.isEmpty()) {
            return this.item[this.front];
        }
        return null;
    }
    print() {
        if(this.isEmpty()){
            console.log("empty")
        }else {
            let i
            let str = "";
            for (let i = this.front; i!== this.rear; i = (i + 1) % this.capacity){
                str += this.item[i] + " ";
            }
            str += this.item[i];
            console.log(str)
        }
    }
}
let queue = new circularQueue(5);
console.log(queue.isEmpty())
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.isFull())
queue.print()