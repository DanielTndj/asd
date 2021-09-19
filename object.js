class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  get(key) {
    let curr = this.data[this._hash(key)];
    if (curr) {
      for (let i = 0; i < curr.length; i++) {
        if (curr[i][0] === key) return curr[i][1];
      }
    }
    return;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) this.data[address] = [];
    this.data[address].push([key, value]);
    return this.data;
  }

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++)
      if (this.data[i]) keysArr.push(this.data[i][0][0]);
    return keysArr;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("avocado", 5000);
myHashTable.set("orange", 1000);
console.log(myHashTable.keys());
