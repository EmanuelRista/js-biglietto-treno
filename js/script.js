var travel = parseInt(prompt('Per quanti Km devi viaggiare?'));
var ages = parseInt(prompt('Quanti anni hai?'));
var charges;


if ((!isNaN(travel)) && (!isNaN(ages)) && (travel > 0) && (ages > 0)) {
  if ((ages < 18) && (ages > 0)) {
    charges = (travel * 0.21) * 0.8;
  } else if ((ages >= 18) && (ages < 65)) {
    charges = (travel * 0.21);
  } else if (ages >= 65) {
    charges = (travel * 0.21) * 0.6;
  }
  document.getElementById("travel").innerHTML = "Dovendo viaggiare per " + travel + " km la tariffa per il tuo biglietto &egrave ";
  document.getElementById("charges").innerHTML = Math.round(charges * 100) / 100 + " euro";
} else if ((!isNaN(ages)) && (ages > 0)) {
  document.getElementById("travel").innerHTML = "Il numero di km inserito non è valido";
} else {
  document.getElementById("travel").innerHTML = "L'età inserita non è valida";
}
