class DynamicArray {
  constructor(capacity=4, length=0) {
    this.capacity = capacity;
    this.length = length;
    this.data = new Array(this.capacity);
  }

  read(index) {
    /*
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }*/
    return this.data[index];
  }

  unshift(val) {
    if (this.length >= this.capacity) {
      this.expand();
    }
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  expand() {
    const newCapacity = this.capacity * 2;
    const newArray = new Array(newCapacity);
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.data[i];
    }
    this.data = newArray;
    this.capacity = newCapacity;
  }
}

/*class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here

  }

  read(index) {

    // Your code here
  }

  unshift(val) {

    // Your code here
  }

}*/


module.exports = DynamicArray;
