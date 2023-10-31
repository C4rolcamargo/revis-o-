const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); // Configuração do mecanismo de visualização EJS


app.get('/', (req, res) => {
    
    res.render('quemsomos')// Renderiza o arquivo EJS com os dados fornecidos
});

app.listen(PORT, () => {
    console.log(`Servidor está ouvindo na porta ${PORT}`);
});
