const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('nav a, .button[href^="#"], footer a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => document.activeElement?.blur());
});

const certificateDialog = document.querySelector('.certificate-dialog');
const certificatePreview = certificateDialog.querySelector('img');

document.querySelectorAll('[data-certificate]').forEach((button) => {
  button.addEventListener('click', () => {
    certificatePreview.src = button.dataset.certificate;
    certificatePreview.alt = button.querySelector('img').alt;
    certificateDialog.showModal();
  });
});

certificateDialog.querySelector('.dialog-close').addEventListener('click', () => certificateDialog.close());
certificateDialog.addEventListener('click', (event) => {
  if (event.target === certificateDialog) certificateDialog.close();
});
