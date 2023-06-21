# Mi Proyecto

Este proyecto es una aplicación web desarrollada utilizando React.js. Se trata de una tienda en línea de productos electrónicos, donde los usuarios pueden explorar y comprar productos de diferentes categorías.

## Características

- Muestra una lista de productos en la página principal, organizados por categoría.
- Los usuarios pueden hacer clic en un producto para ver más detalles.
- Se puede agregar un producto al carrito de compras desde la página de detalles del producto.
- El carrito de compras muestra los productos seleccionados, la información del comprador y el total de la compra.
- Los usuarios pueden confirmar la compra y recibir un ID de orden.
- La aplicación utiliza Firebase para almacenar y recuperar los datos de los productos, así como para registrar las órdenes de compra.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- `src`
  - `components`: Contiene los componentes reutilizables de la aplicación.
    - `CartItem`: Componente que muestra un elemento del carrito de compras.
    - `Cart`: Componente que muestra el carrito de compras y la información del comprador.
    - `ItemCount`: Componente que muestra un contador de cantidad para agregar productos al carrito.
    - `ItemDetail`: Componente que muestra los detalles de un producto y permite agregarlo al carrito.
    - `ItemList`: Componente que muestra una lista de productos.
    - `Navbar`: Componente de la barra de navegación de la aplicación.
    - `OrderConfirm`: Componente que muestra la confirmación de la orden después de realizar una compra.
  - `Context`: Contiene el contexto de la aplicación y provee la funcionalidad del carrito de compras.
    - `CartContext`: Contexto que maneja el estado del carrito de compras.
  - `service`: Contiene los archivos de configuración y funciones para interactuar con Firebase.
    - `firebaseConfig.js`: Archivo de configuración de Firebase.
    - `firebaseFunctions.js`: Funciones para obtener y guardar datos en Firebase.
  - `App.js`: Componente principal que define las rutas y la estructura de la aplicación.
  - `index.js`: Punto de entrada de la aplicación.

## Instalación

1. Clona el repositorio en tu máquina local: `git clone <URL del repositorio>`
2. Navega al directorio del proyecto: `cd <directorio del proyecto>`
3. Instala las dependencias: `npm install`
4. Inicia la aplicación: `npm start`
5. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en funcionamiento.

## Tecnologías Utilizadas

- React.js: Biblioteca de JavaScript para construir interfaces de usuario.
- React Router: Biblioteca de enrutamiento para React.
- Firebase: Plataforma de desarrollo de aplicaciones web que proporciona servicios de alojamiento de bases de datos y autenticación.

## Contribución

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar tus propuestas a través de pull requests. Cualquier contribución será apreciada.

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
