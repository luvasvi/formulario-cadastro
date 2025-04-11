const express = require('express');
const path = require('path');
const cadastroRoute = require('./routes/cadastro');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/cadastro', cadastroRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});