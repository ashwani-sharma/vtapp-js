class MoveValues {
  constructor(buttons, selectPrimary, selectSecondary) {
    this.buttons = buttons;
    this.selectPrimary = selectPrimary;
    this.selectSecondary = selectSecondary;
  }

  checkSelectedOptions(src, dest) {
    let options = Array.from(src.selectedOptions);

    options.forEach(function(option) {
      dest.add(option);
    });
  }

  bindButtonEvents(btn, add, remove) {
    btn.addEventListener('click', () => {
      if(btn.dataset.button == add) {
        this.checkSelectedOptions(this.selectPrimary, this.selectSecondary);
      }
      else if(btn.dataset.button == remove) {
        this.checkSelectedOptions(this.selectSecondary, this.selectPrimary);
      }
    });
  }

  moveOptions(add, remove) {
    this.buttons.forEach((elem) => {
      this.bindButtonEvents(elem, add, remove);
    });
  }
}

window.onload = function() {
  let buttons = document.querySelectorAll('[data-button]');
  let selectPrimary = document.getElementById('primary');
  let selectSecondary = document.getElementById('secondary');

  let changeValues = new MoveValues(buttons, selectPrimary, selectSecondary);
  changeValues.moveOptions('add', 'remove');
}
