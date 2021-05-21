// ----- IMPORTANTE -----

// IMPORTANTE!: Para este checkpoint se les brindarán las implementaciones ya realizadas en las
// homeworks de Queue, LinkedLis y BinarySearchTree. Sobre dicha implementación van a tener que agregar nuevos
// métodos o construir determinadas funciones explicados más abajo. Pero todos los métodos ya implementados
// en las homeowrks no es necesario que los vuelvan a definir.

const {
  Queue,
  Node,
  LinkedList,
  BinarySearchTree
} = require('./DS.js');

// ----------------------

// ----- Recursión -----

// EJERCICIO 1
// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]
var suma=0;
var countArray = function(array){

  if(array.length===0){
    return 0;
  }
for(var i = 0; i < array.length; i++) {
  if(Array.isArray(array[i])) {
          countArray(array[i]);
          
  } else {
    //arrayN.push(array[i]);
          suma=suma+array[i];
  }
}
  //return arrayN;
  return suma;
}


// EJERCICIO 2
// Secuencia inventada: f(n) = (f(n-1) + f(n-2) + f(n-3)) x 2
// Donde las primeras tres posiciones son dadas por el array recibido por parametro y a partir de
// la siguiente se calcula como la suma de los 3 números anteriores multiplicados por dos.
// array es un arreglo de 3 posiciones que puede contener números o strings, aquellas posiciones que
// sean números debemos dejarlas tal cual están pero las que tengan strings debemos calcular su cantidad
// de caracteres para usarlos en la secuencia.
// Por ejemplo si recibimos: ["Franco", 1, "Henry"] deberíamos tener los siguientes 3 valores iniciales
// de la secuencia f(0) = 6, f(1) = 1 y f(2) = 5 (Ya que "Franco" tiene 6 caracteres y "Henry", 5)
// A partir de ahí la cuarta posición sería  (6 + 1 + 5) * 2 = 24 y así sucesivamente
// La función secuenciaHenry debe devolver el enésimo numero de la serie, por ejemplo para el array
// antes mencionado:
// secuencia: 6, 1, 5, 24, 60, 178, 524
// secuenciaHenry(0) // 6  ya que el elemento de la posición 0 es cero
// secuenciaHenry(1) // 1 ya que el elemento de la posición 1 es 1
// secuenciaHenry(6) // 524 ya que el elemento de la posición 6 es 524
// Para números negativos de n debe devolver false
function secuenciaHenry(array, n) {
  // Tu código aca:

  for(let i=0;i<array.length;i++){
    if(typeof array[i]==="string"){
      //var cant=array1[i].split("");
      array[i]=array[i].length;
    }
  }
  
  if(n<0){
    return false;
  }else if(n===0){
        return array[0];
      }else if(n===1){
             return array[1];
            }
            else if(n===2){
               return array[2];
            }else
               return (secuenciaHenry(array, n-1)+secuenciaHenry(array, n-2)+secuenciaHenry(array, n-3))*2;
}

// ---------------------

// ----- LinkedList -----

// EJERCICIO 3
// Implementar el método size dentro del prototype de LinkedList que deberá retornar el tamaño actual de
// la LinkedList. En el caso de que la lista se encuentre vacía deberá retornar cero.
// Ejemplo:
//    var lista = new LinkedList();
//    lista.size(); --> 0
//    lista.add(1);
//    lista.size(); --> 1
//    lista.add(2);
//    lista.add(3);
//    lista.size(); --> 3

LinkedList.prototype.size = function(){
  // Tu código aca:
  // Tu código aca:
  let contador=0;
  if(this.head===null){
    return 0;
  } else {
    var tailActual = this.head;
    while (tailActual) {
      
      contador++;
      tailActual = tailActual.next;
    }
    return contador;
  }
}


// EJERCICIO 4
// Implementar el método removeFromPos dentro del prototype de LinkedList que deberá remover un elemento de
// la posición indicada ("pos" será la posición del elemento a remover).
// En el caso de que la posición en la que se quiera hacer el remove no sea válida (Supere el tamaño de
// la lista actual o sea un número negativo) debe devolver false.
// Si el nodo fue removido correctamente devolver el valor del nodo.
// Aclaración: la posición cero corresponde al head de la LinkedList
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [3] --> [4]
//    lista.removeFromPos(2);
//    Ahora la lista quedaría: Head --> [1] --> [2] --> [4] y la función debería haber devuelto el valor 3
// Ejemplo 2:
//    Suponiendo que se pide una posición inválida: removeFromPos(8) --> false

LinkedList.prototype.removeFromPos = function(pos){
  // Tu código aca:
  if(pos<0 || pos>this.size()){
    return false;
  }
   let current=this.head;
   let previus=null;
   if(pos===0){
     this.head=current.next;
   }
   else{
     for(let i=0;i<pos;i++){
       previus=current;
       current=current.next;
     }
     previus.next=current.next;
   }
   return current.value;
}

// EJERCICIO 5
// Implementar la función orderLinkedList que ordene los elementos de la lista pasada por parámetro
// y retorne una nueva lista con dichos elementos ya ordenados.
// Ejemplo:
//    Lista original: Head --> 4 --> 13 --> 1 --> 10 --> null
//    Lista nueva luego de aplicar el order: Head --> 1 --> 4 --> 10 --> 13 --> null
// IMPORTANTE: Pueden usar algun método de ordenamiento ya visto para tener un arreglo ordenado y a
// partir de él construir la nueva lista ordenada

var orderLinkedList = function(linkedList){
  // Tu código aca:
// Tu código aca:
function insertionSort(inputArr)  {
  let n = inputArr.length;
     for (let i = 1; i < n; i++) {
          let current = inputArr[i];
         let j = i-1; 
         while ((j > -1) && (current < inputArr[j])) {
             inputArr[j+1] = inputArr[j];
           j--;
          }
       inputArr[j+1] = current;
      }
  return inputArr;
}

var cantidad=linkedList.size();
var array=[];
for(var i=0;i<cantidad;i++){
var elem=linkedList.remove();
array.push(elem);  
}
array=insertionSort(array);
var nuevaLista=new LinkedList();
for(let i=0;i<array.length;i++){
  nuevaLista.add(array[i]);
}
return nuevaLista;
}

// ----------------------

// ----- QUEUE -----

// EJERCICIO 6
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

var controlAcces = function(queue, event){
  // Tu código aca:
  var array=[];
  while(queue.size()>0){
   var cliente=queue.dequeue();
 
     if(cliente.age>=18){
       //encontramos un clñiente con el mismo evento
       if(cliente.ticket.event===event){
         var band=1;
         var j=0;
         while(j<array.length && band==1 && array.length>0){//recorro el array
          if(array[j].ticket.number===cliente.ticket.number){
            band=0;//se encontro un tiket repetido
          }
          else j++;//sigo recorriendo el array si no encuentro
         }
         if(band==1){//es porque NO se encointro en el array un tiket con el mismo num
           array.push(cliente); //elimino ese cliente del queue
         }
       }
     }
  }
 
  var arrayN=[];
  for(let i=0;i<array.length;i++){
  arrayN[i]=array[i].fullname;
  }
  return arrayN;
  //return array;
}

// ---------------


// ----- BST -----

// EJERCICIO 7
// Implementar la función generateBST para que a partir de un array recibido como parametro
// genere un BinarySearchTree. Devolver dicho arbol generado.
// Ejemplo:
//    - array(16,6,23,2,17,31,14,5);
//    - arbol generado:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5

var generateBST = function(array){
  var valor=array[0];
  let binarySearchTree = new BinarySearchTree(valor);
  for(var i=1;i<array.length;i++){
    binarySearchTree.insert(array[i]);
  }
  return binarySearchTree;
}


// ---------------


// Ejercicio 8
// Dado un arreglo ordenado, encontrar el índice de un elemento específico pasado como parámetro
// utilizando el método conocido como búsqueda binaria. En el caso de que el número buscado no se encuentre
// en el array devolver -1.
// Para mayor información sobre dicho método:
//    - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
//    - https://en.wikipedia.org/wiki/Binary_search_algorithm
// Ejemplo:
//    array = [1,2,3,4,5,6,7,8,9,10];
//    binarySearch(array, 2) --> Devolvería 1 ya que array[1] = 2
//    [Donde 2 sería el número sobre el cuál queremos saber su posición en el array]


var binarySearch = function (array, target) {
  // Tu código aca:
  let first = 0;  
    let last = array.length - 1;   
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (array[middle] == target) {
            found = true;
            position = middle;
        } else if (array[middle] > target) { 
            last = middle - 1;
        } else { 
            first = middle + 1;
        }
    }
    return position;

}

// EJERCICIO 9
// Ordená un arreglo de números usando un bubble sort pero con algunas particularidades.
// El nuevo arreglo debe ser devuelto.
// El algortimo va a recibir un arreglo de objetos de la siguiente forma:
// {
//   name: "Notebook",
//   price: 1200,
//   review: 8
// }
// Esos objetos deben ser ordenados en función de lo que indique los siguientes parámetros
// "firstOrd", "secondOrd" los cuales van a tener alguna de las propiedades del objeto anterior
// para saber cual va a ser la que debemos tomar para el ordenamiento. La "secondOrd" se usa en los
// casos en los cuales para la "firstOrd" tengan el mismo valor.
// var array = [
//   {name: "Notebook", price: 1200, review: 8},
//   {name: "Smartphone", price: 300, review: 9},
//   {name: "TV", price: 800, review: 1},
//   {name: "PS5", price: 1200, review: 7}
// ]
// Ejemplo 1:
// specialSort(array, "price") --> Debería quedar:
// [
//   {name: "Smartphone", price: 300, review: 9},
//   {name: "TV", price: 800, review: 1},
//   {name: "Notebook", price: 1200, review: 8}
//   {name: "PS5", price: 1200, review: 7}
// ]
// Ejemplo 2:
// specialSort(array, "price", "review") --> Debería quedar:
// [
//   {name: "Smartphone", price: 300, review: 9},
//   {name: "TV", price: 800, review: 1},
//   {name: "PS5", price: 1200, review: 7},
//   {name: "Notebook", price: 1200, review: 8}
// ]
// (Siempre el ordenamiento es de menor a mayor sea cual fuera la propiedad indicada para el orden)


var specialSort = function(array, firstOrd, secondOrd) {
  // Tu código aca:
// Tu código aca:
var  arrayN=[];
var n, i, k, aux;
    n = array.length;
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (array[i][firstOrd] > array[i + 1][firstOrd]) {
                aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
            }else if (array[i][firstOrd] === array[i + 1][firstOrd]) {
                if(array[i][secondOrd] > array[i + 1][secondOrd]){
                    aux = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = aux;
                }                    
            }
        }
    }
    arrayN=array;
    //return lista;
    return arrayN;
}

// ----- Closures -----

// EJERCICIO 10
// Implementar la función closureGreeting que recibe un parámetro (prefix) mediante closures debe permitir
// generar nuevas funciones de saludo dejando fijo siempre el prefijo indicado.
// Ejemplo 1:
//    var hiGreeting = closureGreeting("Hi");
//    hiGreeting("Franco");  --> Devolverá "Hi Franco, you are number 1"
//    hiGreeting("Toni"); --> Devolverá "Hi Toni, you are number 2"
// Ejemplo 2:
//    var helloGreeting = closureGreeting("Hello");
//    helloGreeting("Franco");  --> Devolverá "Hello Franco, you are number 1"
//    helloGreeting("Toni"); --> Devolverá "Hello Toni, you are number 2"
// IMPORTANTE: Prestar atención a los espacios, comas y demás caracteres ya que tiene que el string
// debe coincidir en todos sus caracteres para que el test pase correctamente

function closureGreeting(prefix) {
  // Tu código aca:
  let numero=0;
  return function(segNombre){
    numero++;
  return (prefix+" "+segNombre+", you are number "+numero);
  }
}

// -------------------


// ----- EXTRA CREDIT -----

// Implementar una función que a partir de un String recibido como parámetro
// genere todos los posibles anagramas de ese String y retorne un arreglo con ellos.
// Los parámetros extra "array" e "index" son opcionales y pueden ser utilizados para
// resolver este problema de forma recursiva
// Extra-Extra credit: Sacar las palabras duplicados del array final.
// Ejemplo:
//    const anagrams = allAnagrams('abc');
//    console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

var allAnagrams = function(string, array, index) {

};

module.exports = {
  countArray,
  secuenciaHenry,
  LinkedList,
  Queue,
  controlAcces,
  binarySearch,
  allAnagrams,
  specialSort,
  closureGreeting,
  generateBST,
  orderLinkedList
}
