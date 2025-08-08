# Prueba Tecnica Mercado Libre

## Descripción General
Esta prueba de concepto (POC) tuvo como objetivo resolver el problema planteado en el documento técnico: la alta tasa de errores relacionados con la información de contacto en el proceso previo al checkout final.

La solución se desarrolló conforme a lo solicitado, implementando un formulario previo para confirmar los datos de contacto mínimos requeridos, con validación mediante captcha y verificación de parámetros de consulta (query params) para garantizar que la vista se cargue únicamente desde el paso anterior especificado en el referrer, junto con un token de prueba que también se valida en el backend. Este backend se montó como un servicio en Node.js para realizar dichas validaciones, permitir la continuidad al siguiente paso simulando el envío del formulario, y servir los archivos estáticos generados en el build de React.

En cuanto al proceso de compilación, el comando yarn build presentó errores, pero se logró generar el build correctamente utilizando yarn build:dev, lo cual fue suficiente para los fines de esta POC. Se intentó diagnosticar el problema del build normal, pero demandaba más tiempo del estimado y se priorizó avanzar en las demás funcionalidades.

Esta POC también busca evidenciar mis habilidades como desarrollador, con un énfasis en el frontend, área que más domino, pero demostrando igualmente que puedo desenvolverme con confianza en el entorno de Node.js. En el frontend, se abordaron aspectos de experiencia de usuario, optimización de performance en el código, y tratamiento de assets, como la optimización del logo de Mercado Libre para mejorar su tamaño y calidad sin perder nitidez.


------------



## Pasos para correr el proyecto localmente
### Pasos Generales
- Clonar el proyecto completo
`git clone https://github.com/devRony1710/prueba-meli.git`
- Nos movemos a la carpeta del proyecto
`cd prueba-meli`
- Es necesario tener corriendo ambos proyectos, si desea ver el front en un ambiente separado en el puerto **5173**,  es necesario tener el proyecto node js (server) corriendo para que funcionen los endpoints, también se puede ver el proyecto solo corriendo el servicio de node, desde el puerto **3000**, en localhost:3000 ya que se simula un ambiente desplegado de producción.

### Configuración Frontend
- Una vez clonado el proyecto completo, nos movemos a la carpeta **/checkout-contact-form**
`cd checkout-contact-form`
- Dentro de la carpeta, ejecutamos el comando **yarn install** para instalar las dependencias necesarias para correr el proyecto.
`yarn install`
- Al terminar de instalar dependencias, podemos ejecutar el comando **yarn dev** y veremos corriendo el proyecto del front en el puerto **5173**, podemos ingresar y verlo en el navegador desde: 
`localhost:5173`
- Es necesario para correr el proyecto tener las siguientes variables de entorno
``VITE_RECAPTCHA_SITE_KEY=6LfFqZwrAAAAAPkkXEgq2alZjBQuyNVIUfTKChyz
`` La api key será eliminada 14 días luego de entregar la prueba.
- Para generar el build hacemos uso de **yarn build** y en caso de error, intentar con **yarn build:dev** ambos generan el estatico necesario para realizar la prueba (Leer descripción problema al generar build)

### Configuración backend
- Desde la carpeta principal **/prueba-meli** procedemos a movernos a la carpeta **/server**
`cd server`
- Al estar dentro de la carpeta server ejecutamos **npm install** para instalar las dependencias necesarias.
`npm install`
- Al terminar de instalar todas las dependencias, podemos iniciar el servidor desde la consola ejecutando, **npm run start**. Y veremos corriendo el proyecto en el puerto **3000**.
`npm run start`
- Es necesario para correr el proyecto tener las siguientes variables de entorno
``PORT=3000
``
- Para tener la versión más reciente, desde el proyecto de react, genera el respectivo build para gener el archivo estatico, si el comando **yarn build** te lanza algún error, prueba intentando con **yarn build:dev**, ambos generan el estatico necesario para servirlo en el backend.
------------

### Estructura del proyecto
#### Frontend:
````bash
 checkout-contact-form/    # Frontend con React + Vite + TypeScript
│   ├── src/
│   │   ├── components/       # Componentes reutilizables
│   │   ├── pages/            # Páginas de la SPA
│   │   ├── routes/            # Configuración de las rutas
│   │   ├── templates/        # Plantillas para vistas
│   │   ├── hooks/            # Custom hooks
│   │   ├── locales/            # Traducciones en formato json
│   └── vite.config.ts        # Configuración de Vite y alias
````
#### Backend:
````bash
├──server/                   # Backend con Node.js + Express
│    ├── src/
│    │   ├── routes/           # Definición de endpoints
│    │   ├── controllers/      # Lógica de negocio
│    │   ├── config/      # Configuración de dotenv
│    │   ├── middleware/      # Para validación de tokens
│    │   └── server/          # Inicialización del server
│    │   └── app.js          # Configuración principal de Express
│   └── package.json
````


------------
### Requerimientos
Cada uno de los requerimientos aquí descritos fueron los escenarios que decidí abordar según mi interpretación del problema. Espero haber cubierto gran parte de lo que se buscaba evaluar, sin embargo en un escenario de la vida real, si no me queda claro un requerimiento, vuelvo a preguntar sobre mis dudas para así siempre estar al pendiente de lo que en verdad se necesita.

#### Servidor
Se implementó el renderizado del build generado en el frontend de React, sirviendo los archivos estáticos a través de una ruta específica en el backend, permitiendo que la aplicación pueda ejecutarse en un entorno de producción desde el mismo servidor.

#### Captcha
Se integró el servicio de Google reCAPTCHA para verificar que el usuario no sea un bot. Esta funcionalidad se implementó mediante lazy loading de componentes en React, gestionando su respectivo Suspense y fallback para optimizar la carga y mejorar la experiencia de usuario. Para la integración se utilizó la librería react-google-recaptcha.

#### Peticiones
Se realizaron peticiones a diversos endpoints implementados en el backend: validación de token y referrer, obtención de la lista de países, obtención de la información del usuario (todos de tipo GET) y simulación del envío al siguiente paso (next step, de tipo POST). Para el manejo eficiente de solicitudes HTTP se utilizó React Query de TanStack Query, permitiendo control de estados de carga, error y caché. Las llamadas a los servicios del backend se implementaron con funciones asíncronas, evitando bloqueos en la aplicación y asegurando una experiencia de usuario fluida.

#### Validación Query Params (referrer y token)
Se implementaron validaciones sobre los query params de la ruta para garantizar que el proceso cuente con toda la información necesaria y evitar fallos. En caso de que estos parámetros no estén presentes, el usuario es redirigido a una vista 404 Not Found. Además, se valida mediante un endpoint que los query params hayan sido recibidos correctamente y, al momento de enviar el formulario, dichos parámetros se incluyen en la redirección a la siguiente ruta para mantener la información que debe compartirse entre vistas.

#### Si el usuario tiene datos
En la página de inicio se presentan dos botones que permiten simular dos escenarios distintos: en el primero, se carga un formulario completamente vacío; en el segundo, se simula la existencia de datos previamente registrados, los cuales se obtienen desde un endpoint que devuelve la información del usuario.

#### Feedback
Se incorporaron mensajes de feedback en los procesos del usuario dentro del formulario mediante notificaciones tipo toast utilizando React Hot Toast, brindando una comunicación clara y no intrusiva sobre el estado de las acciones realizadas.

#### Validaciones
En la prueba de concepto se implementaron validaciones en los campos de entrada y selectores del formulario utilizando React Hook Form para la gestión del estado y envío, junto con Zod para aplicar validaciones automáticas y tipadas, garantizando la integridad de los datos antes de su procesamiento.

#### Internacionalización
En la prueba de concepto (POC) no implementé la configuración de traducciones basadas en dominio; en su lugar, utilicé un botón en el navbar para cambiar manualmente el idioma. Sin embargo, en un entorno real configuraría el idioma mapeando los dominios en un objeto, donde cada key corresponde a un dominio (por ejemplo, "mercadolibre.pt") y cada value representa el código de idioma asociado (por ejemplo, "es", "pt" o "en"). Luego, crearía una función que obtenga el window.location.hostname, lo busque en ese mapa y devuelva el idioma correspondiente. Ese valor se utilizaría al inicializar la configuración de i18n, asegurando que el idioma de la interfaz se establezca automáticamente según el dominio desde el primer render.

#### No script (alternativa)
La verdad no tengo muy claro como podría implementar dicha alternativa, sin embargo buscando en el proceso encontre articulos que indicaban formas de SSR a través de frameworks como next cargando html previamente generado. Se que si aplico la investigación necesaria podría encontrar dicha solución, sin embargo no me quedo muy claro como implementarlo a nivel detallado en una primera instancia. 

### Ejemplo
Video de ejemplo corriendo el servidor local del front en el proyecto checkout-contact-form pero a su vez corriendo el backend en el puerto 3000 para poder usar los endpoints y simular un ambiente de producción. También se puede hacer la misma prueba corriendo solo el entorno backend y accendiendo a localhost:3000, para esto primero es necesario generar el build desde el proyecto react (En caso de no tener la carpeta dist con el html previamente generado).
https://github.com/user-attachments/assets/9225c80b-6155-441b-9565-ca4393379cd6


## Informacion adicional
En el siguiente enlace podrán encontrar documentación más detallada sobre el proyecto. Generada con ayuda de IA a través de github.
https://deepwiki.com/devRony1710/prueba-meli/1-overview