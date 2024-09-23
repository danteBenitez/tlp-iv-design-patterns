export const ESTADOS = {
    OK: "Disponible",
    REPARACION: "En reparación"
} as const;

export type EquipoEstado = typeof ESTADOS.OK | typeof ESTADOS.REPARACION;

class Equipo {
    constructor(
        public nombre: string,
        public tipo: string,
        public estado: EquipoEstado
    ) { }
}

export class Inventario {
    private static instancia?: Inventario;
    private equipos: Equipo[] = [];

    private constructor() { }

    static obtenerInstancia() {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario()
        }
        return Inventario.instancia;
    }

    agregarEquipo(nombre: string, tipo: string, estado: EquipoEstado) {
        this.equipos.push(new Equipo(nombre, tipo, estado));
    }

    listarEquipos() {
        return this.equipos.map(e => ({
            nombre: e.nombre,
            tipo: e.tipo,
            estado: e.estado
        }))
    }
}

const inventario = Inventario.obtenerInstancia();
const inventario1 = Inventario.obtenerInstancia();

inventario.agregarEquipo("Notebook HP", "Portátil", "Disponible");
console.log(inventario.listarEquipos());

console.assert(inventario == inventario1, "Sólo puede existir una instancia de Inventario");


