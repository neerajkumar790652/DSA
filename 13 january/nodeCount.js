
		class Node {
			constructor(data) {
				this.data = data;
				this.left = null;
				this.right = null;
			}
		};

		function left_height(node) {
			let ht = 0;
			while (node) {
				ht++;
				node = node.left;
			}

			return ht;
		}

		function right_height(node) {
			let ht = 0;
			while (node) {
				ht++;
				node = node.right;
			}


			return ht;
		}

		function TotalNodes(root) {

			if (root == null)
				return 0;

			let lh = left_height(root);
			let rh = right_height(root);

			if (lh == rh)
				return (1 << lh) - 1;

			return 1 + TotalNodes(root.left)
				+ TotalNodes(root.right);
		}

		let root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(40);
		root.left.right = new Node(5);
		root.right.left = new Node(9);
		root.right.right = new Node(85);
		root.left.left.left = new Node(6);
		root.left.left.right = new Node(15);
        

		console.log(TotalNodes(root));
