document.addEventListener('DOMContentLoaded', function() {
    var estanciaPrincipal = document.getElementById('estanciaPrincipal');
    var bano = document.getElementById('bano');
    var cuartoPrincipal = document.getElementById('cuartoPrincipal');
    var terraza = document.getElementById('terraza');
    var parqueadero = document.getElementById('parqueadero');
    var lavanderia = document.getElementById('lavanderia');
    var puertaparqueadero = document.getElementById('puertaparqueadero');
    var puertaprincipal = document.getElementById('puertaprincipal');
    var ventanaprincipal = document.getElementById('ventanaprincipal');
    var ventilacion = document.getElementById('ventilacion');
  
    var btn2On = document.getElementById('btn2On');
    var btn2Off = document.getElementById('btn2Off');
    var btn8On = document.getElementById('btn8On');
    var btn8Off = document.getElementById('btn8Off');
    var btn9On = document.getElementById('btn9On');
    var btn9Off = document.getElementById('btn9Off');
    var btn22On = document.getElementById('btn22On');
    var btn22Off = document.getElementById('btn22Off');
    var btn23On = document.getElementById('btn23On');
    var btn23Off = document.getElementById('btn23Off');
    var btn24On = document.getElementById('btn24On');
    var btn24Off = document.getElementById('btn24Off');
    var btn25On = document.getElementById('btn25On');
    var btn25Off = document.getElementById('btn25Off');
    var btn26On = document.getElementById('btn26On');
    var btn26Off = document.getElementById('btn26Off');
    var btn28On = document.getElementById('btn28On');
    var btn28Off = document.getElementById('btn28Off');
    var btn29On = document.getElementById('btn29On');
    var btn29Off = document.getElementById('btn29Off');
  
    btn2On.addEventListener('click', function() {
      estanciaPrincipal.style.backgroundColor = '#70a269';
      estanciaPrincipal.style.color = '#FFFFFF';
      estanciaPrincipal.querySelector('span').style.color = '#FFFFFF';
      estanciaPrincipal.querySelector('h2').style.color = '#FFFFFF';
    });
  
    btn2Off.addEventListener('click', function() {
      estanciaPrincipal.style.backgroundColor = '#F2F2F2';
      estanciaPrincipal.style.color = '#333333';
      estanciaPrincipal.querySelector('span').style.color = '#333333';
      estanciaPrincipal.querySelector('h2').style.color = '#333333';
    });
  
    btn8On.addEventListener('click', function() {
      bano.style.backgroundColor = '#70a269';
      bano.style.color = '#FFFFFF';
      bano.querySelector('span').style.color = '#FFFFFF';
      bano.querySelector('h2').style.color = '#FFFFFF';
    });
  
    btn8Off.addEventListener('click', function() {
      bano.style.backgroundColor = '#F2F2F2';
      bano.style.color = '#333333';
      bano.querySelector('span').style.color = '#333333';
      bano.querySelector('h2').style.color = '#333333';
    });
  
    btn9On.addEventListener('click', function() {
      cuartoPrincipal.style.backgroundColor = '#70a269';
      cuartoPrincipal.style.color = '#FFFFFF';
      cuartoPrincipal.querySelector('span').style.color = '#FFFFFF';
      cuartoPrincipal.querySelector('h2').style.color = '#FFFFFF';
    });
  
    btn9Off.addEventListener('click', function() {
      cuartoPrincipal.style.backgroundColor = '#F2F2F2';
      cuartoPrincipal.style.color = '#333333';
      cuartoPrincipal.querySelector('span').style.color = '#333333';
      cuartoPrincipal.querySelector('h2').style.color = '#333333';
    });
  
    btn22On.addEventListener('click', function() {
      terraza.style.backgroundColor = '#70a269';
      terraza.style.color = '#FFFFFF';
      terraza.querySelector('span').style.color = '#FFFFFF';
      terraza.querySelector('h2').style.color = '#FFFFFF';
    });
  
    btn22Off.addEventListener('click', function() {
      terraza.style.backgroundColor = '#F2F2F2';
      terraza.style.color = '#333333';
      terraza.querySelector('span').style.color = '#333333';
      terraza.querySelector('h2').style.color = '#333333';
    });
  
    btn23On.addEventListener('click', function() {
      parqueadero.style.backgroundColor = '#70a269';
      parqueadero.style.color = '#FFFFFF';
      parqueadero.querySelector('span').style.color = '#FFFFFF';
      parqueadero.querySelector('h2').style.color = '#FFFFFF';
    });
  
    btn23Off.addEventListener('click', function() {
      parqueadero.style.backgroundColor = '#F2F2F2';
      parqueadero.style.color = '#333333';
      parqueadero.querySelector('span').style.color = '#333333';
      parqueadero.querySelector('h2').style.color = '#333333';
    });
  
    btn24On.addEventListener('click', function() {
      lavanderia.style.backgroundColor = '#70a269';
      lavanderia.style.color = '#FFFFFF';
      lavanderia.querySelector('span').style.color = '#FFFFFF';
      lavanderia.querySelector('h2').style.color = '#FFFFFF';
    });
  
    btn24Off.addEventListener('click', function() {
      lavanderia.style.backgroundColor = '#F2F2F2';
      lavanderia.style.color = '#333333';
      lavanderia.querySelector('span').style.color = '#333333';
      lavanderia.querySelector('h2').style.color = '#333333';
    });
  
    btn25On.addEventListener('click', function() {
      puertaparqueadero.style.backgroundColor = '#70a269';
      puertaparqueadero.style.color = '#FFFFFF';
      puertaparqueadero.querySelector('span').style.color = '#FFFFFF';
      puertaparqueadero.querySelector('h2').style.color = '#FFFFFF';
    });
  
    btn25Off.addEventListener('click', function() {
      puertaparqueadero.style.backgroundColor = '#F2F2F2';
      puertaparqueadero.style.color = '#333333';
      puertaparqueadero.querySelector('span').style.color = '#333333';
      puertaparqueadero.querySelector('h2').style.color = '#333333';
    });
  
    btn26On.addEventListener('click', function() {
      puertaprincipal.style.backgroundColor = '#70a269';
      puertaprincipal.style.color = '#FFFFFF';
      puertaprincipal.querySelector('span').style.color = '#FFFFFF';
      puertaprincipal.querySelector('h2').style.color = '#FFFFFF';
    });
  
    btn26Off.addEventListener('click', function() {
      puertaprincipal.style.backgroundColor = '#F2F2F2';
      puertaprincipal.style.color = '#333333';
      puertaprincipal.querySelector('span').style.color = '#333333';
      puertaprincipal.querySelector('h2').style.color = '#333333';
    });
  
    btn28On.addEventListener('click', function() {
      ventanaprincipal.style.backgroundColor = '#70a269';
      ventanaprincipal.style.color = '#FFFFFF';
      ventanaprincipal.querySelector('span').style.color = '#FFFFFF';
      ventanaprincipal.querySelector('h2').style.color = '#FFFFFF';
    });
  
    btn28Off.addEventListener('click', function() {
      ventanaprincipal.style.backgroundColor = '#F2F2F2';
      ventanaprincipal.style.color = '#333333';
      ventanaprincipal.querySelector('span').style.color = '#333333';
      ventanaprincipal.querySelector('h2').style.color = '#333333';
    });
  
    btn29On.addEventListener('click', function() {
      ventilacion.style.backgroundColor = '#70a269';
      ventilacion.style.color = '#FFFFFF';
      ventilacion.querySelector('span').style.color = '#FFFFFF';
      ventilacion.querySelector('h2').style.color = '#FFFFFF';
    });
  
    btn29Off.addEventListener('click', function() {
      ventilacion.style.backgroundColor = '#F2F2F2';
      ventilacion.style.color = '#333333';
      ventilacion.querySelector('span').style.color = '#333333';
      ventilacion.querySelector('h2').style.color = '#333333';
    });
  });
  