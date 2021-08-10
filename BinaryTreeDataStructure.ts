class MyNode {

}
class BinarySearchTree {
    root: any;

    constructor() {
        this.root = null;
    }

    insert(value) {

    }

    lookup(value) {

    }

    // remove

}

const tree = new BinarySearchTree();

function traverse(treeNode) {
    const tree = { value: treeNode.value };
    tree.left = treeNode.left === null ? null : traverse(treeNode.left);
    tree.right = treeNode.right === null ? null : traverse(treeNode.right);
    return tree;
}