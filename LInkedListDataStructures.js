var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    // append
    LinkedList.prototype.append = function (value) {
        var node = {
            value: value,
            next: null
        };
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    };
    // prepend
    LinkedList.prototype.prepend = function (value) {
        var newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    };
    // insert
    LinkedList.prototype.insert = function (index, value) {
        //check params
        if (index >= this.length) {
            return this.append(value);
        }
        var newNode = {
            value: value,
            next: null
        };
        var leader = this.traverseToIndex(index - 1);
        var holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    };
    LinkedList.prototype.traverseToIndex = function (index) {
        //check params
        var counter = 0;
        var currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    };
    // delete
    LinkedList.prototype.remove = function (index) {
        var leader = this.traverseToIndex(index - 1);
        var unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    };
    // reverse
    LinkedList.prototype.reverse = function () {
        if (!this.head.next) {
            return this.head;
        }
        var first = this.head;
        var tail = this.head;
        var second = first.next;
        console.log("first", first);
        console.log("second", second);
        while (second) {
            var temp = second.next;
            second.next = first;
            first = second;
            second = temp;
            console.log("first", first);
            console.log("second", second);
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    };
    // view
    LinkedList.prototype.printList = function () {
        var array = [];
        var currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    };
    return LinkedList;
}());
var myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(10);
myLinkedList.append(25);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());
