
/*
?Contains
 Add a method contains(value) to your SLL class, which is given a value as a parameter. 
  Return a boolean (true/false); true, if the list possesses a node that contains the 
  provided value.
 */
    class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Head {
    constructor() {
        this.head = null;
    }

    //     addFront(value){
    //     // create new node 
    //     let newNode = new Node(value)
    //     // create pointer between  new node and header
    //    newNode.next = this.head
    //    // set head to newNode 
    //    this.head = newNode
    //    // return this
    //    return this
        
    //  }
    addBack(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

     contains(value) {
            //We first have to tell our train attendant that we want them to start at the front of the train
            let runner = this.head
            //Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to iterate, instead we'll use a while
            //Also we need to tell them when to stop otherwise they will just run off the end of the train
            while(runner){
                //Since the runner is set to the current node, its value will be equal to the value of the node they are currently on
                if(runner.value === value){
                    return true
                }
                runner = runner.next
            }
            return false
        }
    }

// Example usage
const sll = new Head();
sll.addBack(10);
sll.addBack(20);
sll.addBack(30);

console.log(sll.contains(20)); // Output: true
console.log(sll.contains(15)); // Output: false