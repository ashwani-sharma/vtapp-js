class MatchWebURL {
  constructor(form) {
    this.form = form;
    this.pattern = /^(?:http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)?(?:(?<sub>(?:[\w\-]*)?)(?:\.))?(?<domain>[\w\-]{1,}\.[a-z]{2,}(?:\.[a-z]{2,})?)(?:\/[\w\-\.\%\=\&\?\#]*)*?$/;
  }

  validateAndMatchURL() {
    let input = this.form.url;
    let groupName = input.value.match(this.pattern);

    if(!groupName) {
      alert('please enter a valid URL');
      input.focus();
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
      this.validateAndMatchURL();
      e.preventDefault();
    });
  }
}

window.onload = function() {
  let form = document.querySelector('[data-form]');

  let address = new MatchWebURL(form);
  address.init();
};
