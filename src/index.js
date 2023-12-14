import analyzer from './analyzer.js';
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('textarea[name="user-input"]');
    const eraseButton = document.getElementById('reset-button');

    eraseButton.addEventListener('click', function () {
        textarea.value = '';
    })
});

/*Lo creé con un alert para saber que funciona, pero cuando cree las funciones para las métricas, entonces no debería desplegar nada.*/
const textarea = document.querySelector('textarea[name="user-input"]')

let datatestid = document.querySelector('data-testid')

document.querySelector('textarea[name="user-input"]').addEventListener('input', function(evt){
    const countWord= analyzer.getWordCount(textarea.value);
    datatestid = document.querySelector('li[data-testid="word-count"]');
    datatestid.innerHTML = "Palabras " + countWord;

    const characterCount= analyzer.getCharacterCount(textarea.value);
    datatestid = document.querySelector('li[data-testid="character-count"]');
    datatestid.innerHTML = "Caracteres " + characterCount;

});

