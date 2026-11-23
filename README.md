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