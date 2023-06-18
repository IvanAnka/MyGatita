function expandImage() {
    var card = document.querySelector('.card');
    var expandedImage = document.querySelector('.expanded-image');

    card.style.display = 'none';
    expandedImage.classList.add('show');

    setInterval(function() {
        var hearts = document.querySelectorAll('.heart');
        hearts.forEach(function(heart) {
            heart.parentNode.removeChild(heart);
        });

        var heartImages = [
            { image: '/static/corazon1.png', animation: 'rotate' },
            { image: '/static/corazon2.png', animation: 'fall' },
            { image: '/static/corazon3.png', animation: 'bounce' }
        ];
        var numHearts = 5;

        for (var i = 0; i < numHearts; i++) {
            for (var j = 0; j < heartImages.length; j++) {
                var heart = document.createElement('div');
                heart.className = 'heart';

                var randomX = Math.random() * (window.innerWidth - 100);
                var randomY = Math.random() * (window.innerHeight - 100);
                heart.style.left = randomX + 'px';
                heart.style.top = randomY + 'px';

                var heartInfo = heartImages[j];
                var heartImage = heartInfo.image;
                var heartAnimation = heartInfo.animation;

                heart.style.backgroundImage = 'url(' + heartImage + ')';

                var animationSpan = document.createElement('span');
                animationSpan.className = 'animation ' + heartAnimation;
                heart.appendChild(animationSpan);

                document.body.appendChild(heart);
            }
        }
    }, 3000);

    fetch('/expand_image', { method: 'POST' })
        .then(response => response.text())
        .then(message => console.log(message));
}
