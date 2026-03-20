# Country Explorer - Laboratorio 06

Esta aplicación web desarrollada para el curso de Fundamentos de Aplicaciones Web. Permite a los usuarios buscar, filtrar y guardar información detallada sobre todos los países del mundo consumiendo la REST Countries API.

## Tecnologías Utilizadas
* **Lenguaje:** TypeScript (Vanilla)
* **Estilos:** Tailwind CSS 4
* **Build Tool:** Vite
* **Datos:** Fetch API (REST Countries)

## Características Implementadas

### Parte 1: Filtros Combinados Optimizados
* **Búsqueda Dinámica:** Interfaz que combina entrada de texto y un menú desplegable de continentes (Africa, Americas, Asia, Europe, Oceania).
* **Optimización de API:** Lógica condicional inteligente en `main.ts` que decide si consumir el endpoint de texto, el de región, o realizar un `.filter()` local, evitando Errores 400 por saturación del servidor.
* **Manejo de Estados:** Renderizado reactivo de la UI (loading, empty, error, success) basado en un único estado centralizado.

### Parte 2: Sistema de Favoritos con LocalStorage
* **Persistencia de Datos:** Implementación de utilidades modulares (`storage.ts`) para guardar, leer y eliminar los códigos (CCA3) de los países en el `localStorage` del navegador.
* **Interactividad en Tarjetas:** Botón de "corazón" inyectado dinámicamente en el componente `CountryCard.ts`, utilizando `event.stopPropagation()` para aislar el clic del contenedor principal.
* **Toggle de Vista:** Interruptor visual diseñado con Tailwind que intercepta la lógica de búsqueda principal para renderizar exclusivamente los países guardados en memoria.
* **Clear Storage:** Botón dedicado para limpiar el registro del almacenamiento local y resetear la vista al instante.

---

**Link del video explicativo del laboratorio:**
[https://youtu.be/MuObwAilEhQ]
