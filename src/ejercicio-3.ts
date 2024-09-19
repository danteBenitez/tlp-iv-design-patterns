export type Estado = "disponible" | "en reparación"

interface Observable<TPayload = never> {
    notificar(body: TPayload): void;
    agregarObservador(o: Observador<TPayload>): void;
    removerObservador(o: Observador<TPayload>): void;
}

interface Observador<TPayload = never> {
    actualizar(body: TPayload): void;
}

type EventoCambioDeEstado = {
    estadoAnterior: Estado,
    equipo: Equipo
}

class Soporte implements Observador<EventoCambioDeEstado> {
    actualizar(body: EventoCambioDeEstado): void {
        console.log(`Soporte actualizado: ${body.equipo.modelo} actualizó su estado de ${body.estadoAnterior} a ${body.equipo.estado}`);
    }
}

class Equipo implements Observable<EventoCambioDeEstado> {
    private observadores: Observador<EventoCambioDeEstado>[] = [];

    constructor(
        private _modelo: string,
        private _tipo: string,
        private _estado: Estado
    ) { }

    get modelo() { return this._modelo }
    get tipo() { return this._tipo }
    get estado() { return this._estado }

    cambiarEstado(estado: Estado) {
        const estadoAnterior = this.estado;
        this._estado = estado;
        this.notificar({
            estadoAnterior,
            equipo: this
        });
    }

    agregarObservador(o: Observador<EventoCambioDeEstado>): void {
        this.observadores.push(o);
    }

    removerObservador(o: Observador<EventoCambioDeEstado>): void {
        this.observadores = this.observadores.filter(elem => elem !== o);
    }

    notificar(body: EventoCambioDeEstado): void {
        this.observadores.map(o => o.actualizar(body));
    }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.