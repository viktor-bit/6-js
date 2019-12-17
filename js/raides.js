function isrinktiRaides( text, step ) {
    if ( typeof(text) !== 'string' ) {
        return 'ERROR: pirmas turi buti tekstas.';
    }
    if ( typeof(step) !== 'number' ||
         isFinite(step) === false ) {
        return 'ERROR: antras turi buti normalus skaicius';
    }

    if ( text.length < Math.abs(step) ) {
        return 'ERROR: per trumpas tekstas, nurodytam zingsniu kiekiui.';
    }

    if ( step === 0 ) {
        return 'ERROR: per trumpas zingsnis.';
    }

    if ( step % 1 !== 0 ) {
        return 'ERROR: zingsnis turi buti naturalusis skaicius.';
    }

    let result = '';

    if ( step > 0 ) {
        for ( let i=step-1; i<text.length; i+=step ) {
            result += text[i];
        }
    } else {
        for ( let i=text.length+step; i>=0; i+=step ) {
            result += text[i];
        }
    }

    return result;
}



console.log( isrinktiRaides( 1561, 2 ) );
console.log( isrinktiRaides( 'abc', '4' ) );
console.log( isrinktiRaides( 'abc', 4 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abcdefghijkl', 3.357 ) );
console.log( isrinktiRaides( 'abcdefg', 2 ) );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
console.log( isrinktiRaides( 'abcdefg', -2 ) );
console.log( isrinktiRaides( 'abcdefghijkl', -3 ) );
console.log( isrinktiRaides( 'abcdef', -2 ) );
console.log( isrinktiRaides( 'abcdef', -200 ) );

