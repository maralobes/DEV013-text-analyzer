import analyzer from './analyzer.js';
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('textarea[name="user-input"]');
    const eraseButton = document.getElementById('reset-button');

    eraseButton.addEventListener('click', function () {
        textarea.value = '';
    })
});

let textarea = document.querySelector('textarea[name="user-input"]')

document.querySelector('textarea[name="user-input"]').addEventListener('input', function(evt){
    let datatestid;

    const countWord= analyzer.getWordCount(textarea.value);
    datatestid = document.querySelector('li[data-testid="word-count"]');
    console.log(datatestid)
    datatestid.innerHTML = "Palabras " + countWord;

    const characterCount = analyzer.getCharacterCount(textarea.value);
    datatestid = document.querySelector('li[data-testid="character-count"]');
    console.log(datatestid)
    datatestid.innerHTML = "Caracteres: " + characterCount;

    const characterCountExclSpaces = analyzer.getCharacterCountExcludingSpaces(textarea.value);
    datatestid = document.querySelector('li[data-testid="character-no-spaces-count"]');
    console.log(datatestid)
    datatestid.innerHTML = "Caracteres sin espacios: " + characterCountExclSpaces;

    const wordAverageLength = analyzer.getAverageWordLength(textarea.value);
    datatestid = document.querySelector('li[data-testid="word-length-average"]');
    console.log(datatestid)
    datatestid.innerHTML = "Promedio de longitud: " + wordAverageLength;

    const numberCount = analyzer.getNumberCount(textarea.value);
    datatestid = document.querySelector('li[data-testid="number-count"]');
    console.log(datatestid)
    datatestid.innerHTML = "Números: " + numberCount;

    const numSum = analyzer.getNumberSum(textarea.value);
    datatestid = document.querySelector('li[data-testid="number-sum"]');
    console.log(datatestid)
    datatestid.innerHTML = "Suma de números: " + numSum;
});

