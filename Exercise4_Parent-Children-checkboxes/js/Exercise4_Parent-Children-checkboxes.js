class Catagories {
  constructor(parentInput) {
    this.parentInput = parentInput;
  }

  bindEventWithParentInput() {
    let _this = this;
    
    this.parentInput.forEach(function(e) {
      e.addEventListener('click', function() {
        this.checked ? _this.childElementsWithContainer(this, true, 'block') : _this.childElementsWithContainer(this, false, 'none');
      });
    });
  }

  childElementsWithContainer(elem, state, visibility) {
    let childContainer = elem.parentElement.getElementsByTagName('ul')[0];

    childContainer.style.display = visibility;
    childContainer.querySelectorAll('[data-child]').forEach(e => e.checked = state);
    elem.scrollIntoView(state);
  }
}

window.onload = function() {
  let parentCheckBox = document.querySelectorAll('[data-parent]');

  const categories = new Catagories(parentCheckBox);
  categories.bindEventWithParentInput();
}
