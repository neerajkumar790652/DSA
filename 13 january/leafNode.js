
class Node
{
	constructor()
	{
		this.data = 0;
		this.right = null;
		this.left = null;
	}
}

function newNode(data)
{
	var temp = new Node();
	temp.data = data;
	temp.left = temp.right = null;
	return temp;
}

function printLeafNodes(root)
{

	if (root == null)
	{
		return;
	}

	if (root.left == null && root.right == null)
	{
		console.log(root.data);
		return;
	}

	if (root.right != null)
	{
		printLeafNodes(root.right);
	}

	if (root.left != null)
	{
		printLeafNodes(root.left);
	}
}

var root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);
root.right.left = newNode(6);
root.right.right = newNode(7);
root.left.left.left = newNode(8);
root.right.right.left = newNode(9);
root.left.left.left.right = newNode(10);
printLeafNodes(root);


