import qoutesArray from "./data/qoutes.js";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let qoute = {};
const getQuote = () => {
  let idx = getRandomInt(0, qoutesArray.length - 1);
  qoute.text = qoutesArray[idx].text;
  qoute.author = qoutesArray[idx].from;
  return qoute;
};

export { getQuote };
