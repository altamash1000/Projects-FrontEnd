document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const message = document.getElementById('message');
    
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      message.textContent = 'Your form has been submitted.';
    });
  });