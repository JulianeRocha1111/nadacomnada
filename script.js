function sendWhatsApp(answer) {
    const responseDiv = document.getElementById('response');
    let message = '';
    let whatsappLink = '';

    if (answer === 'sim') {
        message = 'Ju eu aceito'; 
    } else {
        message = 'Ju eu não aceito'; 
    }
    whatsappLink = 'https://api.whatsapp.com/send?phone=47997734182&text=' + encodeURIComponent(message);
    responseDiv.innerHTML = message;
    window.open(whatsappLink, '_blank');
}

const hearts = document.querySelector('.floating-hearts');
setInterval(() => {
    hearts.style.bottom = parseInt(getComputedStyle(hearts).bottom) + 5 + 'px';
    if (parseInt(getComputedStyle(hearts).bottom) > 200) {
        hearts.style.bottom = '0px';
    }
}, 100);