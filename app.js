// app.js

// Importar módulos necesarios
require('dotenv').config();
const express = require("express");
const nunjucks = require("nunjucks");
const voiceController = require('./controllers/voice-controller');
const swaggerUi = require('swagger-ui-express'); // Importa swagger-ui-express
const swaggerJsdoc = require('swagger-jsdoc');
const path = require("path");
const key = process.env.KEY; // La clave de API se obtiene de la variable de entorno

// Inicializar Express
const app = express();

// Configurar Nunjucks para que use el directorio de vistas de Express
nunjucks.configure(app.get("views"), {
    express: app,
    autoescape: true,
});

// Configurar Express para utilizar nunjucks como motor de plantillas
app.set("view engine", "njk");

// Configurar Swagger utilizando swagger-jsdoc
const options = {
    swaggerDefinition: {
        info: {
            title: 'Smart Voice API',
            version: '1.0.0',
        },
        basePath: '/',
    },
    apis: ['./controllers/voice-controller.js'],
};
const specs = swaggerJsdoc(options);

// Configurar el middleware de Swagger en Express
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Configurar rutas de Express
app.get("/", voiceController.index);

// Obtiene un cliente autenticado
const client = await auth.getClient({
    key: key,
});

// Iniciar servidor Express en el puerto 3000
app.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000");
});