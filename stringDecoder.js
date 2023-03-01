let wordToDecode = '2bna0p1mp2osl0e'

let decoder = (code) => {
    let decodedWord = '';
    for (let i = 0; i < code.length; i++) {
        letterIndex = i + 1 + +code[i];
        decodedWord += code[letterIndex];
        i = letterIndex++;
    }
    return decodedWord;
}

console.log(decoder(wordToDecode));