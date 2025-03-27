window.onload = function () {
    window.scrollTo(-1, -1);
};
document.querySelectorAll('.Sidenav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const targetPosition =
                targetElement.getBoundingClientRect().top + window.pageYOffset;
            const middleOfViewport =
                targetPosition - window.innerHeight / 2 + targetElement.offsetHeight / 2;
            window.scrollTo({
                top: middleOfViewport,
                behavior: 'smooth',
            });
        }
    });
});