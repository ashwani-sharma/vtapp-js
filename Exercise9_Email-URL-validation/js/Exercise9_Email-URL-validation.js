class FormValidation {
  constructor(form) {
    this.form = form;
    this.regexEmail = /^[a-zA-Z0-9]*([\-\.\_]{1}?[a-zA-Z0-9]*)?[\@]{1}[a-zA-Z0-9]{2,}([\-]{1}[a-zA-Z0-9]{2,})?[\.]{1}[a-z]{2,}([\.]{1}[a-z]{2,})?$/;
    this.regexURL = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/|www\.)([a-zA-Z0-9-]{2,})\.[a-z]{2,4}(\.[a-z]{2,4})?$/;
  }

  validateEmail() {
    let email = this.form['email'];

    if(!this.regexEmail.test(email.value)) {
      alert(`please enter a valid ${email.name}`);
      return false;
    }

    return true;
  }

  validateURL() {
    let url = this.form['url'];

    if(!this.regexURL.test(url.value)) {
      alert(`please enter a valid ${url.name}`);
      return false;
    }

    return true;
  }

  bindEvents() {
    this.form.addEventListener('submit', (e) => {
      if(this.validateEmail() & this.validateURL()) {
        return true;
      }

      e.preventDefault();
    });
  }
}

window.onload = function() {
  let form = document.querySelector('[data-form]');

  let validateForm = new FormValidation(form);
  validateForm.bindEvents();
};
