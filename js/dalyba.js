function dalyba( a, b ) {
        if ( typeof(a) !== 'number' ||
         isFinite(a) === false ||
         typeof(b) !== 'number' ||
         !isFinite(b) ) {
        return 'ERROR: duok skaiciu!!!';
    }
    if ( b === 0 ) {
        return 'ERROR: musu atveju is nulio dalinti nesinori... :(';
    }


    return a / b;

}



console.log( dalyba( 5, 0 ) );
console.log( dalyba( 0.9, 'asd' ) );
console.log( dalyba( 'asd', 0.8 ) );
console.log( dalyba( -0.9, [-0.8] ) );
console.log( dalyba( -0.9, Infinity ) );
console.log( dalyba( Infinity, 0 ) );
console.log( dalyba( 8 ) );
console.log( dalyba() );
console.log( dalyba( 8, true ) );
console.log( dalyba( 8, NaN ) );
console.log( dalyba( 8, null ) );
console.log( dalyba( 5, 2 ) );
console.log( dalyba( 0.9, 0.8 ) );
console.log( dalyba( -0.9, 0.8 ) );
console.log( dalyba( 0.9, -0.8 ) );
console.log( dalyba( -0.9, -0.8 ) );
console.log( dalyba( 948526548565456585584658685, 0.4559455745545541547547547 ) );