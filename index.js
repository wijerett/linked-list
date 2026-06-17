
export class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }

    // value = null;
    // nextNode = null;
}

export class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = node;
        }
        this.size++;
    }


    prepend(value) {
        const node = new Node(value);
        node.nextNode = this.head;
        this.head = node;
        this.size++;
    }

    getSize() {
        return this.size;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        let current = this.head;
        if (!current) return null;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    at(n) {
        let current = this.head;
        let i = 0;
        while (current) {
            if (i === n) return current;
            current = current.nextNode;
            i++;
        }
        return null;
    }

    pop() {
        if (!this.head) return null;
        if (!this.head.nextNode) {
            const value = this.head.value;
            this.head = null;
            this.size--;
            return value;
        }
        let current = this.head;
        while (current.nextNode.nextNode && current.nextNode.nextNode) {
            current = current.nextNode;
        }
        const value = current.nextNode.value;
        current.nextNode = null;
        this.size--;
        return value;
    }

    contains(value, n) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    findIndex(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
        }
        return -1;
    }

    toString(value) {
        let current = this.head;
        let result = "";
        while (current) {
            result += `(${current.value}) -> `;
            current = current.nextNode;
        }
        return result + "null";
    }

    insertAt(head, pos, value) {

        if (pos < 1) return head;

        if (pos === 1) {
            let newNode = new Node(value);
            newNode.nextNode = head;
            return newNode;
        }
        let curr = this.head;

        for (let i = 1; i < pos -1 && curr !== null; i++) {
            curr = curr.nextNode;
        }

        if (curr === null) return head;

        let newNode = new Node(value);

        newNode.nextNode = curr.nextNode;
        curr.nextNode = newNode;
        return head;
    }
}

