window.onload = function() {
    var images = document.querySelectorAll('.lazy-img');
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('src',images[i].getAttribute('data-src'));
    }
}