console.log("Labas rytas");
console.log("sveiki");
let a11=1
let daliklis=3;
const a1=-25;
const b=11;
let c=0;
let a=a1; 
for ( a ; a<=b; a++) { 
  if( a % daliklis === 0 )
    c++ , a11=3 ;  
}
console.log(a11+' '+a);
console.log('skaiciu intervale tarp ' + a1 + ' ir ' + b + ', besidalinanciu be liekannos is ' + daliklis + ' yra ' + c + ' vienetai');


a=a1;
daliklis=daliklis + 2;
        for ( a ; a <= b; a++) { 
        if( a % daliklis === 0 )
        c++;   
  }
  console.log('skaiciu intervale tarp ' + a1 + ' ir ' + b + ', besidalinanciu be liekannos is ' + daliklis + ' yra ' + c + ' vienetai');
  daliklis=daliklis + 2;
  if(daliklis<= 7 );
      for ( a ; a <= b; a++) { 
      if( a % daliklis === 0 )
      c++;   
}
    console.log('skaiciu intervale tarp ' + a1 + ' ir ' + b + ', besidalinanciu be liekannos is ' + daliklis + ' yra ' + c + ' vienetai');




function daugyba(m,n){
    if(typeof m !== 'number'){
        return 'ivestas ne skaicius'
    }
        return m * n;
    }
console.log( daugyba(2,2));
console.log( daugyba(null,2));

let ff= 65.03;
ff=ff.toFixed(0);
console.log( ff )


