// views/voice-view.js

// Importar el motor de plantillas nunjucks
const nunjucks = require('nunjucks');

// Función que muestra la vista de voz
exports.show = (voice) => {
    // Generar la página web que muestra el audio utilizando un archivo de plantilla llamado voice.njk
    const html = nunjucks.render('voice.njk', { voice });

    // Devolver la página web generada
    return html;
};