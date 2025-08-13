const prompt= require('prompt-sync')();//Entradas por consola
const path = "./db.json";//Direccionar hacia la base de datos
const fs= require('fs');//Manejo de Archivos Locales

//Modularización de Carga de la Data
function loadData(){
    if(!fs.existsSync(path)){
        fs.writeFileSync(path,"[]");
    };// Creo el archivo con data si no existe.
    const data = fs.readFileSync(path);//Cargo y Guardo la data en una variable
    return JSON.parse(data);//Retorno la data en formato JSON
}
function saveData(data){
    fs.writeFileSync(path,JSON.stringify(data));
}
function showMenu() {
  console.log("\n=== CRUD en consola con Node.js ===");
  console.log("1. Crear elemento");
  console.log("2. Listar elementos");
  console.log("3. Actualizar elemento");
  console.log("4. Eliminar elemento");
  console.log("5. Salir\n");

  let opcionUsuario = prompt("Selecciona una opción: ");
  return opcionUsuario;
}

function handleMenu(option) {
  switch (option) {
    case "1":
      createItem();
      break;
    case "2":
      listItems();
      break;
    case "3":
      updateItem();
      break;
    case "4":
      deleteItem();
      break;
    case "5":
      booleanito = false;
    default:
      console.log("Opción inválida.");
  }
}

function createItem(){
    let nombre = prompt("Ingresa un nombre: ");
    const id = Date.now();// ID Unico (Paso de milisegundos desde el 1 de Enero de 1970)
    const data = loadData();
    data.push({
        id,nombre
    });
    console.log(data);
    saveData(data);
    console.log("El elemento fue agregado!");
    showMenu();
}
let booleanito = true;

while(booleanito){
    let opcionUsuario= showMenu();
    handleMenu(opcionUsuario);
}

function listItems(){
    let data = loadData();
    console.table(data)
}

function updateItem(){
    const data = loadData();
    console.table(data);
    
    const cambio = parseInt(prompt("Digite el id del nombre a editar: "));
    const dataEncontrada = data.find(item => item.id === cambio);
    if (!dataEncontrada) {
        console.log("No se encontró un elemento con ese ID.");
        return;
    }
    console.log(dataEncontrada);
    const nuevoNombre = prompt(`Digite el nuevo nombre (actual: ${dataEncontrada.nombre}): `);
    dataEncontrada.nombre = nuevoNombre;

    saveData(data); 
    console.log("Nombre actualizado correctamente.");
}

function deleteItem(){
    const data = loadData();
    console.table(data);
    
    const cambio = parseInt(prompt("Digite el id del nombre a eliminar: "));
    const dataEncontrada = data.find(item => item.id === cambio);

    if (!dataEncontrada) {
        console.log("No se encontró un elemento con ese ID.");
        return;
    }
    console.log(dataEncontrada);
    const dataEiminada = data.filter(item => item.id !== cambio);

    saveData(dataEiminada); 
    console.log(" Elemento eliminado correctamente.");
}