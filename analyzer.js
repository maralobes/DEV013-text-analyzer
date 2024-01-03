const analyzer = {
  getWordCount: (text) => {
    text = text.replace(/[^\w\s]/g, '')
    const arr = text.trim().split(' ');
    const arrFiltrado = arr.filter(word => word !== '');
    return arrFiltrado.length;
  },
  getCharacterCount: (text) => {
    const arr = text.split('');
    return arr.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    text = text.replace(/[^\w\s]/g, '')
    const arr = text.split('');
    const arrFiltrado = arr.filter(chart => chart !== ' ');
    return arrFiltrado.length;
  },
  getCharacterCountExcludingSpacesIncludingSpecialCharacters: (text) => {
    const arr = text.split('');
    const arrFiltrado = arr.filter(chart => chart !== ' ');
    return arrFiltrado.length;
  },
  getAverageWordLength: (text) => {
    const valor1 = analyzer.getCharacterCountExcludingSpacesIncludingSpecialCharacters(text);
    const valor2 = analyzer.getWordCount(text);
    const division = valor1 / valor2;

    return parseFloat(division.toFixed(2))
  },
  getNumberCount: (text) => {
    let numberList = text.split(' ');
    const pattern = /^-?\d*\.?\d+$/;
    numberList = numberList.filter(x => {
      x = x.replace(/\.$/, '')
      if (pattern.test(x)) {
        return true;
      } else {
        return false;
      }
    })

    return numberList.length;
  },
  getNumberSum: (text) => {
    const words = text.split(' ');
    let sumaTotal = 0
    const pattern = /^-?\d*\.?\d+$/;
    for (let i = 0; i < words.length; i++) {
      const item = words[i].replace(/\.$/, '')
      if (pattern.test(item)) {
        sumaTotal = sumaTotal + parseFloat(item);
        console.log('sumaTotal', sumaTotal)
      }
    }

    return sumaTotal;

  },
};

export default analyzer;
