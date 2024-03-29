var HashTable = /** @class */ (function () {
    function HashTable(size) {
        this.data = new Array(size);
    }
    HashTable.prototype._hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    };
    HashTable.prototype.set = function (key, value) {
        var address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    };
    HashTable.prototype.get = function (key) {
        var address = this._hash(key);
        var currentBucket = this.data[address];
        if (currentBucket) {
            for (var i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] == key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    };
    HashTable.prototype.keys = function () {
        var keysArray = [];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    };
    return HashTable;
}());
var myHashTable = new HashTable(50);
myHashTable.set('X-men', 100);
myHashTable.set('X-Force', 75);
myHashTable.set('Avengers', 50);
console.log(myHashTable.set('F4', 10));
console.log(myHashTable.get('X-men'));
console.log(myHashTable.get('Avengers'));
console.log(myHashTable.get('X-Force'));
console.log(myHashTable.keys());
