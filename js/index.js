const copy = document.getElementById('copy');
const link = document.getElementById('link');
const box = document.getElementById('copyBox');

copy.addEventListener('click', () => {
    navigator.clipboard.writeText('shaumikrahman123@gmail.com');
    link.style.color = '#ffed8e';
    
    if (box.classList.contains('off')) {
        box.classList.remove('off');
        setTimeout(() => {
            box.classList.add('off');
        }, 1000);
    }
});