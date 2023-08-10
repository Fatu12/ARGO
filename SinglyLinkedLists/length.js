/*
?Length
Create a new SLL method length() that returns number of nodes in that list.
*/
class Node{
    constructor(node){
        this.node = node
        this.next = null
    }
}
class Head{
    constructor(){
    this.head = null
    }
        addFront(value){
            let newNode = new Node(value)
            newNode.next = this.head;
           this.head = newNode
            return this

            }
             lengthNode() {
                if(this.head== null){
                    return null
                }
                let count = 0
                let current = this.head
                while(current){
                    count ++
                    current = current.next
                }
                return count
    }
}
        let SLL = new Head()
        SLL.addFront(12)
        SLL.addFront(3)
        SLL.addFront(1)
        SLL.addFront(4)
        console.log(SLL)
        console.log(SLL.lengthNode())
    

