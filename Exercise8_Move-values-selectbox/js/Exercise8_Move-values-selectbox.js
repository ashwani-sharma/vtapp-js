/* jshint esversion: 6 */

class MoveValues {
  constructor(DOM) {
    this.elements = DOM;
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
        this.moveSelectedOptions(this.elements.selectPrimary, this.elements.selectSecondary);
      }
      else if(btn.dataset.button == 'remove') {
        this.moveSelectedOptions(this.elements.selectSecondary, this.elements.selectPrimary);
      }
    });
  }

  init() {
    this.elements.buttons.forEach((elem) => {
      this.bindButtonEvents(elem);
    });
  }
}

window.onload = function() {
  let DOM_Elements = {
    buttons: document.querySelectorAll("[data-button]"),
    selectPrimary: document.querySelector("[data-select='primary']"),
    selectSecondary: document.querySelector("[data-select='secondary']")
  };

  let changeValues = new MoveValues(DOM_Elements);
  changeValues.init();
};
