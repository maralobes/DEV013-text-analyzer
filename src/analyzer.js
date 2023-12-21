const analyzer = {  
  getWordCount: (text) => {
    const arr =text.trim().split(' ');
    const arrFiltrado = arr.filter(word => word !== '');
    return arrFiltrado.length;
  },
  getCharacterCount: (text) => {
    const arr =text.split('');
    return arr.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const arr =text.split('');
    const arrFiltrado =arr.filter(word => word !== ' ');
    return arrFiltrado.length;
  },
  getAverageWordLength: (text) => {    
    const valor1 = analyzer.getCharacterCountExcludingSpaces(text);
    const valor2 = analyzer.getWordCount(text);
    const division = valor1 / valor2;
    return division.toFixed(2);
  },
  getNumberCount: (text) => {
    const arrNumeros = text.replace(/[^0-9]/g,'');
    return arrNumeros.length;
  },
  getNumberSum: (text) => {
    const arrNumeros = text.replace(/[^0-9]/g,'');
    const sumaTotal = 0
    for (let i = 0; i < arrNumeros.length; i++){
      sumaTotal = sumaTotal+arrNumeros.length;
    }

    return sumaTotal;

  },
};

export default analyzer;
