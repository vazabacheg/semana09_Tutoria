
window.alert("Bienvenido a calculadora web");
let num1 =parseInt(prompt("Ingrese el primer Numero "));
let num2 =parseInt(prompt("Ingrese el Segundo Numero "));
let ope =prompt("Ingrese que operacion deseas Usar");

var resultado = window.confirm('Estas seguro?');
if (resultado === true) {
    window.alert('Okay, si estas seguro.');

    switch(ope){
        case 'suma':
            let sum = num1 + num2;
            window.alert(" La suma de los dos numero es :" +sum);
            break;
        case 'resta':
            let res = num1 - num2;
            window.alert(" La resta de los dos numero es :" +res);
            break;
        case 'multiplicar':
            let multi = num1 * num2;
            window.alert(" La multiplicación de los dos numero es :" +multi);
            break;
        case 'dividir':
            let div = num1 / num2;
            window.alert(" La division de los dos numero es :" +div);
            break;
        case 'porcentaje':
            let porc = num1 % num2;
            window.alert(" El % de los dos numero es :" +porc);
            break;
    }
} else { 
    window.alert('Intentalo Mas Tarde');
}