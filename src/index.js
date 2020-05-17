const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(5000, () => {
    console.log('Servidor iniciado na porta 5000');
});