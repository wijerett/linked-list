


function linkedList () {

}

class Node {
    constructor (value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }

    value = null;
    nextNode = null;

    append(value) {
        value.appendChild(value);
    }

    prepend(value) {
        value.prependChild(value);
    }

    size(value) {
        return value.length;
    }

    head(value) {
        return value.index[1];
    }

    tail(value) {
        return value.index[-1];
    }

    at(value, n) {
        if (n === null) return "undefined";
        return value.index[n];
    }

    pop(value, n) {
        if (n === null) return "undefined";
        return value.pop(n);
    }

    contains(value, n) {
        if (value.contains(n)) {
             return true;
        } else {
            return false;
        }
    }

    findIndex(value, I) {
        if (value.index[I] >= 1){
            return value.index[I][0];
        } else if (value.index[I] === null){
            return -1;
        }
    }

    toString() {
        
    }
}