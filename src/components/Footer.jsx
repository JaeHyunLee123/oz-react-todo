import "./Footer.css";

/**
 * @typedef {Object} Quote
 * @property {string} quote - The quote text.
 * @property {string} author - The author of the quote.
 */

/**
 * An array of motivational travel-related quotes.
 * @type {Quote[]}
 */
const quotesArr = [
  {
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans",
    author: "John Lennon",
  },
  {
    quote: "The world is a book and those who do not travel read only one page",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all",
    author: "Helen Keller",
  },
  {
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Only a life lived for others is a life worthwhile",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do not love",
    author: "Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment",
    author: "Hilaire Belloc",
  },
  {
    quote: "Travel expands the mind and fills the gap",
    author: "Sheda Savage",
  },
];

export default function Footer() {
  const randomIndex = Math.floor(Math.random() * quotesArr.length);

  const quotes = quotesArr[randomIndex];
  return (
    <footer className="footer">
      <div className="quote-box">
        <span className="quote-box__quote">{quotes.quote}</span>
        <span className="quote-box__author">{quotes.author}</span>
      </div>
    </footer>
  );
}
