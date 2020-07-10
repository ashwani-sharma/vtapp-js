class SoundManager {
  constructor(holder, sounds) {
    this.holder = holder;
    this.sounds = sounds;
    this.soundsKey = [];
  }

  createDynamicLetters() {
    let _this = this;
    let soundsBtn = this.sounds;

    soundsBtn.forEach(function(e) {
      _this.soundsKey.push(e.dataset.key);
    });

    for(let i = 0; i < soundsBtn.length; i++) {
      _this.createLettersDiv(_this.holder, _this.soundsKey, i);
    }
  }

  createLettersDiv(cont, arr, indx) {
    let createElem = document.createElement('div');
    createElem.setAttribute('class', 'key');
    createElem.setAttribute('data-key', arr[indx]);
    createElem.innerText = String.fromCharCode(arr[indx])
    holder.appendChild(createElem);
  }

  playSoundOnKeyClick() {
    this.sounds.forEach(function(e) {
      window.addEventListener('mousedown', function(k) {
        let keyCode = e.dataset.key;
        let letter = k.target.dataset.key;

        if(keyCode == letter) {
          e.play();
        }
      });
    });
  }

  playSoundOnKeyDown() {
    this.sounds.forEach(function(e) {
      window.addEventListener('keydown', function(k) {
        let keyCode = e.dataset.key;
        let letter = k.key.toUpperCase().charCodeAt();

        if(keyCode == letter) {
          e.play();
        }
      });
    });
  }

  playSoundBindEvent(evnt, targetEvnt) {
    this.sounds.forEach(function(e) {
      window.addEventListener(evnt, function(k) {
        let target = k.targetEvnt;

        if(e.dataset.key == target) {
          e.play();
        }
      });
    });
  }

  init() {
    this.createDynamicLetters();
    this.playSoundOnKeyDown();
    this.playSoundOnKeyClick();
  }
}

window.onload = function() {
  let holder = document.createElement('div');
  let sounds = document.querySelectorAll('audio');
  holder.setAttribute('id', 'holder');
  document.getElementsByTagName('body')[0].appendChild(holder);

  let soundManager = new SoundManager(holder, sounds);
  soundManager.init();
}