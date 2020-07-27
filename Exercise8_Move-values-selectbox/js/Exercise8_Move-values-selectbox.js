/* jshint esversion: 6 */

class MoveValues {
  constructor(options) {
    this.elements = options;
    this.btns = this.elements.buttons;
    this.selectSource = this.elements.selectPrimary;
    this.selectDestination = this.elements.selectSecondary;
  }

  moveSelectedOptions(src, dest) {
    let optionsSelected = Array.from(src.selectedOptions);

    optionsSelected.forEach(function(option) {
      dest.add(option);
    });
  }

  bindButtonEvents(btn) {
    btn.addEventListener('click', () => {
      if(btn.dataset.button == 'add') {
        this.moveSelectedOptions(this.selectSource, this.selectDestination);
      }
      else if(btn.dataset.button == 'remove') {
        this.moveSelectedOptions(this.selectDestination, this.selectSource);
      }
    });
  }

  init() {
    this.btns.forEach((elem) => {
      this.bindButtonEvents(elem);
    });
  }
}

window.onload = function() {
  let options = {
    buttons: document.querySelectorAll("[data-button]"),
    selectPrimary: document.querySelector("[data-select='primary']"),
    selectSecondary: document.querySelector("[data-select='secondary']")
  };

  let changeValues = new MoveValues(options);
  changeValues.init();
};
