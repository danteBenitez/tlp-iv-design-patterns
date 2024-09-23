type TipoEquipo = "Notebook" | "Desktop" | "Servidor" | "Impresora";

const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1);

class Equipo {

    constructor(
        private tipo: TipoEquipo,
        private caracteristicas: Record<string, any>
    ) { }


    detalles(): string {
        const caracteristicas = Object.entries(this.caracteristicas).map(([nombre, valor]) => {
            return `${capitalize(nombre)}: ${valor}`;
        }).join(", ");
        return `Tipo: ${this.tipo}, ${caracteristicas}`;
    }
}

class Notebook extends Equipo {
    constructor(modelo: string, ram: string, procesador: string) {
        super("Notebook", { modelo, ram, procesador });
    }
}

class Desktop extends Equipo {
    constructor(modelo: string, ram: string, procesador: string) {
        super("Desktop", { modelo, ram, procesador });
    }
}

class Servidor extends Equipo {
    constructor(
        private modelo: string,
        private ram: string,
        private procesador: string
    ) {
        super("Servidor", { modelo, ram, procesador });
    }
}

class Impresora extends Equipo {
    constructor(
        private modelo: string,
        private color: boolean,
        private tipoImpresion: "laser" | "tinta"
    ) {
        super("Impresora", { modelo, color, tipoImpresion })
    }
}

class EquipoFactory {
    constructor() { }

    // La sobrecarga de métodos, en TypeScript, nos permite pasar distintos datos
    // según el tipo de equipo, manteniendo la seguridad de tipo. 
    // Véase: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
    crearEquipo(tipo: "Notebook", modelo: string, ram: string, procesador: string): Notebook
    crearEquipo(tipo: "Desktop", modelo: string, ram: string, procesador: string): Desktop
    crearEquipo(tipo: "Servidor", modelo: string, ram: string, procesador: string): Servidor
    crearEquipo(tipo: "Impresora", modelo: string, color: boolean, tipoImpresora: "laser" | "tinta"): Servidor
    crearEquipo(tipo: TipoEquipo, modelo: string, colorORam: string | boolean, procesadorOTipo: string): Equipo {
        if (tipo == "Notebook") {
            return new Notebook(modelo, colorORam as string, procesadorOTipo);
        } else if (tipo == "Desktop") {
            return new Desktop(modelo, colorORam as string, procesadorOTipo);
        } else if (tipo == "Servidor") {
            return new Servidor(modelo, colorORam as string, procesadorOTipo);
        } else {
            return new Impresora(modelo, colorORam as boolean, procesadorOTipo as "laser" | "tinta");
        }
    }

}

const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
const impresora = factory.crearEquipo("Impresora", "HP", false, "laser");
console.log(notebook.detalles());
console.log(impresora.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7k