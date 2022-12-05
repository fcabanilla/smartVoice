// controllers/voiceController.js
/**
 * @swagger
 * /:
 *  get:
 *    summary: Genera una síntesis de voz a partir de un texto dado.
 *    description: Esta función utiliza técnicas de aprendizaje automático para generar una síntesis de voz natural a partir de un texto dado.
 *    parameters:
 *      - in: query
 *        name: text
 *        description: El texto que se desea convertir a voz.
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Un archivo de audio con la síntesis de voz generada.
 *        content:
 *          audio/mpeg:
 *            schema:
 *              type: string
 *              format: binary
 *      400:
 *        description: Un error ocurrió al procesar la petición.
 */
// Importar la función getVoice del módulo voice-model
const { getVoice } = require('../models/voice-model');

// Configurar la ruta GET /api/v1/voice
exports.index = async (req, res, next) => {
    // Obtener el texto del parámetro 'text' de la solicitud
    const text = req.query.text;

    // Obtener el audio con la síntesis de voz
    const audio = await getVoice(text);

    // Enviar el audio en la respuesta
    res.send(audio);
};