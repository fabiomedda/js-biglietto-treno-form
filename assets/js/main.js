document.getElementById("card_biglietto").style.opacity = "0";
document.getElementById("card_biglietto").style.transition = "0.5s";


var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");

btnGenera.addEventListener("click", function(){

  // prelevo dati utente
  var nomeCognome = document.getElementById("nome_cognome").value;
  var km = document.getElementById("km").value;
  var fasciaEtà = document.getElementById("fascia_età").value;

  // costo biglietto
  var prezzoBiglietto = km * 0.21;
  var sconto;
  var offerta = "Standard ticket";

  // fascia età passeggero
  if (isNaN(km)){
    alert("Devi inserire dei numeri");
  } else if (fasciaEtà == "minorenne") {
    sconto = (prezzoBiglietto * 20) / 100;
    prezzoBiglietto = prezzoBiglietto - sconto;
    offerta = "Sconto minorenni";
  } else if (fasciaEtà == "over_65") {
    sconto = (prezzoBiglietto * 40) / 100;
    prezzoBiglietto = prezzoBiglietto - sconto;
    offerta = "Sconto silver";
  }

  // Genera numero carrozza
  var numeroCarrozza = Math.ceil(Math.random() *9);

  // Genera codice cp
  var codiceCp = Math.floor( Math.random() * (100000 - 90000) ) +90000;

  // Inserire elementi del biglietto
  var elementoNomePasseggero = document.getElementById('nome_passeggero');
  var elementoOfferta = document.getElementById('offerta');
  var elementoCarrozza = document.getElementById('carrozza');
  var elementoCodiceCp = document.getElementById('codice_cp');
  var elementoCostoBiglietto = document.getElementById('costo_biglietto');

  // Arrotondamento prezzo
  prezzoBiglietto = prezzoBiglietto.toFixed(2);

  // Inserire dati nel biglietto
  elementoNomePasseggero.innerHTML = nomeCognome;
  elementoOfferta.innerHTML = offerta;
  elementoCarrozza.innerHTML = numeroCarrozza;
  elementoCodiceCp.innerHTML = codiceCp;
  elementoCostoBiglietto.innerHTML = "€ " + prezzoBiglietto;


  document.getElementById("card_biglietto").style.opacity = "1";
} );

btnAnnulla.addEventListener("click", function(){

  var nomeCognome = document.getElementById("nome_cognome");
  var km = document.getElementById("km");
  var fasciaEtà = document.getElementById("fascia_età");

  nomeCognome.value = "";
  km.value = "";
  fasciaEtà.value = "minorenne";

  document.getElementById("card_biglietto").style.opacity = "0";

});
