const NUMERIC_PATTERN = /^[\-\+]?[0-9]*(?:\.[0-9]*)?\d$/;

class NumericValidation {
  constructor(options) {
    this.elements = options;
    this.form = this.elements.form;
    this.numberField = this.elements.number;
    this.result = this.elements.result;
  }

  checkInputValidation() {
    if(!NUMERIC_PATTERN.test(this.numberField.value)) {
      alert('invalid input');
      this.result.value = 'false';
      this.numberField.focus();
      return false;
    }
    else {
      this.result.value = 'true';
      return true;
    }
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      if(this.checkInputValidation()) {
        return true;
      }

      e.preventDefault();
    });
  }
}

window.onload = function() {
  let options = {
    form: document.querySelector('[data-id=form]'),
    number: document.querySelector('[data-input=number]'),
    result: document.querySelector('[data-input=result]')
  };

  let validateForm = new NumericValidation(options);
  validateForm.init();
};
