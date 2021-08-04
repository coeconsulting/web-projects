
let myImage = document.querySelector('img');

    myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/12a.jpg') {
        myImage.setAttribute('src','images/sunset.jpg');
        } else {
        myImage.setAttribute('src','images/12a.jpg');
        }

 // Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Sail in Stockholm archipelago, ' + myName;
    }
  }
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Sail in Stockholm archipelago, ' + storedName;
    }

myButton.onclick = function() {
    setUserName();
    }
    }