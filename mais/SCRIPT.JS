function copyEmail(email){
  navigator.clipboard.writeText(email)
    .then(()=> alert(`Email copiado: ${email}`))
    .catch(err=> console.error('Erro ao copiar:', err));
}