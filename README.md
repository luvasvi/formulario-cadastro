# 📝 Formulário de Cadastro com Validação (HTML, JavaScript, Node.js)

Este projeto é um formulário de cadastro com validação no lado do cliente (JavaScript) e validação + sanitização no lado do servidor usando Node.js com Express.

---

## 🚀 Funcionalidades

- ✅ Validação de nome, e-mail e senha no navegador (JavaScript)
- ✅ Validação e sanitização no backend (Node.js)
- ✅ Salvamento local dos dados em arquivo `dados.json`
- ✅ Feedback de erros no preenchimento do formulário

---

## 📦 Tecnologias

- HTML5
- CSS3
- JavaScript
- Node.js
- Express

---

## ⚙️ Requisitos

- Node.js instalado (versão 14 ou superior)

---

## 🛠️ Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/luvasvi/formulario-cadastro.git
cd formulario-cadastro
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start
```

4. Abra o navegador e acesse:

```
http://localhost:3000
```

---

## 📁 Estrutura de Pastas

```
formulario-cadastro/
│
├── public/              # Arquivos front-end (HTML, CSS, JS)
│   └── index.html
│
├── src/                 # Back-end Node.js
│   ├── server.js
│   ├── routes/
│   │   └── cadastro.js
│   └── utils/
│       └── validator.js
│
├── data/
│   └── dados.json       # Armazena os cadastros localmente
│
├── .gitignore
├── package.json
└── README.md
```

---

## ✍️ Validações implementadas

- **Nome**: mínimo 3 caracteres
- **E-mail**: formato válido (ex: email@exemplo.com)
- **Senha**: mínimo 8 caracteres, contendo pelo menos:
  - 1 número
  - 1 letra maiúscula

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir *issues* ou *pull requests*.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

