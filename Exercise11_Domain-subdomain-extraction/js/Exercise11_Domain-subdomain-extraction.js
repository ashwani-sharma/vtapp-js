const regex = /^(?:http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)?(?:((?:[\w\-]{1,})?)(?:\.))*?([\w\-]{1,}\.[a-z]{2,4}(?:\.[a-z]{2,4})?)(?:\/[\w\-]{2,}(?:\.[a-z]{2,4})?)*?$/;

class DomainSubDomainMatching {
  constructor(options) {
    this.elements = options;
    this.form = this.elements.form;
    this.input = this.elements.input;
  }

  validateURL(pattern, field) {
    if(!field.value.match(pattern)) {
      alert('please enter a valid URL');
      field.focus();
      return false;
    }
    
    if(!RegExp.$1) {
      alert('Domain: ' + RegExp.$2);
    }
    else {
      alert('Sub Domain: ' + RegExp.$1 + '\nDomain: ' + RegExp.$2);
    }
  }

  formSubmission() {
    this.form.addEventListener('submit', (e) => {
      if(this.validateURL(regex, this.input)) {
        this.true;
      }

      e.preventDefault();
    });
  }
}

window.onload = function() {
  const options = {
    form: document.querySelector('[data-form]'),
    input: document.querySelector('[data-input]')
  };

  let validateForm = new DomainSubDomainMatching(options);
  validateForm.formSubmission();
};
