
function comparacion(a,b){
    return a == b;
}
let resultado = comparacion(5,6);
console.log(resultado);

function nuvmayor(n1,n2){ // > mayor que, < menor que, >= mayor o igual, <= menor o igual

    if ( n1 > n2) {
        return n1
    } else if (n2 > n1) {
        return n2
    } else {
        return false
    }

}

resultado = nuvmayor(8, 9)

console.log(`El número mayor es: ${resultado}`)

var mifuncion=(false);