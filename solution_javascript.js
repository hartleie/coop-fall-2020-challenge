class EventSourcer {
  constructor() {
    this.value = 0;
    this.undoList = [];
    this.redoList = [];
  }

  add(num) {
    if (typeof num == "number") {
      this.undoList.push(num*(-1));
      this.value = this.value + num;
      this.redoList.pop();
    }
  }
  subtract(num) {    
    if (typeof num == "number") {     
      this.undoList.push(num);
      this.value = this.value - num;
      this.redoList.pop();
    }
  }
  undo() {
    if (this.undoList.length > 0) {
      this.redoList.push(this.undoList.pop());
      this.value = this.value + this.redoList[this.redoList.length - 1];
    }
  }
  redo() {
    if (this.redoList.length > 0) {
      this.undoList.push(this.redoList.pop());
      this.value = this.value + this.undoList[this.undoList.length - 1] * (-1);
    }
  }
  bulk_undo(num) {
    let i = 0;
    if (typeof num == "number") {
      for (i = 0; i < num; i++) {
        this.undo();
      }
    }
  }
  bulk_redo(num) {
    let i = 0;
    if (typeof num == "number") {     
      for (i = 0; i < num; i++) {
        this.redo();
      }
    }
  }
}


// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
