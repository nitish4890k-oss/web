document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission (in a real site, send to a server)
    document.getElementById('response').textContent = `Thank you, ${name}! Your message has been sent.`;
    
    // Clear form
    document.getElementById('contact-form').reset();
});