
window.addEventListener("DOMContentLoaded", () => {
  init()
  document.querySelector(".resetBtn").addEventListener("click", () => {
    location.reload()
  })

})

const remaining = (counterValue) => {
  const MAX_WORD_COUNT = 2000;

  const remainingWords = document.getElementById("remaining-words");
  const remainingWordCount = MAX_WORD_COUNT - counterValue;
  remainingWords.innerText = remainingWordCount;
}

const displayUpdateFun = (countValue) => {
  const totalCounter = document.getElementById("counter");
  totalCounter.innerText = countValue;
}


function counterDescription(status) {
  const description = document.getElementById("description");
  description.style.visibility = "visible"
  description.innerText = `Counting ${status}.........`;
}

const disabledBtnFun = (btnToFunction, btnToDisable) => {
  btnToFunction.disabled = false;
  btnToDisable.disabled = true;
  btnToDisable.style.backgroundColor = "#686666"
  btnToDisable.style.color = "#4f4e4e"
  btnToDisable.style.cursor = "initial"
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
  const enableTextArea = () => {
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
    disabledBtnFun(wordCounterBtn, characterCounterBtn)
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