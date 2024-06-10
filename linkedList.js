class Node {
    constructor(data = null, nextNode = null) {
        this.data = data;
        this.nextNode = nextNode
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    //adds a new node containing value to the end of the list
    append(value) {
        const newNode = new Node(value);

        if (this.headNode === null) {
            this.headNode = newNode;
        }

        else {
            let currentNode = this.headNode;
            while (currentNode.nextNode != null) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;
        }

    }

    //adds a new node containing value to the start of the list
    prepend(value) {
        const newNode = new Node(value, this.headNode)
        this.headNode = newNode;
    }

    //returns the total number of nodes in the list
    size() {
        let count = 0;
        let currentNode = this.headNode;
        while (currentNode != null) {
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;

    }
    //returns the first node in the list  
    head() {
        return this.headNode;
    }

    //returns the last node in the list
    tail() {
        let currentNode = this.headNode;
        if (currentNode === null) {
            return null;
        }
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;

    }

    //returns the node at the given index
    at(index) {
        let count = 0;
        let currentNode = this.headNode;
        while (currentNode != null && count < index) {
            currentNode = currentNode.nextNode;
            count++;
        }
        return currentNode;

    }

    //returns the last element from the list
    pop() {
        if (this.headNode === null) {
            return null;
        }
        if (this.headNode.nextNode === null) {
            headNode = this.headNode;
            this.headNode = null;
            return headNode;
        }
        let currentNode = this.headNode;
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        } 
        returnNode = currentNode;
        currentNode = null;
        return returnNode;
    }

    //returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
        let currentNode = this.headNode;
        while (currentNode.nextNode != null) {
            if (currentNode.data === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    //returns the index of the node containing value, or null if not found.
    find(value) {
        let count = 0
        let currentNode = this.headNode;
        while (currentNode.nextNode != null) {
            if (currentNode.data === value) {
                return count;
            }
            count++;
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    //represents LinkedList objects as strings. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        let string = "";
        let currentNode = this.headNose;
        while (currentNode.nextNode != null) {
            string += `( ${currentNode.data} ) -> `;
        }
        string += 'null';
        return string;
    }

    //Insert a node at a specific index
    insertAt(value, index) {
        if (index < 0 || index > this.size()) {
            return null;
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }

        let newNode = new Node(value);
        let currentNode = this.headNode;
        let currentIndex = 0;

        while (currentIndex < index - 1) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
    }

    //Remove a node at a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            return null;
        }
        if (index === 0) {
            this.headNode = this.headNode.nextNode;
            return;
        }

        let currentNode = this.headNode;
        let currentIndex = 0;
        while (currentIndex < index - 1) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        currentNode.nextNode = currentNode.nextNode.nextNode;
    }
}