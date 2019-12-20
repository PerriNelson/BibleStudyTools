const fs = require("fs");
const path = require("path");
const mockData = require("./mockData.js");

const { testaments, books, chapters, verses, commentary } = mockData;
const data = JSON.stringify({
  testaments,
  books,
  chapters,
  verses,
  commentary
});
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
