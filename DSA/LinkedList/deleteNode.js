class Node {
    constructor(d){
     this.data = d;
     this.next = null
    }
 }


function deleteNode(node) {
    let prev = null;
    while (node.next) {
        node.data = node.next.data;
        prev = node;
        node = node.next;
    }
    prev.next = null;
}

function createLL(arr){
    let head = null;
    for(let ele of arr){
       const temp = new Node(ele);
       temp.next = head;
       head = temp
    }

    return head;
}

function printLL(head){
    let temp = head;

    while(temp){
        console.log(temp.data);
        temp = temp.next;
    }
}

const arr = [1,2,3,4,5,6];

let head = createLL(arr);
// printLL(head);

deleteNode(head.next.next);

printLL(head)