let span = document.querySelector(".quote");
let div = document.querySelector(".person");
let btn = document.querySelector(".btn");

const quotes = [
  {
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
    person: `Aristotle`,
  },
  {
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: ` Mahatma Gandhi`,
  },
  {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: ` Albert Einstein`,
  },
  {
    quote: `"Your time is limited, so dont waste it living someone else's life."`,
    person: ` Steve Jobs`,
  },
  {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: ` Benjamin Franklin`,
  },
  {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`,
  },

  {
    quote: `"It does not matter how slowly you go as long as you do not stop."`,
    person: `Confucius`,
  },
  {
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`,
  },
  {
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    person: `Martin Luther King, Jr.`,
  },
  {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    person: `Dalai Lama`,
  },
];

btn.addEventListener("click", changeQuote);

function changeQuote() {
  let random = Math.ceil(Math.random() * quotes.length);
  span.innerText = quotes[random].quote;
  div.innerText = quotes[random].person;
}
