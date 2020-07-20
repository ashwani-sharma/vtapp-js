const maxCharLen = 50;
const errors = {
  empty: 'cant be empty',
  textLength: 'should have minimum ' + maxCharLen + ' characters',
  state: 'shoud be checked'
}

class ValidateForm {
  constructor(form, inputs, textarea, checkbox) {
    this.form = form;
    this.inputs = inputs;
    this.textarea = textarea;
    this.checkbox = checkbox;
  }

  checkInputFields() {
    this.inputs.forEach(function(elem) {
      if(elem.value.trim() == '') {
        alert(`${elem.name} ${errors.empty}`);
        return false;
      }
    });

    return true;
  }

  checkTextarea() {
    let txtarea = this.textarea;

    if(txtarea.value.length > 0 && txtarea.value.length < maxCharLen) {
      alert(`${txtarea.name} ${errors.textLength}`);
      return false;
    }

    return true;
  }

  checkCheckBoxState() {
    let notification = this.checkbox;

    if(!notification.checked) {
      alert(`${notification.name} ${errors.state}`);
      return false;
    }

    return true;
  }

  formSubmission() {
    let _this = this;

    this.form.onsubmit = function() {
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
  let form = document.getElementById('user-form');
  let inputs = document.querySelectorAll('[data-input]');
  let textarea = document.getElementById('about');
  let checkbox = document.getElementById('notification');

  let formValidation = new ValidateForm(form, inputs, textarea, checkbox);
  formValidation.formSubmission();
}
