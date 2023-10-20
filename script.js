
window.addEventListener("DOMContentLoaded", init)
const remaining = (counterValue) => {
  const remainingWords = document.getElementById("remaining-words");
  const remainingWordCount = 2000 - counterValue;
  remainingWords.innerText = remainingWordCount;
}
const displayUpdateFun = (countValue) => {
  const totalCounter = document.getElementById("counter");
  totalCounter.innerText = countValue;
}

function counterDescription(status) {
  const description = document.getElementById("description");
  description.innerText = `Counting ${status}.........`;
}

const disabledBtnFun = (btnToFunction, btnToDisable) => {
  btnToFunction.disabled = true;
  btnToDisable.disabled = false;
  btnToDisable.style.backgroundColor = "#f1eded"
  btnToDisable.style.color = "#aba9a9"
}




function init() {
  const textArea = document.getElementById("user-input");
  textArea.disabled = true;
  const wordCounterBtn = document.getElementById("word-counter");
  const characterCounterBtn = document.getElementById("count-characters");


  const textAreaValue = () => {
    const inputText = textArea.value;
    return inputText
  }
  const enableTextArea=()=>{
    textArea.disabled = false;
    textArea.value = '';
  }

  function updateWordCount() {
    const textValue = textAreaValue();
    const words = textValue.split(' ');
    const filteredWords = words.filter(word => word.trim() !== '');
    const wordCountValue = filteredWords.length;
    displayUpdateFun(wordCountValue);
    remaining(wordCountValue);
  }


  function updateCharacterCount() {
    const textValue = textAreaValue()
    const characterCount = textValue.length;
    displayUpdateFun(characterCount)
    remaining(characterCount)
  }


  // click events on buttons
  wordCounterBtn.addEventListener("click", () => {
    enableTextArea()
    disabledBtnFun(characterCounterBtn, wordCounterBtn)
    updateWordCount();
    counterDescription("Words")
    textArea.addEventListener("input", updateWordCount);
  });



  characterCounterBtn.addEventListener("click", () => {
    enableTextArea()
    disabledBtnFun(characterCounterBtn, wordCounterBtn)
    textArea.addEventListener("input", updateCharacterCount);
    counterDescription("Characters")
  });

}
