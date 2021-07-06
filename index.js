// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) { 
    console.log( `I'm ${age} years old. Happy birthday to me!`);
    debugger;
}            
*/

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

//const cards = ['surprise'];
//const thankYouCards = [ 'Lisa', 'Kaitlin', 'Jan' ];
// let thankYouCards = {...cards};
function writeCards(cards, giftType) {
  let thankYouCards = [];  
  for (let i = 0; i < cards.length; i++) {
    let cardMessage = `Thank you, ${cards[i]}, for the wonderful ${giftType} gift!`; 
    thankYouCards.push(cardMessage);  
  }
  return thankYouCards;
}

function countDown(number) {
  let i = number;
  while (i >= 0) {
    console.log(i--);
  }
}