var head;
class Node{
    constructor(val){
        this.data=val;
        this.next = null;
    }
}


function deleteNode(position){
    if(head==null)
    return;
    var temp = head;
    if(position==0){
        head=temp.next;
        return;
    }
    for(i=0;temp!=null&&i<position-1;i++)
        temp=temp.next;
      if(temp==null||temp.next==null)
      return;
      var next = temp.next.next;
      temp.next=next;

}
function printList(){
    var tnode = head;
    while(tnode!=null){
        console.log(tnode.data)
        tnode=tnode.next;
    }
}
var head = new Node(1);
var second = new Node(2);
var third = new Node(3);
var fourth = new Node(45);
var fifth = new Node(60);
var sixth = new Node(12);
head.next=second;
second.next=third;
third.next = fourth;
fourth.next=fifth;
fifth.next=sixth;
sixth.next=null;
console.log("original List")

printList();

console.log("deleted list")

deleteNode(2);
printList();