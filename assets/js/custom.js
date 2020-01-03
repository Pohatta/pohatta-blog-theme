window.onload = function() {
    //Show componets that require javascript
    var allowed = document.querySelectorAll('.js-allowed');
    var denied = document.querySelectorAll('.js-deny');

    for (var i = 0; i < denied.length; i++) {
        denied[i].style.display = 'none';
    }
    for (var i = 0; i < allowed.length; i++) {
        allowed[i].style.display = 'block';
    }


    //Show deferred images
    var images = document.querySelectorAll('.lazy-img');
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('src',images[i].getAttribute('data-src'));
    }
};