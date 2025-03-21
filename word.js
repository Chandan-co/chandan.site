// Array of words with their corresponding hints

let words = [
  // Each object represents a word and its hint
  {
    word: "addition",
    hint: "The process of adding numbers"
  },
  {
    word: "meeting",
    hint: "Event in which people come together"
  },
  {
    word: "number",
    hint: "Math symbol used for counting"
  },
  {
    word: "exchange",
    hint: "The act of trading"
  },
  {
    word: "canvas",
    hint: "Piece of fabric for oil painting"
  },
  {
    word: "garden",
    hint: "Space for planting flower and plant"
  },
  {
    word: "position",
    hint: "Location of someone or something"
  },
  {
    word: "feather",
    hint: "Hair like outer covering of bird"
  },
  {
    word: "comfort",
    hint: "A pleasant feeling of relaxation"
  },
  {
    word: "tongue",
    hint: "The muscular organ of mouth"
  },
  {
    word: "expansion",
    hint: "The process of increase or grow"
  },
  {
    word: "country",
    hint: "A politically identified region"
  },
  {
    word: "group",
    hint: "A number of objects or persons"
  },
  {
    word: "taste",
    hint: "Ability of tongue to detect flavour"
  },
  {
    word: "store",
    hint: "Large shop where goods are traded"
  },
  {
    word: "field",
    hint: "Area of land for farming activities"
  },
  {
    word: "friend",
    hint: "Person other than a family member"
  },
  {
    word: "pocket",
    hint: "A bag for carrying small items"
  },
  {
    word: "needle",
    hint: "A thin and sharp metal pin"
  },
  {
    word: "expert",
    hint: "Person with extensive knowledge"
  },
  {
    word: "statement",
    hint: "A declaration of something"
  },
  {
    word: "second",
    hint: "One-sixtieth of a minute"
  },
  {
    word: "library",
    hint: "Place containing collection of books"
  }
];

const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word");

let correctWord, timer;

// Function to initialize the timer
const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime);
    }
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    initGame();
  }, 1000);
};

// Function to initialize the game
const initGame = () => {
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
};
initGame();

// Function to check the user's input word
const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return alert("Please enter the word to check!");
  if (userWord !== correctWord)
    return alert(`Oops! ${userWord} is not a correct word`);
  alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
  initGame();
};

// Event listeners for the refresh and check buttons
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);