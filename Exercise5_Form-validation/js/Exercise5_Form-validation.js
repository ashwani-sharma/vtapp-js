const maxCharLen = 50;
const errors = {
  empty: `cant be empty`,
  textLength: `should have minimum ${maxCharLen} characters`,
  state: `shoud be checked`
}

class ValidateForm {
  constructor(options) {
    this.elements = options;
    this.form = this.elements.form;
    this.fields = Array.from(this.elements.inputs);
    this.txtarea = this.elements.textarea;
    this.notification = this.elements.checkbox;
  }

  checkInputFields() {
    this.fields.map((elem) => {
      if(elem.value.trim() == '') {
        alert(`${elem.name} ${errors.empty}`);
        return false;
      }
    });

    return true;
  }

  checkTextarea() {
    if(this.txtarea.value.length > 0 && this.txtarea.value.length < maxCharLen) {
      alert(`${this.txtarea.name} ${errors.textLength}`);
      return false;
    }

    return true;
  }

  checkCheckBoxState() {
    debugger;
    if(!this.notification.checked) {
      alert(`${this.notification.name} ${errors.state}`);
      return false;
    }

    return true;
  }

  formSubmission() {
    this.form.addEventListener('submit', (e) => {
      if(this.checkInputFields() & this.checkTextarea() & this.checkCheckBoxState()) {
        return true;
      }

      e.preventDefault();
    });
  }
}

window.onload = function() {
  const options = {
    form: document.querySelector('[data-form]'),
    inputs: document.querySelectorAll('[data-input]'),
    textarea: document.querySelector('[data-input=textarea]'),
    checkbox: document.querySelector('[data-notification]')
  }

  let formValidation = new ValidateForm(options);
  formValidation.formSubmission();
}
