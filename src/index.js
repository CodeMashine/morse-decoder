const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = [[]] ;
    for ( let i = 0 , k = 0 ; i <expr.length ; i++){
        if( i%10 === 0 && i!== 0 ){
            k+=1 ;
            res[k] = [] ;
        }
        res[k].push(expr[i]) ;
    } ;

    return res.map( el => {
        let letter = MORSE_TABLE[String(parseInt(el.join(''),10)).replace(/10/g , ".").replace(/11/g ,"-")] ;
        if(!letter) letter = " " ;
        return letter ;
    }).join('') ;
}

module.exports = {
    decode
}
