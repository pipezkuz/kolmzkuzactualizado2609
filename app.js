alert("Vienes a comprar");

const iva = 0.19; // IVA
let productos = [
  "Notebook", "Pc Escritorio", "Tablet", // Computadores
  "500Gb", "1000Gb", "1500Gb",           // Discos duros
  "4Gb", "8Gb", "12Gb"                   // Memoria RAM
];

let precios = [
  100000, 120000, 80000, // Computadores
  10000, 20000, 30000,   // Discos duros
  30000, 40000, 60000    // Memoria RAM
];

let stock = [
  50, 60, 150, // Computadores
  50, 70, 90,  // Discos duros
  30, 20, 40   // Memoria RAM
];


function seleccionarProducto() {
  let lista = "";
  for (let i = 0; i < 3; i++) {
    lista += `${i + 1}. ${productos[i]} - $${precios[i]} (Stock: ${stock[i]})\n`;
  }

  let indice = parseInt(prompt("Ingrese el número del producto que desea comprar:\n" + lista)) - 1;

  while (indice < 0 || indice >= 3 || isNaN(indice)) {
    alert("Opción inválida. Por favor, ingrese un número entre 1 y 3.");
    indice = parseInt(prompt("Ingrese el número del producto que desea comprar:\n" + lista)) - 1;
  }

  return indice;
}


function agregarDiscoDuro() {
  let respuesta = prompt("¿Desea agregar un disco duro a su compra? (1 para sí/ o enter para no)");

  if (respuesta === "1" ) {
    let lista = "";
    for (let i = 3; i < 6; i++) {
      lista += `${i - 2}. ${productos[i]} - $${precios[i]} (Stock: ${stock[i]})\n`;
    }

    let indice = parseInt(prompt("Seleccione el disco duro que desea agregar:\n" + lista)) - 1;

    while (indice < 0 || indice >= 3 || isNaN(indice)) {
      alert("Opción inválida. Por favor, ingrese un número entre 1 y 3.");
      indice = parseInt(prompt("Seleccione el disco duro que desea agregar:\n" + lista)) - 1;
    }

    alert(`Agregaste ${productos[indice + 3]} al carrito 🛒`);
    return precios[indice + 3];
  } else {
    alert("No se agregó ningún disco duro.");
    return 0;
  }
}


function agregarMemoriaRAM() {
  let respuesta = prompt("¿Desea agregar memoria RAM a su compra? (preciona 1 sí o enter para no)");

  if (respuesta === "1" ) {
    let lista = "";
    for (let i = 6; i < 9; i++) {
      lista += `${i - 5}. ${productos[i]} - $${precios[i]} (Stock: ${stock[i]})\n`;
    }

    let indice = parseInt(prompt("Seleccione la memoria RAM que desea agregar:\n" + lista)) - 1;

    while (indice < 0 || indice >= 3 || isNaN(indice)) {
      alert("Opción inválida. Por favor, ingrese un número entre 1 y 3.");
      indice = parseInt(prompt("Seleccione la memoria RAM que desea agregar:\n" + lista)) - 1;
    }

    alert(`Agregaste ${productos[indice + 6]} al carrito 🛒`);
    return precios[indice + 6];
  } else {
    alert("No se agregó ninguna memoria RAM.");
    return 0;
  }
}


let productoPrincipal = seleccionarProducto();
alert(`Agregaste ${productos[productoPrincipal]} al carrito 🛒`);

let total = precios[productoPrincipal];


let precioDisco = agregarDiscoDuro();
if (precioDisco > 0) {
  total += precioDisco;
}


let precioRAM = agregarMemoriaRAM();
if (precioRAM > 0) {
  total += precioRAM;
}


alert(`Resumen de compra:
Producto principal: ${productos[productoPrincipal]}
Total sin IVA: $${total}
IVA (19%): $${(total * iva).toFixed(0)}
💰 Total final: $${(total * (1 + iva)).toFixed(0)}
Gracias por su compra`);
