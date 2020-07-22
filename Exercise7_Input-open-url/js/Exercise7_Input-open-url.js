let url = '';
let protocol = 'http://';

class WindowLocation {
  getEnteredLocation() {
    while(url == null || url.trim().length < 1) {
      url = prompt('please enter an URL', '');

      if(url === '') {
        alert('field cant be empty');
      }
    }

    return url;
  }

  windowOptions(link) {
    window.open(link, 'myWindow', 'width=400, height=450, menubar=0, scrollbar=0, titlebar=0, toolbar=0');
  }

  openWindow() {
    if(this.getEnteredLocation().includes(protocol)) {
      this.windowOptions(url);
    }
    else {
      this.windowOptions(protocol + url);
    }
  }
}

window.onload = function() {
  let newWindow = new WindowLocation();
  newWindow.openWindow();
}
