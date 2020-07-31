const PATTERN_URL = /^(?:http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)?(?:(?<sub>(?:[a-zA-Z0-9\-]*)?)(?:\.))*?(?<domain>[\a-zA-Z0-9\-]*\.[a-z]{2,4}(?:\.[a-z]{2,4})?)(?:\/[\w\-]{2,}(?:\.[a-z]{2,4})?)*?$/;

class MatchDomain {
  constructor(options) {
    this.elements = options;
    this.form = this.elements.form;
    this.input = this.elements.input;
  }

  validateURL() {
    let groupName = this.input.value.match(PATTERN_URL);

    if(!groupName) {
      alert('please enter a valid URL');
      this.input.focus();
      return false;
    }
    
    if(groupName.groups.sub === undefined) {
      alert('Domain: ' + groupName.groups.domain);
    }
    else {
      alert('Sub Domain: ' + groupName.groups.sub + '\nDomain: ' + groupName.groups.domain);
    }
  }

  formSubmission() {
    this.form.addEventListener('submit', (e) => {
      if(this.validateURL()) {
        return true;
      }

      e.preventDefault();
    });
  }
}

window.onload = function() {
  let options = {
    form: document.querySelector('[data-form]'),
    input: document.querySelector('[data-input]')
  };

  let validateForm = new MatchDomain(options);
  validateForm.formSubmission();
};