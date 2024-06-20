let openBtn = document.getElementById('openBtn');
let modalContainer = document.getElementById('modalContainer');
let closeBtn = document.getElementById('closeBtn');


openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});


window.addEventListener('click', function(event) {

    if (event.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
    // burada event.target == olur Windowa
    // ve if-de bunu deyirki 
    // Click eliyen vaxti Windowun icinde modalContainer varsa None olsun
});