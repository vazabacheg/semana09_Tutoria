//  1. EJERCICIO CALCULADORA EN JAVASCRIP
// window.alert("Bienvenido a calculadora web");
// let num1 =parseInt(prompt("Ingrese el primer Numero "));
// let num2 =parseInt(prompt("Ingrese el Segundo Numero "));
// let ope =prompt("Ingrese que operacion deseas Usar");

// var resultado = window.confirm('Estas seguro?');
// if (resultado === true) {
//     window.alert('Okay, si estas seguro.');

//     switch(ope){
//         case 'suma':
//             let sum = num1 + num2;
//             window.alert(" La suma de los dos numero es :" +sum);
//             break;
//         case 'resta':
//             let res = num1 - num2;
//             window.alert(" La resta de los dos numero es :" +res);
//             break;
//         case 'multiplicar':
//             let multi = num1 * num2;
//             window.alert(" La multiplicación de los dos numero es :" +multi);
//             break;
//         case 'dividir':
//             let div = num1 / num2;
//             window.alert(" La division de los dos numero es :" +div);
//             break;
//         case 'porcentaje':
//             let porc = num1 % num2;
//             window.alert(" El % de los dos numero es :" +porc);
//             break;
//     }
// } else { 
//     window.alert('Intentalo Mas Tarde');
// }

//2. Ejercicio de Objetos/

// Crear un objeto persona con propiedades básicas
let persona = {
    nombre: 'Anderson',
    apellido: 'Azabache',
    dni : '47582995',
    edad: 25,
    ciudad: 'Trujillo'
  };
  
  // Acceder y mostrar propiedades del objeto
  console.log(persona.nombre); // Anderson
  console.log(persona['edad']); // 25
// Añadir un objeto anidado dentro de persona
persona.direccion = {
    calle: 'Calle libertad',
    numero: 123,
    referencia: 'petro peru'
  };
  //console.log(persona)
  // Agrego y eliminar propiedades del objeto
  persona.trabajo = 'Ingeniero de Sistemas';
  delete persona.ciudad;
  //console.log(persona)
  // Usar la destructuración para acceder a propiedades
  const { nombre, edad } = persona;
  //console.log(nombre, edad); // Anderson 25
  
  // Congelar el objeto para evitar cambios
  Object.freeze(persona);
  // Intentar cambiar el nombre
  persona.nombre = 'Pedro'; // No tendrá efecto porque freeze
  
  // Sellar el objeto para permitir modificaciones pero no agregar ni eliminar propiedades
  Object.seal(persona);
  // Se pueden modificar propiedades existentes
  persona.edad = 28;
  // Pero no se pueden agregar ni eliminar propiedades
  persona.altura = 180; // No tendrá efecto porque esta sellado
  //console.log(persona)
  
  // Unir dos objetos usando Object.assign y el operador spread
  let informacionAdicional = {
    hobby: 'Correr',
    deporte: 'Fútbol'
  };
  
  let personaConInfoAdicional = Object.assign({}, persona, informacionAdicional);
  //console.log(personaConInfoAdicional)
  // O usando el operador spread
  let personaConInfoAdicionalSpread = { ...persona, ...informacionAdicional };
  
  // Usar this dentro de un método del objeto
  persona.saludar = function() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  };
  
  console.log(persona.saludar()); // Hola, soy anderson y tengo 25 años.
  
  // Recorrer el objeto usando Object.keys, Object.values y Object.entries
  console.log(Object.keys(persona)); 
  console.log(Object.values(persona)); 
  console.log(Object.entries(persona)); 