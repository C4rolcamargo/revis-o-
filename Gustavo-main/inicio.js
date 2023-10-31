const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); // Configuração do mecanismo de visualização EJS


app.get('/', (req, res) => {
    const data = {
        imageUrl: 'https://raw.githubusercontent.com/TheVitin/Medical-Group-SP/main/Logo-removebg-preview.png',
    };
    res.render('inicio')// Renderiza o arquivo EJS com os dados fornecidos
});

app.listen(PORT, () => {
    console.log(`Servidor está ouvindo na porta ${PORT}`);
});
