var btn2On = document.getElementById("btn2On");
var btn2Off = document.getElementById("btn2Off");
var btn8On = document.getElementById("btn8On");
var btn8Off = document.getElementById("btn8Off");
var btn9On = document.getElementById("btn9On");
var btn9Off = document.getElementById("btn9Off");
var btn22On = document.getElementById("btn22On");
var btn22Off = document.getElementById("btn22Off");
var btn23On = document.getElementById("btn23On");
var btn23Off = document.getElementById("btn23Off");
var btn24On = document.getElementById("btn24On");
var btn24Off = document.getElementById("btn24Off");
var btn25On = document.getElementById("btn25On");
var btn25Off = document.getElementById("btn25Off");
var btn26On = document.getElementById("btn26On");
var btn26Off = document.getElementById("btn26Off");
var btn28On = document.getElementById("btn28On");
var btn28Off = document.getElementById("btn28Off");
var btn29On = document.getElementById("btn29On");
var btn29Off = document.getElementById("btn29Off");

var state2 = document.getElementById("state2");
var state8 = document.getElementById("state8");
var state9 = document.getElementById("state9");
var state22 = document.getElementById("state22");
var state23 = document.getElementById("state23");
var state24 = document.getElementById("state24");
var state25 = document.getElementById("state25");
var state26 = document.getElementById("state26");
var state28 = document.getElementById("state28");
var state29 = document.getElementById("state29");

// Obtener el estado actual al cargar la página
window.addEventListener("DOMContentLoaded", function() {
  getState(2);
  getState(8);
  getState(9);
  getState(22);
  getState(23);
  getState(24);
  getState(25);
  getState(26);
  getState(28);
  getState(29);
});

btn2On.addEventListener("click", function() {
  setState(2, "on");
});

btn2Off.addEventListener("click", function() {
  setState(2, "off");
});

btn8On.addEventListener("click", function() {
  setState(8, "on");
});

btn8Off.addEventListener("click", function() {
  setState(8, "off");
});

btn9On.addEventListener("click", function() {
  setState(9, "on");
});

btn9Off.addEventListener("click", function() {
  setState(9, "off");
});

btn22On.addEventListener("click", function() {
  setState(22, "on");
});

btn22Off.addEventListener("click", function() {
  setState(22, "off");
});

btn23On.addEventListener("click", function() {
  setState(23, "on");
});

btn23Off.addEventListener("click", function() {
  setState(23, "off");
});

btn24On.addEventListener("click", function() {
  setState(24, "on");
});

btn24Off.addEventListener("click", function() {
  setState(24, "off");
});

btn25On.addEventListener("click", function() {
  setState(25, "on");
});

btn25Off.addEventListener("click", function() {
  setState(25, "off");
});

btn26On.addEventListener("click", function() {
  setState(26, "on");
});

btn26Off.addEventListener("click", function() {
  setState(26, "off");
});

btn28On.addEventListener("click", function() {
  setState(28, "on");
});

btn28Off.addEventListener("click", function() {
  setState(28, "off");
});

btn29On.addEventListener("click", function() {
  setState(29, "on");
});

btn29Off.addEventListener("click", function() {
  setState(29, "off");
});

function getState(gpio) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://192.168.18.87/" + gpio + "/state", true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      updateState(gpio, response.state);
    }
  };
  xhr.send();
}

function setState(gpio, state) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://192.168.18.87/" + gpio + "/" + state, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      updateState(gpio, state);
    }
  };
  xhr.send();
}

function updateState(gpio, state) {
  if (gpio === 2) {
    state2.textContent = state;
  } else if (gpio === 8) {
    state8.textContent = state;
  } else if (gpio === 9) {
    state9.textContent = state;
  } else if (gpio === 22) {
    state22.textContent = state;
  } else if (gpio === 23) {
    state23.textContent = state;
  } else if (gpio === 24) {
    state24.textContent = state;
  } else if (gpio === 25) {
    state25.textContent = state;
  } else if (gpio === 26) {
    state26.textContent = state;
  } else if (gpio === 28) {
    state28.textContent = state;
  } else if (gpio === 29) {
    state29.textContent = state;
  }
}
