class PrintName {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.textContainer = document.querySelector('[data-id]');
  }

  getName(txt) {
    let val = '';

    while(val === null || val.trim() === '') {
      val = prompt(`please enter ${txt}`);
    }

    this.capitalizeName(val);
    return val;
  }

  capitalizeName(vals) {
    vals = vals.charAt(0).toUpperCase() + vals.slice(1).toLowerCase();
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
