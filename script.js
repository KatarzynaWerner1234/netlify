const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    alert(`Podaany adres email: ${data.get('email')}`);

    console.log('Zatwierdzony formularz');
});