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

### Configuración Frontend
- Una vez clonado el proyecto completo, nos movemos a la carpeta **/checkout-contact-form**
`cd checkout-contact-form`
- Dentro de la carpeta, ejecutamos el comando **yarn install** para instalar las dependencias necesarias para correr el proyecto.
`yarn install`
- Al terminar de instalar dependencias, podemos ejecutar el comando **yarn dev** y veremos corriendo el proyecto del front en el puerto **5173**, podemos ingresar y verlo en el navegador desde: 
`localhost:5173`

### Configuración backend
- Desde la carpeta principal **/prueba-meli** procedemos a movernos a la carpeta **/server**
`cd server`
- Al estar dentro de la carpeta server ejecutamos **npm install** para instalar las dependencias necesarias.
`npm install`
- Al terminar de instalar todas las dependencias, podemos iniciar el servidor desde la consola ejecutando, **npm run start**. Y veremos corriendo el proyecto en el puerto **3000**.
`npm run start`

------------

### Estructura del proyecto
#### Frontend:
````bash
├── checkout-contact-form/    # Frontend con React + Vite + TypeScript
│   ├── src/
│   │   ├── components/       # Componentes reutilizables
│   │   ├── pages/            # Páginas de la SPA
│   │   ├── routes/            # Configuración de las rutas
│   │   ├── templates/        # Plantillas para vistas
│   │   ├── hooks/            # Custom hooks
│   │   ├── locales/            # Traducciones en formato json
│   └── vite.config.ts        # Configuración de Vite y alias
```
#### Backend
````bash
server/                   # Backend con Node.js + Express
    ├── src/
    │   ├── routes/           # Definición de endpoints
    │   ├── controllers/      # Lógica de negocio
    │   ├── config/      # Configuración de dotenv
    │   ├── middleware/      # Para validación de tokens
    │   └── server/          # Inicialización del server
    │   └── app.js          # Configuración principal de Express
    └── package.json
```


------------
### Requerimientos

#### Internacionalización
En la prueba de concepto (POC) no implementé la configuración de traducciones basadas en dominio; en su lugar, utilicé un botón en el navbar para cambiar manualmente el idioma. Sin embargo, en un entorno real configuraría el idioma mapeando los dominios en un objeto, donde cada key corresponde a un dominio (por ejemplo, "mercadolibre.pt") y cada value representa el código de idioma asociado (por ejemplo, "es", "pt" o "en"). Luego, crearía una función que obtenga el window.location.hostname, lo busque en ese mapa y devuelva el idioma correspondiente. Ese valor se utilizaría al inicializar la configuración de i18n, asegurando que el idioma de la interfaz se establezca automáticamente según el dominio desde el primer render.