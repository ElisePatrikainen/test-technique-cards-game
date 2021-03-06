// nb: there is a 0.01% chance less or so to return the 'max' number
const generateRandomNumber = (max) =>
  Math.trunc(Math.random() * (max + 0.9999));

export const pickIntegers = (numberOfIntegers, max) => {
  const set = [];
  for (let i = 0; i < numberOfIntegers; i++) {
    let number;
    // might be a risk for an infinite loop, in particular with extrem values ?
    // stop the execution after some time ?
    while (!number || set.findIndex((n) => n === number) !== -1) {
      number = generateRandomNumber(max);
    }
    set.push(number);
  }
  return set;
};

// todo: add validators?
// todo: naming?
export const pickCards = (integersList, orderedFullSet) =>
  integersList.map((integer) => orderedFullSet[integer - 1]);

export const createUnordonnedSet = (cardsSetLength, orderedFullSet) => {
  const integersList = pickIntegers(cardsSetLength, 52);
  return pickCards(integersList, orderedFullSet);
};
