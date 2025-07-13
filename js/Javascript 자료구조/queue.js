class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    isEmpty(){
        return this.front === null &&  this.rear === null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.front = newNode;
            this.rear = newNode;
        } else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }
    popFront(){
        if(this.isEmpty()){
            console.log('Queue empty');
            return;
        }
        const value = this.front.value;
        this.front = this.front.next;
        this.size--;
        if(!this.size) this.rear = null;
        return value;
    }
    printQueue(){
        if(this.isEmpty()){
            console.log('Queue empty');
            return;
        }
        let currentNode = this.front;
        while(currentNode !== this.rear){
            process.stdout.write(`${currentNode.value} `);
            currentNode = currentNode.next;
        }
        process.stdout.write(`${currentNode.value}`+'\n');
    }
}
const queue = new Queue();
queue.insert(10);
queue.insert(9);
queue.insert(8);
queue.printQueue();
queue.popFront();
queue.popFront();
queue.popFront();
queue.popFront();
console.log(queue);
