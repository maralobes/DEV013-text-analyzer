import analyzer from './analyzer.js';
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('textarea[name="user-input"]');
    const eraseButton = document.getElementById('reset-button');

    eraseButton.addEventListener('click', function () {
        textarea.value = '';
    })
});