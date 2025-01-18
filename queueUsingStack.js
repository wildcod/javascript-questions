
class Stack {
    constructor(){
        this.data = []
    }

    push(element) { 
       this.data.push(element)
    }
    peek() {
        const size = this.size();
        if(size === 0) return -1;
        return this.data[size - 1];
    }
    pop() {
        this.data.pop();
     }
    size() {
        return this.data.length;
     }
  }

  class Queue {
    constructor(){
         this.stack = new Stack();
         this.stackQueue = new Stack();
     }
 
     enqueue(element) { 
       this.stack.push(element);
     }
 
     dequeue() {
         while(this.stack.size() !== 1){
             this.stackQueue.push(this.stack.peek());
             this.stack.pop(); 
         }
         const poppedEle = this.stack.pop();
 
         while(this.stackQueue.size()){
             this.stack.push(this.stackQueue.peek());
             this.stackQueue.pop();
         }
 
         return poppedEle;
     }
 
     peek() {
         while(this.stack.size()){
             this.stackQueue.push(this.stack.peek())
             this.stack.pop();
         }
         const peekEle = this.stackQueue.peek();
 
         while(this.stackQueue.size()){
             this.stack.push(this.stackQueue.peek());
             this.stackQueue.pop();
         }
         return peekEle;
     }
 
     size() { 
       return this.stack.size();
     }
 }


  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);

  console.log(queue.size());

  console.log(queue.peek());

  queue.dequeue();

  console.log(queue.size());

  console.log(queue.peek());


