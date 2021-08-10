var MyArray = /** @class */ (function () {
    function MyArray() {
        this.length = 0;
        this.data = {};
    }
    MyArray.prototype.get = function (index) {
        return this.data[index];
    };
    MyArray.prototype.push = function (item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    };
    MyArray.prototype.pop = function () {
        var lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    };
    MyArray.prototype["delete"] = function (index) {
        var item = this.data[index];
        this.shiftItems(index);
    };
    MyArray.prototype.shiftItems = function (index) {
        for (var i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    };
    return MyArray;
}());
var newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.push('are');
newArray.push('nice!');
newArray["delete"](2);
console.log(newArray);
