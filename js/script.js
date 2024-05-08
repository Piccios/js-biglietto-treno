
// Creo due variabili per la distanza e l'età del cliente

let customerTrip = parseInt( prompt ('How many chilomiters will your trip take?'));

let customerAge = parseInt (prompt ('How old are you?'));

console.log(customerTrip);
console.log(customerAge);

// Setto il costo del biglietto per km

let ticketPrice = (customerTrip * 0.276)


// Setto uno sconto del 21% al prezzo del biglietto se il cliente ha meno di 18 anni

if (customerAge < 18) {
    ticketPrice = ticketPrice - (ticketPrice * 0.21);
}

// Setto uno sconto del 65% al prezzo del biglietto se il cliente ha piu' di 65 anni

if (customerAge > 65) {
    ticketPrice = ticketPrice - (ticketPrice * 0.65);
}

let roundedPrice = Math.round(ticketPrice * 100) / 100;

console.log(roundedPrice);


document.getElementById('Price').innerHTML = roundedPrice;

