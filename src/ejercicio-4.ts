import { Estado } from "./ejercicio-3";

type TipoEquipo = "Servidor" | "Notebook" | "Desktop";

type Equipo = {
    nombre: string,
    tipo: TipoEquipo,
    estado: Estado
}


class InventarioViejo {
    private equipos: Equipo[] = [];

    agregarItem(equipo: Equipo) {
        this.equipos.push(equipo);
    }

    obtenerEquipos() {
        return this.equipos;
    }
}

class AdaptadorInventario {
    constructor(
        private inventario: InventarioViejo
    ) { }

    agregarEquipo(nombre: string, tipo: TipoEquipo, estado: Estado) {
        this.inventario.agregarItem({ nombre, tipo, estado });
    }

    listarEquipos() {
        return this.inventario.obtenerEquipos();
    }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]
