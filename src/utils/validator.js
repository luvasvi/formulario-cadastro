function sanitizeInput(input) {
  return input.replace(/[<>'"]/g, '');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(senha) {
  return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(senha);
}

function isValidName(nome) {
  return nome.length >= 3;
}

module.exports = {
  sanitizeInput,
  isValidEmail,
  isValidPassword,
  isValidName,
};