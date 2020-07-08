class Clock {
  constructor(button) {
    this.button = button;
  }

  setTime() {
    var date = new Date();

    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    }
  }

  setHour() {
    let hrs = this.setTime().hours;

    if(hrs == 0) {
      hrs = 12;
    }
    else if(hrs > 12) {
      hrs = hrs - 12;
    }

    return hrs;
  }

  init() {
    this.button.forEach(element => {
      element.addEventListener('click', () => {
        this.showTime();
      });
    });
  }
}

class AnalogClock extends Clock {
  showTime() {
    let hour = this.setHour();
    let hourHand = hour * 30;
    let minuteHand = this.setTime().minutes * 6;
    let secondHand = this.setTime().seconds * 6;
    let showTime = ('Hour hand at ' + hourHand + 'deg \n' + 'Minute hand at ' + minuteHand + 'deg \n' + 'Second hand at ' + secondHand + 'deg');

    alert(showTime);
  }
}

class DigitalClock extends Clock {
  showTime() {
    let hour = this.setHour();
    let currentTime = this.setTime();
    let meridiem = currentTime.hours > 12 ? 'PM' : 'AM';
    let showTime = `${hour} : ${currentTime.minutes} : ${currentTime.seconds} ${meridiem}`;

    alert(showTime);
  }
}

window.onload = function () {
  let analogButton = document.querySelectorAll('[data-time="analog"]');
  let digitalButton = document.querySelectorAll('[data-time="digital"]');

  let analogClock = new AnalogClock(analogButton);
  let digitalClock = new DigitalClock(digitalButton);

  analogClock.init();
  digitalClock.init();
}