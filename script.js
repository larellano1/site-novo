document.getElementById('mobile-menu').addEventListener('click', function() {
    console.log('click');
    document.getElementById('menu').querySelector('ul').classList.toggle('active');
});
