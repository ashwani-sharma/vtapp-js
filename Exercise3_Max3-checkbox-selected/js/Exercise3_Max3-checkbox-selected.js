const maxSelection = 3;

class CheckboxManager {
  constructor(daysCheckBoxes, noneCheckBox) {
    this.daysCheckBoxes = daysCheckBoxes;
    this.noneCheckBox = noneCheckBox;
    this.daysArray = [];
  }

  saveSelectedCheckBoxes() {
    let checkboxes = this.daysCheckBoxes;
    let daysCollection = this.daysArray;

    for(let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener('click', () => {
        let item = checkboxes[i];
        let val = item.value;

        if(item.checked) {
          daysCollection.push(val);
          daysCollection.length > maxSelection ? this.alertDaysSelection(item) : '';
          this.noneCheckBox.checked = false;
        }
        else if(!item.checked) {
          daysCollection.splice(daysCollection.indexOf(val), 1);
        }
      });
    }
  }

  alertDaysSelection(self) {
    let arr = this.daysArray;

    alert('Only 3 days can be selected. You have already selected ' + arr[0] +', ' + arr[1] +' and ' + arr[2]);
    self.checked = false;
    arr.pop();
  }

  noneCheckBoxEvent() {
    let noneCheck = this.noneCheckBox;

    noneCheck.addEventListener('click', () => {
      if(noneCheck.checked) {
        this.uncheckAllSelectedCheckBoxes();
      }
      else {
        noneCheck.checked = false;
      }
    });
  }

  uncheckAllSelectedCheckBoxes() {
    this.daysCheckBoxes.forEach(function(elem) {
      if(elem.checked) {
        elem.checked = false;
      }
    });

    this.checked = true;
    this.daysArray.length = 0;
  }

  init() {
    this.saveSelectedCheckBoxes();
    this.noneCheckBoxEvent();
  }
}

window.onload = function() {
  let daysCheckBoxes = document.querySelectorAll('[data-name]');
  let noneCheckBox = document.getElementById('none');

  let checkboxManager = new CheckboxManager(daysCheckBoxes, noneCheckBox);
  checkboxManager.init();
}
