const testaments = [
  { id: 1, name: "Old Testament" },
  { id: 2, name: "New Testament" }
];

const books = [
  { id: 1, testamentId: 1, abbr: "Gen", name: "Genesis" },
  { id: 2, testamentId: 1, abbr: "Exo", name: "Exodus" },
  { id: 3, testamentId: 1, abbr: "Lev", name: "Leviticus" },
  { id: 4, testamentId: 1, abbr: "Num", name: "Numbers" },
  { id: 5, testamentId: 1, abbr: "Deu", name: "Deuteronomy" },
  { id: 6, testamentId: 1, abbr: "Jos", name: "Joshua" },
  { id: 7, testamentId: 1, abbr: "Judg", name: "Judges" },
  { id: 8, testamentId: 1, abbr: "Rth", name: "Ruth" },
  { id: 9, testamentId: 1, abbr: "1Sa", name: "1 Samuel" },
  { id: 10, testamentId: 1, abbr: "2Sa", name: "2 Samuel" },
  { id: 11, testamentId: 1, abbr: "1Ki", name: "1 Kings" },
  { id: 12, testamentId: 1, abbr: "2Ki", name: "2 Kings" },
  { id: 13, testamentId: 1, abbr: "1Ch", name: "1 Chronicles" },
  { id: 14, testamentId: 1, abbr: "2Ch", name: "2 Chronicles" },
  { id: 15, testamentId: 1, abbr: "Eza", name: "Ezra" },
  { id: 16, testamentId: 1, abbr: "Neh", name: "Nehemiah" },
  { id: 17, testamentId: 1, abbr: "Est", name: "Esther" },
  { id: 18, testamentId: 1, abbr: "Job", name: "Job" },
  { id: 19, testamentId: 1, abbr: "Psa", name: "Psalms" },
  { id: 20, testamentId: 1, abbr: "Pro", name: "Proverbs" },
  { id: 21, testamentId: 1, abbr: "Ecc", name: "Ecclesiastes" },
  { id: 22, testamentId: 1, abbr: "SS", name: "Song of Songs" },
  { id: 23, testamentId: 1, abbr: "Isa", name: "Isaiah" },
  { id: 24, testamentId: 1, abbr: "Jer", name: "Jeremiah" },
  { id: 25, testamentId: 1, abbr: "Lam", name: "Lamentations" },
  { id: 26, testamentId: 1, abbr: "Ezk", name: "Ezekiel" },
  { id: 27, testamentId: 1, abbr: "Dan", name: "Daniel" },
  { id: 28, testamentId: 1, abbr: "Hos", name: "Hosea" },
  { id: 29, testamentId: 1, abbr: "Joe", name: "Joel" },
  { id: 30, testamentId: 1, abbr: "Amo", name: "Amos" },
  { id: 31, testamentId: 1, abbr: "Obd", name: "Obadiah" },
  { id: 32, testamentId: 1, abbr: "Jon", name: "Jonah" },
  { id: 33, testamentId: 1, abbr: "Mic", name: "Micah" },
  { id: 34, testamentId: 1, abbr: "Nah", name: "Nahum" },
  { id: 35, testamentId: 1, abbr: "Hab", name: "Habakkuk" },
  { id: 36, testamentId: 1, abbr: "Zep", name: "Zephaniah" },
  { id: 37, testamentId: 1, abbr: "Hag", name: "Haggai" },
  { id: 38, testamentId: 1, abbr: "Zch", name: "Zechariah" },
  { id: 39, testamentId: 1, abbr: "Mal", name: "Malachi" },
  { id: 40, testamentId: 2, abbr: "Mat", name: "Matthew" },
  { id: 41, testamentId: 2, abbr: "Mar", name: "Mark" },
  { id: 42, testamentId: 2, abbr: "Luk", name: "Luke" },
  { id: 43, testamentId: 2, abbr: "Jn", name: "John" },
  { id: 44, testamentId: 2, abbr: "Act", name: "Acts" },
  { id: 45, testamentId: 2, abbr: "Rom", name: "Romans" },
  { id: 46, testamentId: 2, abbr: "1Co", name: "1 Corinthians" },
  { id: 47, testamentId: 2, abbr: "2Co", name: "2 Corinthians" },
  { id: 48, testamentId: 2, abbr: "Gal", name: "Galatians" },
  { id: 49, testamentId: 2, abbr: "Eph", name: "Ephesians" },
  { id: 50, testamentId: 2, abbr: "Phi", name: "Philippians" },
  { id: 51, testamentId: 2, abbr: "Col", name: "Colossians" },
  { id: 52, testamentId: 2, abbr: "1Th", name: "1 Thessalonians" },
  { id: 53, testamentId: 2, abbr: "2Th", name: "2 Thessalonians" },
  { id: 54, testamentId: 2, abbr: "1Ti", name: "1 Timothy" },
  { id: 55, testamentId: 2, abbr: "2Ti", name: "2 Timothy" },
  { id: 56, testamentId: 2, abbr: "Tit", name: "Titus" },
  { id: 57, testamentId: 2, abbr: "Phm", name: "Philemon" },
  { id: 58, testamentId: 2, abbr: "Heb", name: "Hebrews" },
  { id: 59, testamentId: 2, abbr: "Jam", name: "James" },
  { id: 60, testamentId: 2, abbr: "1Pe", name: "1 Peter" },
  { id: 61, testamentId: 2, abbr: "2Pe", name: "2 Peter" },
  { id: 62, testamentId: 2, abbr: "1Jo", name: "1 John" },
  { id: 63, testamentId: 2, abbr: "2Jo", name: "2 John" },
  { id: 64, testamentId: 2, abbr: "3Jo", name: "3 John" },
  { id: 65, testamentId: 2, abbr: "Jud", name: "Jude" },
  { id: 66, testamentId: 2, abbr: "Rev", name: "Revelation" }
];

const chapters = [
  { id: 1, bookId: 1, chapter: 0 },
  { id: 2, bookId: 1, chapter: 1 }
];
const verses = [
  {
    id: 1,
    chapterId: 1,
    verse: 0,
    text:
      "As its name implies, Genesis is about beginnings. Genesis telss us that God Created everything that exists. It shows that God is both the creator and the Ruler of all creation. But it also tells of humanitiy's tragic fall into sin and death, and of God's unfolding plan of redemtion through his covenant with Abraham and his descendants. Genesis includes some of the most memorable stories in the Bible, beginning with Adam and Eve (chs 1-4), continuing through Noah, Abraham, Isaac, and Jacob, and ending with the life of Joseph (chs. 37-50), who died before 1600 B.C. Traditionally, Jews and Christians have recognized Moses as the author, writing after the Exodus from Egypt, commonly dates around 1440 B.C. though some prefer a date around 1260 B.C."
  }
];
const commentary = [];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  testaments,
  books,
  chapters,
  verses,
  commentary
};
