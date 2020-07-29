const regex = /^[\-\+]?[0-9]{1,}(\.[0-9]{0,})?\d$/;

class NumericValidation {
  constructor(options) {
    this.elements = options;
    this.form = this.elements.form;
    this.numberField = this.elements.number;
    this.result = this.elements.result;
  }

  checkInputValidation(pattern, input, message) {
    if(!pattern.test(input.value)) {
      alert('invalid input');
      message.value = 'false';
      input.focus();
      return false;
    }
    else {
      message.value = 'true';
      return true;
    }
  }

  formSubmission() {
    this.form.addEventListener('submit', (e) => {
      if(this.checkInputValidation(regex, this.numberField, this.result)) {
        return true;
      }

      e.preventDefault();
    });
  }
}

window.onload = function() {
  const options = {
    form: document.querySelector('[data-id=form]'),
    number: document.querySelector('[data-input=number]'),
    result: document.querySelector('[data-input=result]')
  };

  let validateForm = new NumericValidation(options);
  validateForm.formSubmission();
};
