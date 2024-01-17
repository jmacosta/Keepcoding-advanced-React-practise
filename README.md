# Proyecto de Anuncios

Este proyecto se centra en la gestión de anuncios, permitiendo a los usuarios realizar diversas acciones como crear, ver y buscar anuncios, entre otras funcionalidades.

## Estructura de Carpetas

El proyecto está organizado en varias carpetas principales:

- `src/`
  - `api/`: Contiene archivos relacionados con la gestión de peticiones a la API.
  - `components/`: Contiene los componentes reutilizables en varias partes del proyecto, 
  - `assets/`: Contiene imasgenes y recursos usados en varias partes del proyecto, 
  - `pages/`: Contiene las páginas principales de la aplicación organizadas por funcionalidad, como AdvertsPage, AdvertPage, NewAdvertPage, LoginPage, etc.
  - `utils/`: Incluye algunas funciones usadas en distintos componentes que no pertenecen a los servicios propios de la API.
  
## Funcionalidades Principales

### Adverts

- **AdvertsPage**: Página que muestra todos los anuncios disponibles.
- **NewAdvertPage**: Página que permite la creación de un anuncio.
- **AdvertPage**: Página que muestra detalles de un anuncio específico.

### Autenticación

- **Login**: Página para iniciar sesión.


## Enrutamiento y Navegación

Se hace uso de `react-router-dom` para gestionar las rutas y la navegación dentro de la aplicación.
Se implementan rutas públicas y protegidas, como las relacionadas con la autenticación y el acceso a ciertas funcionalidades.

## Ejecución del Proyecto

Para ejecutar este proyecto localmente:

1. Clona el repositorio: `git clone https://github.com/jmacosta/keepcoding_wallaReact`
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`

## Dependencias Principales

- **react**: Librería principal para construir interfaces de usuario.
- **react-router-dom**: Manejo de enrutamiento y navegación.
- **axios**: Llamadas a la api externa.


## Notas Importantes

- Asegúrate de tener las variables de entorno correctamente configuradas para el funcionamiento adecuado de la aplicación.