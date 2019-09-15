// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

function writeCards(names, event) {
  let notes = []
  for (let i = 0; i < names.length; i++) {
    notes.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return notes
}

function countdown(num) {
  while (num > 0) {
    console.log(num);
    num -= 1;
  }
  console.log(num);
}
