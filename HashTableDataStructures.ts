class HashTable {
    data : any[]

    constructor(size) {
        this.data = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i< key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key: any, value: any) {
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value])
        return this.data;
    }

    get(key: any) {
        let address = this._hash(key)
        const currentBucket = this.data[address]
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++)
            {
                if(currentBucket[i][0] == key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        // loop through all the elements
        for(let i = 0; i < this.data.length; i++)
        {
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }

}

const myHashTable = new HashTable(50);
myHashTable.set('X-men', 100);
myHashTable.set('X-Force', 75);
myHashTable.set('Avengers', 50);
console.log(myHashTable.set('F4', 10));
console.log(myHashTable.get('X-men'));
console.log(myHashTable.get('Avengers'));
console.log(myHashTable.get('X-Force'));
console.log(myHashTable.keys());