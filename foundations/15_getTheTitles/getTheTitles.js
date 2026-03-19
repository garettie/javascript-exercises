const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (book) {
  return book.map((info) => info.title);
};

// Do not edit below this line
module.exports = getTheTitles;
