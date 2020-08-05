const PATTERN_URL = /^(?:http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)?(?:(?<sub>(?:[\w\-]*)?)(?:\.))?(?<domain>[\w\-]{1,}\.[a-z]{2,}(?:\.[a-z]{2,})?)(?:\/[\w\-\.\%\=\&\?\#]*)*?$/;

class Address {
  constructor(options) {
    this.elements = options;
    this.form = this.elements.form;
    this.input = this.elements.input;
  }

  validateAndMatchURL() {
    let groupName = this.input.value.match(PATTERN_URL);

    if(!groupName) {
      alert('please enter a valid URL');
      this.input.focus();
      return false;
    }

    this.urlExtraction(groupName);
  }

  urlExtraction(url) {
    if(url.groups.sub === undefined) {
      alert('Domain: ' + url.groups.domain);
    }
    else {
      alert('Sub Domain: ' + url.groups.sub + '\nDomain: ' + url.groups.domain);
    }
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      if(this.validateAndMatchURL()) {
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

  let address = new Address(options);
  address.init();
};
