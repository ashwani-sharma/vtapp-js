class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.textContainer = document.getElementById('container');
  }

  storeEnteredValues(txt) {
    let val = '';

    while(val == null || val.trim().length < 1) {
      val = prompt(`please enter ${txt}`);
    }

    return val;
  }

  displayStoredValues() {
    let message = `Hello ${this.storeEnteredValues(this.fname)} ${this.storeEnteredValues(this.lname)}.`;

    alert(message);
    this.textContainer.innerHTML = message;
  }
}

window.onload = function() {
  let newPerson = new Person('first name', 'last name');
  newPerson.displayStoredValues();
}
