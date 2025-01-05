const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (newNode.data > currentNode.data) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  has(data) {
    if (!this.head) {
      return false;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  find(data) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    let parentNode = null;

    while (currentNode) {
      if (currentNode.data === data) {
        return;
      }
      if (data < currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
  }

  min() {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (!currentNode.left) {
        return currentNode.data;
      }
      currentNode = currentNode.left;
    }
  }

  max() {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (!currentNode.right) {
        return currentNode.data;
      }
      currentNode = currentNode.right;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
