

function daugyba(m,n){
    if ( typeof(m) !== 'number' ||
        isFinite(m) === false ||
        typeof(n) !== 'number' ||
        !isFinite(n) ) {
        return 'ERROR: duok skaiciu!!!'
        }  
        return m * n;
    }

console.log( daugyba(2,2));
console.log( daugyba(null,2));
console.log( daugyba(NaN,2));
console.log( daugyba(Infinity,'5'));
console.log( daugyba(3,-2));
console.log( daugyba(-5,-2));


