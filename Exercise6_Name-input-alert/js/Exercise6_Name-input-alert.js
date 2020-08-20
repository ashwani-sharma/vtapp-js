class PrintName {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.textContainer = document.getElementById('container');
  }

  getName(txt) {
    let val = '';

    while(val == null || val.trim() === '') {
      val = prompt(`please enter ${txt}`);
    }

    val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    return val;
  }

  displayName() {
    let message = `Hello ${this.getName(this.fname)} ${this.getName(this.lname)}.`;

    alert(message);
    this.textContainer.innerHTML = message;
  }
}

window.onload = function() {
  let newPerson = new PrintName('first name', 'last name');
  newPerson.displayName();
}
