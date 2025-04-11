const express = require('express');
const fs = require('fs');
const path = require('path');
const {
  sanitizeInput,
  isValidEmail,
  isValidPassword,
  isValidName,
} = require('../utils/validator');

const router = express.Router();

router.post('/', (req, res) => {
  let { nome, email, senha } = req.body;

  nome = sanitizeInput(nome);
  email = sanitizeInput(email);
  senha = sanitizeInput(senha);

  if (!isValidName(nome)) {
    return res.json({ message: 'Nome deve ter pelo menos 3 caracteres.' });
  }

  if (!isValidEmail(email)) {
    return res.json({ message: 'Email inválido.' });
  }

  if (!isValidPassword(senha)) {
    return res.json({ message: 'Senha inválida. Deve ter pelo menos 8 caracteres, com letra maiúscula e número.' });
  }

  const novoUsuario = { nome, email, senha };
  const filePath = path.join(__dirname, '../../data/dados.json');
  let dados = [];

  if (fs.existsSync(filePath)) {
    const conteudo = fs.readFileSync(filePath);
    if (conteudo.length > 0) {
      dados = JSON.parse(conteudo);
    }
  }

  dados.push(novoUsuario);
  fs.writeFileSync(filePath, JSON.stringify(dados, null, 2));

  res.json({ message: 'Cadastro realizado com sucesso!' });
});

module.exports = router;