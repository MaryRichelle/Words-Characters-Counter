const textArea = document.getElementById("user-input");
const totalCounter = document.getElementById("counter");
const remaining = document.getElementById("remaining");
const wordCounterBtn = document.getElementById("word-counter");
const characterCounterBtn = document.getElementById("count-characters");
const discription = document.getElementById("discription")
function characterCounter() {
    discription.innerText = "Counting Characters........."

  textArea.addEventListener("keyup", (event) => {
    totalCounter.innerText = event.target.value.length;
    const remainingCharacters = 500 - event.target.value.length;
    remaining.innerText = remainingCharacters;
    if (remainingCharacters <= 5) {
      textArea.style.borderColor = "red";
      remaining.style.color = "red";
    }
    if ((counter) => 494) {
      totalCounter.style.color = "red";
    }
  });
}
function countWords() {

    discription.innerText = "Counting Words......"
  textArea.addEventListener("input", (event) => {
    const theString = event.target.value;
    const splitString = theString.split(" ");
    totalCounter.innerText = splitString.length;
    const remainingWords = 450 -splitString.length
    remaining.innerText = remainingWords;

  });
}
wordCounterBtn.addEventListener("click", () => {
  console.log("wordCounterBtn");
  countWords();
});
characterCounterBtn.addEventListener("click", () => {
  console.log("characterCounterBtn");
  characterCounter();
});
