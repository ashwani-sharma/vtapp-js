class CheckboxManager {
  constructor(maxSelection, daysCheckBoxes, noneCheckBox) {
    this.maxSelection = maxSelection;
    this.daysCheckBoxes = daysCheckBoxes;
    this.noneCheckBox = noneCheckBox;
    this.daysArray = [];
  }

  saveSelectedCheckBoxes() {
    let _this = this;
    let checkboxes = this.daysCheckBoxes;
    let daysCollection = this.daysArray;

    for(let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener('click', function() {
        let val = this.value;
        let indx = daysCollection.indexOf(val);

        if(this.checked) {
          daysCollection.push(val);
          _this.alertDaysSelection(daysCollection, _this.maxSelection, this);
          _this.noneCheckBox.checked = false;
        }
        else if(!this.checked) {
          daysCollection.splice(indx, 1);
        }
      });
    }
  }

  alertDaysSelection(arr, maxSelection, self) {
    if(arr.length > maxSelection) {
      alert('Only 3 days can be selected. You have already selected ' + arr[0] +', ' + arr[1] +' and ' + arr[2]);
      self.checked = false;
      arr.pop();
    }
  }

  noneCheckBoxEvent() {
    let _this = this;

    this.noneCheckBox.addEventListener('click', function() {
      if(this.checked) {
        _this.uncheckAllSelectedCheckBoxes(_this.daysCheckBoxes, _this.daysArray);
      }
      else {
        this.checked = false;
      }
    });
  }

  uncheckAllSelectedCheckBoxes(inputs, arr) {
    inputs.forEach(function(elem) {
      if(elem.checked) {
        elem.checked = false;
      }
    });

    this.checked = true;
    arr.length = 0;
  }

  init() {
    this.saveSelectedCheckBoxes();
    this.noneCheckBoxEvent();
  }
}

window.onload = function() {
  let daysCheckBoxes = document.querySelectorAll('[data-name]');
  let noneCheckBox = document.getElementById('none');

  let checkboxManager = new CheckboxManager(3, daysCheckBoxes, noneCheckBox);
  checkboxManager.init();
}