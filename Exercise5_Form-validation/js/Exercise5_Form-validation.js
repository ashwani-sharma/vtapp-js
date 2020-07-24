const maxCharLen = 50;
const errors = {
  empty: 'cant be empty',
  textLength: 'should have minimum ' + maxCharLen + ' characters',
  state: 'shoud be checked'
}

class ValidateForm {
  constructor(DOM) {
    this.options = DOM;
  }

  checkInputFields() {
    this.options.inputs.forEach(function(elem) {
      if(elem.value.trim() == '') {
        alert(`${elem.name} ${errors.empty}`);
        return false;
      }
    });

    return true;
  }

  checkTextarea() {
    let txtarea = this.options.textarea;

    if(txtarea.value.length > 0 && txtarea.value.length < maxCharLen) {
      alert(`${txtarea.name} ${errors.textLength}`);
      return false;
    }

    return true;
  }

  checkCheckBoxState() {
    let notification = this.options.checkbox;

    if(!notification.checked) {
      alert(`${notification.name} ${errors.state}`);
      return false;
    }

    return true;
  }

  formSubmission() {
    let _this = this;

    this.options.form.onsubmit = function() {
      if(_this.checkInputFields() & _this.checkTextarea() & _this.checkCheckBoxState()) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}

window.onload = function() {
  let DOM_Elements = {
    form: document.querySelector('[data-form]'),
    inputs: document.querySelectorAll('[data-input]'),
    textarea: document.querySelector("[data-input='textarea']"),
    checkbox: document.querySelector('[data-notification]')
  }

  let formValidation = new ValidateForm(DOM_Elements);
  formValidation.formSubmission();
}
