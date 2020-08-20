class FormValidation {
  constructor(form) {
    this.form = form;
    this.regexEmail = /^[a-zA-Z0-9]*([\-\.\_]{1}?[a-zA-Z0-9]*)?[\@]{1}[a-zA-Z0-9]{2,}([\-]{1}[a-zA-Z0-9]{2,})?[\.]{1}[a-z]{2,}([\.]{1}[a-z]{2,})?$/;
    this.regexURL = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/|www\.)([a-zA-Z0-9-]{2,})\.[a-z]{2,4}(\.[a-z]{2,4})?$/;
  }

  validateEmail() {
    let email = this.form.email;

    if(!this.regexEmail.test(email.value)) {
      alert(`please enter a valid ${email.name}`);
      event.preventDefault();
    }
  }

  validateURL() {
    let url = this.form.url;

    if(!this.regexURL.test(url.value)) {
      alert(`please enter a valid ${url.name}`);
      event.preventDefault();
    }
  }

  bindEvents() {
    this.form.addEventListener('submit', () => {
      this.validateEmail();
      this.validateURL();
    });
  }
}

window.onload = function() {
  let form = document.querySelector('[data-form]');

  let validateForm = new FormValidation(form);
  validateForm.bindEvents();
};
