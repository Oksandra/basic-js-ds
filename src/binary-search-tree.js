const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  add(data) {

    this.treeRoot = addValue(this.treeRoot, data);

   function addValue(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addValue(node.left, data);
      } else {
        node.right = addValue(node.right, data);
      }

      return node;
    }

  }

  has(data) {
    return searchValue(this.treeRoot, data);

    function searchValue(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
      searchValue(node.left, data) : 
      searchValue(node.right, data);
    }
  }

  find(data) {
    return searchValue(this.treeRoot, data);

    function searchValue(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? 
      searchValue(node.left, data) : 
      searchValue(node.right, data);
    }
   
  }

  remove(data) {
    this.treeRoot = removeValue(this.treeRoot, data);

    function removeValue(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeValue(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeValue(node.right, data);
        return node;
      } else {
      
        if (!node.left && !node.right) {
        
          return null;
        }

        if (!node.left) {
         
          node = node.right;
          return node;
        }

        if (!node.right) {
  
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeValue(node.right, minFromRight.data);

        return node;
      }
    }
  }

  max() {
    if (!this.treeRoot) {
      return;
    }

    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

  min() {
    if (!this.treeRoot) {
      return;
    }

    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  root() {
    return this.treeRoot;
  }

}

module.exports = {
  BinarySearchTree
};