/*.                                PRINCIPIOS S.O.L.I.D

En programación, SOLID es un acrónimo que representa cinco principios de diseño orientados a
objetos que buscan hacer el código más comprensible, flexible y mantenible.

Los 5 principios SOLID de diseño de aplicaciones de software son:

S – Single Responsibility Principle (SRP)
O – Open/Closed Principle (OCP)
L – Liskov Substitution Principle (LSP)
I – Interface Segregation Principle (ISP)
D – Dependency Inversion Principle (DIP)

Entre los objetivos de tener en cuenta estos 5 principios a la hora de escribir código encontramos:

- Crear un software eficaz: que cumpla con su cometido y que sea robusto y estable.

- Escribir un código limpio y flexible ante los cambios: que se pueda modificar fácilmente
según necesidad, que sea reutilizable y mantenible.

- Permitir escalabilidad: que acepte ser ampliado con nuevas funcionalidades de manera ágil.

- En definitiva, desarrollar un software de calidad.

En este sentido la aplicación de los principios SOLID está muy relacionada con la comprensión y
el uso de patrones de diseño, que nos permitirán mantener una alta cohesión y, por tanto, un 
bajo acoplamiento de software.          
*/



// ==========================
// PRINCIPIOS SOLID EN NODE.JS
// ==========================

/* 
S — Single Responsibility Principle (Responsabilidad Única)
------------------------------------------------------------
Un módulo/clase debe tener una única razón para cambiar.
Cada archivo o función debe encargarse de UNA sola cosa.

INCORRECTO: Una misma clase gestiona datos de usuario y también
se encarga de enviar emails.
*/

class UsuarioIncorrecto {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    guardarEnDB() {
        console.log(`Guardando ${this.nombre} en la base de datos`);
    }

    enviarEmailBienvenida() {
        console.log(`Enviando email a ${this.email}`);
    }
}

/*
¿Por qué está mal?
- Si cambia la lógica de base de datos o la de emails, debo modificar la misma clase.
- Está mezclando responsabilidades.
*/

// CORRECTO: Separar responsabilidades
class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    guardarEnDB() {
        console.log(`Guardando ${this.nombre} en la base de datos`);
    }
}

class ServicioEmail {
    enviarEmailBienvenida(usuario) {
        console.log(`Enviando email a ${usuario.email}`);
    }
}

/***********************************************************
O — Open/Closed Principle (Abierto/Cerrado)
------------------------------------------------------------
El código debe estar abierto a extensión pero cerrado a modificación.
Podemos agregar nuevas funcionalidades sin alterar el código existente.

INCORRECTO: Usar condicionales para cada tipo de pago.
*/
class ProcesarPagoIncorrecto {
    procesar(tipo, monto) {
        if (tipo === "tarjeta") {
            console.log(`Procesando pago con tarjeta: $${monto}`);
        } else if (tipo === "paypal") {
            console.log(`Procesando pago con PayPal: $${monto}`);
        }
        // Cada vez que haya un nuevo método, debo modificar este código.
    }
}

// CORRECTO: Usar polimorfismo para extender sin modificar
class MetodoPago {
    procesar(monto) {}
}

class PagoTarjeta extends MetodoPago {
    procesar(monto) {
        console.log(`Procesando pago con tarjeta: $${monto}`);
    }
}

class PagoPayPal extends MetodoPago {
    procesar(monto) {
        console.log(`Procesando pago con PayPal: $${monto}`);
    }
}

function procesarPago(metodo, monto) {
    metodo.procesar(monto);
}

/***********************************************************
L — Liskov Substitution Principle (Sustitución de Liskov)
------------------------------------------------------------
Las clases hijas deben poder reemplazar a las clases padres
sin alterar el funcionamiento del programa.

INCORRECTO: Una subclase rompe el comportamiento esperado.
*/
class AveIncorrecta {
    volar() {
        console.log("Esta ave vuela");
    }
}

class PinguinoIncorrecto extends AveIncorrecta {
    volar() {
        throw new Error("Los pingüinos no vuelan");
    }
}

/*
Esto es incorrecto porque la subclase no cumple el contrato
de la clase padre: rompe el comportamiento esperado.
*/

// CORRECTO: Reestructurar jerarquía
class Ave {
    comer() {
        console.log("Esta ave come");
    }
}

class AveVoladora extends Ave {
    volar() {
        console.log("Esta ave vuela");
    }
}

class Pinguino extends Ave {
    nadar() {
        console.log("El pingüino nada");
    }
}

/***********************************************************
I — Interface Segregation Principle (Segregación de Interfaces)
------------------------------------------------------------
No obligar a implementar métodos que no se usan.

INCORRECTO: Una interfaz obliga a implementar métodos innecesarios.
*/
class TrabajadorIncorrecto {
    trabajar() {}
    comer() {}
}

class RobotIncorrecto extends TrabajadorIncorrecto {
    comer() {
        throw new Error("Un robot no come");
    }
}

/*
Esto es malo porque estamos obligando a implementar cosas
que no aplican al objeto.
*/

// CORRECTO: Dividir interfaces
class Trabajador {
    trabajar() {}
}

class Comedor {
    comer() {}
}

class Humano extends Trabajador {
    comer() {
        console.log("Humano comiendo");
    }
}

class Robot extends Trabajador {}

/***********************************************************
D — Dependency Inversion Principle (Inversión de Dependencias)
------------------------------------------------------------
Los módulos de alto nivel no deben depender de módulos de bajo nivel;
ambos deben depender de abstracciones.

INCORRECTO: Una clase depende directamente de una implementación concreta.
*/
class MySQLDBIncorrecto {
    conectar() {
        console.log("Conectando a MySQL");
    }
}

class ServicioUsuarioIncorrecto {
    constructor() {
        this.db = new MySQLDBIncorrecto(); // Dependencia rígida
    }
    obtenerUsuarios() {
        this.db.conectar();
    }
}

// CORRECTO: Usar una abstracción
class BaseDatos {
    conectar() {}
}

class MySQLDB extends BaseDatos {
    conectar() {
        console.log("Conectando a MySQL");
    }
}

class MongoDB extends BaseDatos {
    conectar() {
        console.log("Conectando a MongoDB");
    }
}

class ServicioUsuario {
    constructor(db) {
        this.db = db; // Recibe la dependencia
    }
    obtenerUsuarios() {
        this.db.conectar();
    }
}

/***********************************************************
 * EJECUCIÓN DE PRUEBAS DE EJEMPLO
 ***********************************************************/

console.log("=== S — Single Responsibility ===");
const usuario = new Usuario("Ana", "ana@email.com");
usuario.guardarEnDB();
new ServicioEmail().enviarEmailBienvenida(usuario);

console.log("\n=== O — Open/Closed ===");
procesarPago(new PagoTarjeta(), 100);
procesarPago(new PagoPayPal(), 50);

console.log("\n=== L — Liskov ===");
const loro = new AveVoladora();
loro.volar();
const pingu = new Pinguino();
pingu.nadar();

console.log("\n=== I — Interface Segregation ===");
const humano = new Humano();
humano.comer();
const robot = new Robot();
robot.trabajar();

console.log("\n=== D — Dependency Inversion ===");
const servicio = new ServicioUsuario(new MongoDB());
servicio.obtenerUsuarios();
