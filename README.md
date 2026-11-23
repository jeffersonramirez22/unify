# UNiFY — Plataforma de venta de boletos

## Descripción del proyecto

UNiFY es una aplicación web desarrollada con React y Vite que permite explorar eventos, seleccionar boletos y simular su compra mediante una interfaz intuitiva y responsive.

El proyecto mantiene la identidad visual del prototipo elaborado en Figma, utilizando sus colores, tipografía, imágenes y logotipo.

## Tecnologías utilizadas

- React
- JavaScript
- HTML5
- CSS3
- Vite
- React Hooks
- LocalStorage
- qrcode.react
- Git y GitHub

## Funcionalidades principales

### Autenticación y usuarios
- Inicio de sesión.
- Registro de usuarios.
- Recuperación de contraseña simulada.
- Gestión de usuarios.
- Control de acceso según el rol.

### Catálogo de eventos
- Visualización de ocho eventos.
- Imágenes, categorías, fechas y precios.
- Selección de eventos.
- Diseño responsive.

### Carrito de compra
- Selección de zona.
- Selección de cantidad de boletos.
- Cálculo automático del total.

### Pago simulado
- Formulario de pago.
- Validación de datos.
- Confirmación de compra.
- Prevención de envíos duplicados.

**Nota:** La aplicación no procesa pagos reales.

### Boletos digitales
- Generación de comprobantes.
- Código único de compra.
- Código QR.
- Información del evento y comprador.

### Reportes y analítica
- Total de boletos vendidos.
- Ingresos acumulados.
- Número de compras realizadas.
- Ventas por evento.
- Ventas por fecha.

## Componentes reutilizables

El proyecto utiliza componentes React para mantener una estructura organizada.

Entre ellos se encuentran:

- `Boton.jsx`: componente reutilizable para botones.
- `TarjetaEvento.jsx`: componente para representar eventos del catálogo.

## Instalación y ejecución

### Requisitos previos

- Node.js
- npm

### Pasos

1. Clonar el repositorio:

```bash
git clone https://github.com/jeffersonramirez22/unify.git
```

2. Entrar al proyecto:

```bash
cd unify
```

3. Instalar dependencias:

```bash
npm install
```

4. Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador la dirección indicada por Vite, normalmente:

```text
http://localhost:5173/
```

### Compilación de producción

```bash
npm run build
```

## Diseño y accesibilidad

La aplicación está diseñada para adaptarse a diferentes resoluciones:

- Móvil: 375 px.
- Tablet: 768 px.
- Escritorio: 1440 px.

Se utilizan elementos semánticos, etiquetas de formularios, mensajes de validación y controles accesibles.

## Almacenamiento

UNiFY utiliza LocalStorage para almacenar información de demostración, incluyendo compras y boletos.

No utiliza una pasarela de pago real ni un servidor de base de datos.

## Pruebas realizadas

- Navegación entre módulos.
- Inicio y cierre de sesión.
- Restricciones de acceso por rol.
- Selección de eventos y boletos.
- Validación del pago simulado.
- Generación de boletos QR.
- Actualización de reportes.
- Compilación de producción con Vite.

## Repositorio

https://github.com/jeffersonramirez22/unify

## Propósito académico

Proyecto desarrollado con fines educativos para aplicar conceptos de desarrollo web, componentes React, gestión de estados, navegación, diseño responsive e integración de funcionalidades.

## Inventario de componentes

UNiFY está organizado en diferentes componentes y pantallas de React para facilitar el desarrollo y mantenimiento.

| Componente | Función |
|---|---|
| App.jsx | Controla la navegación y conecta los módulos principales. |
| Login.jsx | Permite iniciar sesión. |
| Registro.jsx | Permite registrar nuevos usuarios. |
| Recuperar.jsx | Simula la recuperación de contraseña. |
| GestionUsuarios.jsx | Permite administrar usuarios. |
| Eventos.jsx | Muestra el catálogo de eventos. |
| Carrito.jsx | Permite seleccionar boletos y calcular el total. |
| Pago.jsx | Valida los datos del pago simulado. |
| Boleto.jsx | Muestra el boleto digital con código QR. |
| Reportes.jsx | Presenta estadísticas de ventas. |
| Boton.jsx | Componente reutilizable para botones. |
| TarjetaEvento.jsx | Componente reutilizable para las tarjetas de eventos. |
| TarjetaEstadistica.jsx | Muestra los indicadores de reportes. |
| BarraEstadistica.jsx | Muestra las barras de ventas por evento y período. |

Los componentes se comunican mediante propiedades (props) y funciones que permiten actualizar la información de la interfaz.

## Mapa de estado y persistencia

Para manejar los cambios en la aplicación utilizamos React Hooks.

| Estado o información | Ubicación | Función |
|---|---|---|
| Usuario autenticado | useAuth | Controlar la sesión del usuario. |
| Vista actual | App.jsx | Determinar qué pantalla se muestra. |
| Evento seleccionado | App.jsx | Enviar el evento al carrito. |
| Compra en proceso | App.jsx | Compartir los datos entre carrito y pago. |
| Compra finalizada | App.jsx | Mostrar el boleto correspondiente. |
| Datos del formulario | Pago.jsx | Validar los campos antes de confirmar. |
| Ventas registradas | localStorage | Conservar las compras simuladas. |
| Estadísticas | Reportes.jsx | Calcular boletos vendidos e ingresos. |

El estado se maneja principalmente con `useState`. También utilizamos `useEffect` para ejecutar acciones relacionadas con cambios de estado.

Las compras se guardan en `localStorage` mediante la clave `unify_boletos`. Los reportes consultan estos datos para mostrar las estadísticas.

## Datos simulados

La aplicación utiliza información de demostración para representar el funcionamiento de una plataforma de venta de boletos.

Los eventos se encuentran definidos en `src/data/eventos.js`, mientras que los datos iniciales de usuarios están en `src/data/usuarios.js`.

Cada evento contiene información como nombre, categoría, fecha, lugar, imagen y zonas con diferentes precios.

Los formularios de pago utilizan datos ficticios. No se realizan cobros reales ni se conecta una pasarela de pago.

## Flujo de estado durante la compra

1. El usuario inicia sesión.
2. Selecciona un evento del catálogo.
3. El evento seleccionado se envía al carrito mediante props.
4. El usuario selecciona la zona y cantidad de boletos.
5. El carrito calcula el total y envía la información al módulo de pago.
6. El formulario valida los datos ingresados.
7. Al confirmar, la compra se guarda en `localStorage`.
8. Se genera el boleto digital con código QR.
9. El módulo de reportes utiliza los registros para calcular las estadísticas.

## Limitaciones y decisiones de diseño

- Se utilizó React con Vite para desarrollar una aplicación organizada en componentes.
- Se mantuvo como referencia el prototipo de Figma de la primera entrega.
- Se utilizaron los colores, imágenes, tipografía y logotipo de UNiFY.
- El diseño contempla versiones para móvil, tablet y escritorio.
- La navegación se controla mediante estados de React.
- No se implementó un backend ni una base de datos real.
- Los pagos son simulados y no procesan transacciones bancarias.
- La información almacenada en `localStorage` depende del navegador utilizado.
- Los datos no se sincronizan automáticamente entre diferentes dispositivos.

## Evidencias de funcionamiento

Las capturas de pantalla se encuentran en la carpeta `public/Capturas`.

Se incluyen evidencias de la aplicación en los siguientes tamaños:

- Móvil: 375 px.
- Tablet: 768 px.
- Escritorio: 1440 px.

## Documento de arquitectura

El documento complementario `Arquitectura_UNiFY.pdf` describe la organización de componentes, el manejo del estado, la persistencia y el flujo principal de