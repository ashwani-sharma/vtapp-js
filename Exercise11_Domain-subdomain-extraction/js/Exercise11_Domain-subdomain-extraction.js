const REGEX = /^(?:http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)?(?:(?<sub>(?:[\w\-]{1,})?)(?:\.))*?(?<domain>[\w\-]{1,}\.[a-z]{2,4}(?:\.[a-z]{2,4})?)(?:\/[\w\-]{2,}(?:\.[a-z]{2,4})?)*?$/;

class MatchDomain {
  constructor(options) {
    this.elements = options;
    this.form = this.elements.form;
    this.input = this.elements.input;
  }

  validateURL(pattern, field) {
    let groupName = field.value.match(pattern);

    if(!groupName) {
      alert('please enter a valid URL');
      field.focus();
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
      if(this.validateURL(REGEX, this.input)) {
        return true;
      }

      e.preventDefault();
    });
  }
}

window.onload = function() {
  const OPTIONS = {
    form: document.querySelector('[data-form]'),
    input: document.querySelector('[data-input]')
  };

  let validateForm = new MatchDomain(OPTIONS);
  validateForm.formSubmission();
};
