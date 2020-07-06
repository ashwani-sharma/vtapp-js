class Clock {
  constructor(button) {
    this.button = document.querySelectorAll('[data-time]');
  }

  setTime() {
    var date = new Date();

    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      meridiem: 'AM'
    }
  }

  setHourAndMeridiem() {
    let hrs = this.setTime().hours;
    let mrdm = this.setTime().meridiem;

    if(hrs == 0) {
      hrs = 12;
    }
    else if(hrs > 12) {
      mrdm = 'PM';
      hrs = hrs - 12;
    }

    return [hrs, mrdm];
  }
}

class AnalogClock extends Clock {
  showAnalogTime() {
    let hour = this.setHourAndMeridiem()[0];
    let hourHand = hour * 30;
    let minuteHand = this.setTime().minutes * 6;
    let secondHand = this.setTime().seconds * 6;
    let showTime = ('Hour hand at ' + hourHand + 'deg \n' + 'Minute hand at ' + minuteHand + 'deg \n' + 'Second hand at ' + secondHand + 'deg');

    alert(showTime);
  }

  init() {
    let _this = this;
    let btn = this.button;

    btn.forEach(function (element) {
      element.addEventListener('click', function() {
        if(this.dataset.time == 'analog') {
          _this.showAnalogTime();
        }
      });
    });
  }
}

class DigitalClock extends Clock {
  showDigitalTime() {
    let hour = this.setHourAndMeridiem()[0];
    let mrdns = this.setHourAndMeridiem()[1];
    let showTime = `${hour} : ${this.setTime().minutes} : ${this.setTime().seconds} ${mrdns}`;

    alert(showTime);
  }

  init() {
    let _this = this;
    let btn = this.button;

    btn.forEach(function (element) {
      element.addEventListener('click', function() {
        if(this.dataset.time == 'digital') {
          _this.showDigitalTime();
        }
      });
    });
  }
}

window.onload = function () {
  let analogClock = new AnalogClock();
  let digitalClock = new DigitalClock();

  analogClock.init();
  digitalClock.init();
}