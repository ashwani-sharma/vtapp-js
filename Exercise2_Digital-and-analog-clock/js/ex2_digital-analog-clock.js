class Clock {
  constructor(hours, minutes, seconds, meridiem) {
    let date = new Date();

    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.meridiem = 'AM';
  }

  setHourAndMeridiem() {
    let hrs = this.hours;

    if(hrs == 0) {
      hrs = 12;
    }
    else if(hrs > 12) {
      this.meridiem = 'PM';
      hrs = hrs - 12;
    }

    return [hrs, this.meridiem];
  }
}

class AnalogClock extends Clock {
  constructor(minutes, seconds) {
    super(minutes, seconds);
  }

  showAnalogTime() {
    let hour = this.setHourAndMeridiem()[0];
    let hourHand = hour * 30;
    let minuteHand = this.minutes * 6;
    let secondHand = this.seconds * 6;
    let showTime = ('Hour hand at ' + hourHand + 'deg \n' + 'Minute hand at ' + minuteHand + 'deg \n' + 'Second hand at ' + secondHand + 'deg');

    alert(showTime);
  }
}

class DigitalClock extends Clock {
  constructor(minutes, seconds) {
    super(minutes, seconds);
  }

  showDigitalTime() {
    let hour = this.setHourAndMeridiem()[0];
    let mrdns = this.setHourAndMeridiem()[1];
    let showTime = `${hour} : ${this.minutes} : ${this.seconds} ${mrdns}`;

    alert(showTime);
  }
}

window.onload = function () {
  let btnAnalog = document.getElementById('analog');
  let btnDigital = document.getElementById('digital');

  let analogClock = new AnalogClock();
  let digitalClock = new DigitalClock();

  btnAnalog.addEventListener('click', function() {
    analogClock.showAnalogTime();
  });

  btnDigital.addEventListener('click', function() {
    digitalClock.showDigitalTime();
  });
}