class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  comapre(person) {
    if(this.age > person.age) {
      document.write(`${this.name} is older than ${person.name}`);
    }
    else if(this.age < person.age) {
      document.write(`${person.name} is older than ${this.name}`);
    }
    else {
      document.write(`${this.name} and ${person.name} both are of same age`);
    }
  }
}

window.onload = function() {
  var user1 = new User('John', 36);
  var user2 = new User('Mary', 32);

  user1.comapre(user2);
}