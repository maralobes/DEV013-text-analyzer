const analyzer = {
  getWordCount: (text) => {
    const arr = text.trim().split(' ');
    const arrFiltrado = arr.filter(word => word !== '');
    return arrFiltrado.length;
  },
  getCharacterCount: (text) => {
    const arr = text.split('');
    return arr.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const arr = text.split('');
    const arrFiltrado = arr.filter(word => word !== ' ');
    return arrFiltrado.length;
  },
  getAverageWordLength: (text) => {
    const valor1 = analyzer.getCharacterCountExcludingSpaces(text);
    const valor2 = analyzer.getWordCount(text);
    const division = valor1 / valor2;

    return division.toFixed(2);
  },
  getNumberCount: (text) => {
    const stringOnlyNumbers = text.replace(/[^0-9\s]/g, '');
    let numberList = stringOnlyNumbers.split(' ');
    numberList = numberList.filter(x => {
      if (x !== '') {
        return true;
      } else {
        return false;
      }
    })

    return numberList.length;
  },
  getNumberSum: (text) => {
    const stringOnlyNumbers = text.replace(/[^0-9\s]/g, '');
    let numberList = stringOnlyNumbers.split(' ');
    numberList = numberList.filter(x => {
      if (x !== '') {
        return true;
      } else {
        return false;
      }
    })
    console.log('numberList', numberList)

    let sumaTotal = 0
    for (let i = 0; i < numberList.length; i++) {
      sumaTotal = sumaTotal + parseInt(numberList[i]);
      console.log ('sumaTotal', sumaTotal)
    }

    return sumaTotal;

  },
};

export default analyzer;
