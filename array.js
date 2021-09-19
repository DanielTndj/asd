class arr {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    delete this.data[this.length - 1];
  }

  delete(index) {
    for (let a = index; a < this.length - 1; a++) {
      this.data[a] = this.data[a + 1];
    }
    this.pop();
  }

  unshift(data) {
    let temp;
    let cur;

    for (let a = 0; a < this.length; a++) {
      if (a === 0) {
        temp = this.data[a];
        this.data[a] = data;
      }
       else {
        cur = this.data[a];
        this.data[a] = temp;
        temp = cur;
      }
    }

    this.push(temp)
  }
}

const myArr = new arr();

myArr.push(1);
myArr.push(2);
myArr.push(3);
myArr.unshift(0);
myArr.delete(0)
console.log(myArr)
