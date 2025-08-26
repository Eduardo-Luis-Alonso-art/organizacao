document.querySelectorAll('.modulo').forEach(modulo => {
  modulo.addEventListener('touchstart', function() {
    this.classList.add('touched');
  });
  
  modulo.addEventListener('touchend', function() {
    this.classList.remove('touched');
  });
});