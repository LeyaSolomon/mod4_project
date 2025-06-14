 document.addEventListener("DOMContentLoaded", function(){
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    img1.addEventListener('click', function() {
        img1.classList.remove('visible');
        img2.classList.add('visible');
    });

    img2.addEventListener('click', function() {
        img2.classList.remove('visible');
        img3.classList.add('visible');
    });
    });
