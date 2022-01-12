var head;
class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}
function printList(){
    var tnode = head;
    while(tnode!=null){
        console.log(tnode.data);
        tnode = tnode.next
    }
}

var head = new Node(1);
var second = new Node(2);
var third = new Node(3);
var fourth = new Node(5);
var fifth = new Node(7);
var sixth = new Node(10);
var seventh= new Node(45);
head.next=second;
second.next=third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
sixth.next = seventh;
seventh.next = null;
printList();
