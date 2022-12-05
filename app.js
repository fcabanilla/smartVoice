const express = require('express');
const VoiceModel = require('./models/voice-model');
const VoiceView = require('./views/voice-view');

class VoiceController {
    constructor() {
        this.model = new VoiceModel();
        this.view = new VoiceView();
    }

    generateAudio(text) {
        const audio = this.model.generateAudio(text);
        this.view.playAudio(audio);
    }
}

const app = express();
const controller = new VoiceController();

// Recibir los datos de entrada del usuario desde la vista
app.post('/generate-audio', (req, res) => {
    const text = req.body.text;
    controller.generateAudio(text);
    res.send('Audio generado con éxito');
});

app.listen(3000, () => {
    console.log('Aplicación de síntesis de voz iniciada en el puerto 3000');
});