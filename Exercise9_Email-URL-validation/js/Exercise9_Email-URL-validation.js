const regexEmail = /^[a-zA-Z0-9\._-]{2,}@[a-z0-9]{2,}\.[a-z]{2,5}(\.[a-z]{2,4})?$/;
const regexUrl = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/|www\.)([a-zA-Z0-9-]{2,})\.[a-z]{2,4}(\.[a-z]{2,4})?$/;

class FormValidation {
  constructor(elements) {
    this.options = elements;
    this.form = this.options.form;
    this.emailInput = this.options.inputEmail;
    this.urlInput = this.options.inputUrl;
  }

  checkInputsValidation(pattern, input) {
    if(!pattern.test(input.value)) {
      alert(`please enter a valid ${input.name}`);
      input.focus();
      return false;
    }

    return true;
  }

  formSubmission() {
    this.form.addEventListener('submit', (e) => {
      if(this.checkInputsValidation(regexEmail, this.emailInput) && this.checkInputsValidation(regexUrl, this.urlInput)) {
        return true;
      }

      e.preventDefault();
    });
  }
};

window.onload = function() {
  const options = {
    form: document.querySelector('[data-form]'),
    inputEmail: document.querySelector('[data-input=email]'),
    inputUrl: document.querySelector('[data-input=url]'),
  }

  let validateForm = new FormValidation(options);
  validateForm.formSubmission();
};
