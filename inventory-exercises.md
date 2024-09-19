# Ejercicios sobre Sistema de Inventario de Equipos Informáticos en TypeScript

## Ejercicio 1: Implementar Patrón Singleton para el Inventario

**Objetivo**: Implementar un patrón **Singleton** para gestionar un inventario de equipos informáticos.

- Crear una clase `Inventario` que siga el patrón Singleton.
- Esta clase debe permitir registrar equipos con las propiedades `nombre`, `tipo` y `estado` (Ej.: "disponible", "en reparación").
- Agregar un método `agregarEquipo` para añadir equipos y un método `listarEquipos` para devolver la lista completa de equipos registrados.

**Ejemplo de salida esperada:**

```typescript
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());
// [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]
```

## Ejercicio 2: Implementar Patrón Factory Method para Crear Equipos

**Objetivo**: Utilizar el patrón **Factory Method** para crear diferentes tipos de equipos.

- Crear una clase `EquipoFactory` con un método `crearEquipo` que, basado en el tipo de equipo ("Notebook", "Desktop", "Servidor"), devuelva una instancia de la clase adecuada.
- Crear clases específicas para cada tipo de equipo (`Notebook`, `Desktop`, `Servidor`), cada una con sus propias propiedades (Ej.: `ram`, `procesador`).

**Ejemplo de salida esperada:**

```typescript
const factory = new EquipoFactory();
const Notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(Notebook.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7
```

## Ejercicio 3: Implementar Patrón Observer para Seguimiento del Estado

**Objetivo**: Utilizar el patrón **Observer** para notificar a un departamento de soporte cuando un equipo cambia de estado.

- Crear una clase `Soporte` que actúe como observador y reciba notificaciones cuando el estado de un equipo cambie.
- Implementar la clase `Equipo` que permita agregar observadores y notifique a los observadores cuando su estado cambie.

**Ejemplo de salida esperada:**

```typescript
const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.
```

## Ejercicio 4: Adaptador para Cambiar la Interfaz de Inventarios Viejos

**Objetivo**: Implementar el patrón **Adaptador** para integrar una clase antigua de inventario con el nuevo sistema.

- Crear una clase `InventarioViejo` que tenga un método `agregarItem`.
- Implementar una clase `AdaptadorInventario` que permita utilizar `InventarioViejo` con la nueva interfaz `Inventario`.

**Ejemplo de salida esperada:**

```typescript
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]
```
