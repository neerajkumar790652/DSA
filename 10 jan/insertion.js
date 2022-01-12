var head;
class Node{
    constructor(val){
        this.data=val;
        this.next=null;
    }
}
// insert new node
function insert(prenode , newdata){
    if(prenode==null){
        console.log("not null")
        return;
    }
    var new_node = new Node(newdata);
    new_node.next = prenode.next;
    prenode.next = new_node
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
head.next=second;
second.next=third;
insert(second,8);
printList();
