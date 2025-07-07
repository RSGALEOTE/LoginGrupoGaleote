document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.login-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = form.querySelector('input[type="text"], input[type="email"]').value.trim();
    const password = form.querySelector('input[type="password"]').value.trim();
    const errorDiv = form.querySelector('.error') || document.createElement('div');
    let errorMsg = '';

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMsg = 'Por favor, ingresa un correo válido.';
    } else if (password !== 'galeote') {
      errorMsg = 'Contraseña incorrecta.';
    }

    if (errorMsg) {
      errorDiv.textContent = errorMsg;
      errorDiv.className = 'error';
      form.appendChild(errorDiv);
      return;
    }

    // Redirigir si todo es correcto
    window.location.href = 'principal.html';
  });
});
