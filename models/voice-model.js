//models/voice-model.js

// Importar la librería @google-cloud/text-to-speech
const textToSpeech = require('@google-cloud/text-to-speech');

// Función que obtiene la síntesis de voz
const getVoice = async (text) => {
    // Crea un cliente del API de Google Cloud
    const client = new textToSpeech.TextToSpeechClient();

    // Construye la solicitud al API con el texto dado
    const request = {
        input: { text: text },
        // Selecciona el idioma y el género de la voz SSML (opcional)
        voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
        // Selecciona el tipo de codificación de audio
        audioConfig: { audioEncoding: 'MP3' },
    };

    // Realiza la solicitud de síntesis de voz
    const [response] = await client.synthesizeSpeech(request);

    // Devuelve el contenido del audio generado
    return response.audioContent;
};

// Exportar la función getVoice
module.exports = {
    getVoice,
};