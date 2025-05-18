let lampOnOff = document.getElementById('lamp-on-off');
let lightDark = document.getElementById('light-dark');

let lamp = document.getElementById('lamp');
let insideLamp = document.getElementById('inside-lamp');

lampOnOff.onclick = function() {
  if (lamp.style.boxShadow === 'none') {
    lamp.style.transition = '0.25s'
    lamp.style.boxShadow = '0 0 1000px rgb(208, 218, 63), 0 0 300px rgb(208, 218, 63), 0 0 500px rgba(208, 218, 63, 0.39)'
    insideLamp.style.boxShadow = '0 0 100px rgb(248, 255, 208)'
    body.style.filter = 'brightness(140%)'
  }
  else {
    lamp.style.transition = '0.25s'
    lamp.style.boxShadow = 'none'
    insideLamp.style.boxShadow = 'none'
    body.style.transition = '1s'
    body.style.filter = 'brightness(70%)'
  };
};  

let body = document.getElementById('body');

lightDark.onclick = function() {
  if (body.style.backgroundColor === 'rgb(13, 17, 23)') {
    body.style.transition = '1s'
    body.style.backgroundColor = 'rgb(155, 155, 155)'
  }
  else {
    body.style.backgroundColor = 'rgb(13, 17, 23)'
    body.style.transition = '1s'
  };
};