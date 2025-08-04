import express from "express"
import path from "node:path"
import {fileURLToPath} from "node:url"
import checkoutRoutes from "./routes/checkout.routes.js"

// Configuramos express
const app = express()

// Configuramos express para que pueda entender json
app.use(express.json())

// Configuracion de archivos estaticos para mostrar el build de react
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, '../../checkout-contact-form/dist')));

// Rutas de la api
app.use("/api/checkout", checkoutRoutes)

// Ruta especial para el checkout
app.get("/checkout-step", (req, res) => {
    res.sendFile(path.join(__dirname, "../../checkout-contact-form/dist/index.html"))
})

// Hacemos un fallback para asegurar que cualquier ruta que no exista redirija al index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../checkout-contact-form/dist/index.html'));
});

export default app