const copy = document.getElementById('copy');
const link = document.getElementById('link');

copy.addEventListener('click', () => {
    navigator.clipboard.writeText('shaumikrahman123@gmail.com');
    link.style.color = '#ffed8e';
});