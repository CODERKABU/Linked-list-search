class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    search(data) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    delete(data) {
        if (this.head === null) return false;

        if (this.head.data === data) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    display() {
        let current = this.head;
        let listStr = '';
        while (current !== null) {
            listStr += current.data + ' -> ';
            current = current.next;
        }
        listStr += 'null';
        return listStr;
    }
}

// Create a linked list and populate it with some data
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(50);
linkedList.append(60);
linkedList.append(70);
linkedList.append(80);
linkedList.append(90);
linkedList.append(100);

document.getElementById('list').innerText = 'Linked List: ' + linkedList.display();

function insertData() {
    const data = parseInt(document.getElementById('dataInput').value);
    if (!isNaN(data)) {
        linkedList.append(data);
        document.getElementById('list').innerText = 'Linked List: ' + linkedList.display();
        document.getElementById('result').innerText = `Data ${data} inserted into the list`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid number';
    }
}

function searchData() {
    const data = parseInt(document.getElementById('dataInput').value);
    if (!isNaN(data)) {
        const index = linkedList.search(data);
        if (index !== -1) {
            document.getElementById('result').innerText = `Data ${data} found at index ${index}`;
        } else {
            document.getElementById('result').innerText = `Data ${data} not found in the list`;
        }
    } else {
        document.getElementById('result').innerText = 'Please enter a valid number';
    }
}

function deleteData() {
    const data = parseInt(document.getElementById('dataInput').value);
    if (!isNaN(data)) {
        const deleted = linkedList.delete(data);
        if (deleted) {
            document.getElementById('list').innerText = 'Linked List: ' + linkedList.display();
            document.getElementById('result').innerText = `Data ${data} deleted from the list`;
        } else {
            document.getElementById('result').innerText = `Data ${data} not found in the list`;
        }
    } else {
        document.getElementById('result').innerText = 'Please enter a valid number';
    }
}
