
window.addEventListener("DOMContentLoaded", init)


function init(){

const textArea = document.getElementById("user-input");
const totalCounter = document.getElementById("counter");
const wordCount = document.getElementById("word-count");
const remainingWords = document.getElementById("remaining-words");
const wordCounterBtn = document.getElementById("word-counter");
const characterCounterBtn = document.getElementById("count-characters");
const description = document.getElementById("description");
console.log(wordCount);

function characterCounterDescription(status) {
  description.innerText = `Counting ${status}.........`;
  textArea.addEventListener("input", updateCharacterCount);
}

function updateCharacterCount() {
  const inputText = textArea.value;
  const characterCount = inputText.length;
  totalCounter.innerText = characterCount;
  const remainingCharacters = 100 - characterCount;
  remainingWords.innerText = remainingCharacters;

  if (remainingCharacters <= 5 || remainingCharacters >= 50) {
    textArea.style.borderColor = "red";
    remainingWords.style.color = "red";
  } else {
    textArea.style.borderColor = "";
    remaining.style.color = "";
  }

  if (remainingCharacters >= 494) {
    totalCounter.style.color = "red";
  } else {
    totalCounter.style.color = "";
  }
}

function countWords() {
  description.innerText = "Counting Words......";
  textArea.addEventListener("input", updateWordCount);
}

function updateWordCount() {
  const inputText = textArea.value;
  const words = inputText.split(/\s+/).filter(word => word !== '');
  const wordCountValue = words.length;
  console.log(wordCountValue);
  totalCounter.innerText = wordCountValue;
  const remainingWordCount = 1000 - wordCountValue;
  remainingWords.innerText = remainingWordCount;
}

wordCounterBtn.addEventListener("click", () => {
  
  characterCounterBtn.disabled = false;
  characterCounterBtn.style.backgroundColor="#f1eded"
  characterCounterBtn.style.color="#aba9a9"
  wordCounterBtn.disabled = true;
  textArea.value = '';
  characterCounterDescription("Words")
    updateWordCount();
  countWords();
});

characterCounterBtn.addEventListener("click", () => {
  characterCounterBtn.disabled = true;
  wordCounterBtn.disabled = false;
  wordCounterBtn.style.backgroundColor = "#f1eded"
  wordCounterBtn.style.color = "#aba9a9"
  textArea.value = '';
  updateCharacterCount();
  updateWordCount();
  characterCounterDescription("Characters")
});

}