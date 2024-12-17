/* 
Print left angled triangle
n=5
output:
    *
   **
  ***
 ****
***** 
*/

function leftAngledTriangle(n) {
    console.log("Left Angled Triangle")
    for(let i=n; i>0; i--) {
        let pattern = '';
        for (let j = 1; j <= n; j++) {
            if(i<=j) pattern+= '*';
            else pattern+=' ';
        }
        console.log(pattern);  
    }
}

leftAngledTriangle(5);

/* 
Print inverted right angled triangle
n=5
output:
*****
**** 
***
**
*
*/

function inversRightAngledTriangle(n) {
    console.log('Inverted Right Angled Triangle');

    for(let i=n; i>0; i--){
        let pattern = '';
        for(let j=1; j<=n; j++) {
            if(j<=i) pattern += '*';
            else pattern += ' '
        }
        console.log(pattern);
    }
}

inversRightAngledTriangle(5);

/* 
Print Square Pattern
n=5
output:
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
*/

function squarePattern(n) {
    console.log('Square Pattern')
    for(let i=0; i<n; i++){
        let pattern = '';
        for(let j=1; j<=n; j++){
            pattern += '* '
        }
        console.log(pattern);
    }
}

squarePattern(5);

/* 
Print Hallow Square Pattern
n=5
output:
* * * * *
*       *
*       *
*       *
* * * * *
*/

function hallowSquarePattern(n) {
    console.log('Hallow Square Pattern')
    for(let i=1; i<=n; i++){
        let pattern = '';
        for(let j=1; j<=n; j++){
           if(i===1 || j===1 || i===n || j===n) pattern += '* '
           else pattern+='  '
        }
        console.log(pattern);
    }
}

hallowSquarePattern(5);