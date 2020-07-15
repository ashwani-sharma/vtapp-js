class Catagories {
  constructor(parentInput) {
    this.parentInput = parentInput;
  }

  bindEventWithParentInput() {    
    this.parentInput.forEach((checkBox) => {
      checkBox.addEventListener('click', () => {
        checkBox.checked ? this.childElementsWithContainer(checkBox, true, 'block') : this.childElementsWithContainer(checkBox, false, 'none');
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
