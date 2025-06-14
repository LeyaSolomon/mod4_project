 document.addEventListener("DOMContentLoaded", function(){
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');
    const img5 = document.getElementById('img5');
    const img6 = document.getElementById('img6');
    const img7 = document.getElementById('img7');
    const img8 = document.getElementById('img8');

    img1.addEventListener('click', function() {
        img1.classList.remove('visible');
        img2.classList.add('visible');
    });

    img2.addEventListener('click', function() {
        img2.classList.remove('visible');
        img3.classList.add('visible');
    });

    img3.addEventListener('click', function() {
        img3.classList.remove('visible');
        img4.classList.add('visible');
    });

    img4.addEventListener('click', function() {
        img4.classList.remove('visible');
        img5.classList.add('visible');
    });

    img4.addEventListener('click', function() {
        img4.classList.remove('visible');
        img5.classList.add('visible');
    });

    img5.addEventListener('click', function() {
        img5.classList.remove('visible');
        img6.classList.add('visible');
    });

    img6.addEventListener('click', function() {
        img6.classList.remove('visible');
        img7.classList.add('visible');
    });

    img7.addEventListener('click', function() {
        img7.classList.remove('visible');
        img8.classList.add('visible');
    });
});
