var MyNode = /** @class */ (function () {
    function MyNode(value) {
        this.value = value;
        this.next = null;
    }
    return MyNode;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    Queue.prototype.enqueue = function (value) {
        var newNode = new MyNode(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    };
    Queue.prototype.dequeue = function () {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    };
    Queue.prototype.peek = function () {
        return this.first;
    };
    return Queue;
}());
var myQueue = new Queue();
myQueue.enqueue('Mrs. Marvel');
myQueue.enqueue('Spiderman');
myQueue.enqueue('Cosmic Ghost Rider');
myQueue.enqueue('Immortal Hulk');
myQueue.enqueue('Wolverine');
console.log(myQueue);
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue);
