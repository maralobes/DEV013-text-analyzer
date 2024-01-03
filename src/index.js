import analyzer from './analyzer.js';
document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.querySelector('textarea[name="user-input"]');
  const eraseButton = document.getElementById('reset-button');

  eraseButton.addEventListener('click', function() {
    textarea.value = '';

  })
});

const textarea = document.querySelector('textarea[name="user-input"]')

document.querySelector('textarea[name="user-input"]').addEventListener('input', function() {
  let datatestid;

  const countWord= analyzer.getWordCount(textarea.value);
  datatestid = document.querySelector('li[data-testid="word-count"]');
  datatestid.innerHTML = "Palabras " + countWord;

  const characterCount = analyzer.getCharacterCount(textarea.value);
  datatestid = document.querySelector('li[data-testid="character-count"]');
  datatestid.innerHTML = "Caracteres: " + characterCount;

  const characterCountExclSpaces = analyzer.getCharacterCountExcludingSpaces(textarea.value);
  datatestid = document.querySelector('li[data-testid="character-no-spaces-count"]');
  datatestid.innerHTML = "Caracteres sin espacios: " + characterCountExclSpaces;

  const wordAverageLength = analyzer.getAverageWordLength(textarea.value);
  datatestid = document.querySelector('li[data-testid="word-length-average"]');
  datatestid.innerHTML = "Promedio de longitud: " + wordAverageLength;

  const numberCount = analyzer.getNumberCount(textarea.value);
  datatestid = document.querySelector('li[data-testid="number-count"]');
  datatestid.innerHTML = "Números: " + numberCount;

  const numSum = analyzer.getNumberSum(textarea.value);
  datatestid = document.querySelector('li[data-testid="number-sum"]');
  datatestid.innerHTML = "Suma de números: " + numSum;
});