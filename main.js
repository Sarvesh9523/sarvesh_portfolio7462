var typed = new Typed(".text",{
    strings:["Frontend Developer", "Java Developer", "Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});


  document.addEventListener('DOMContentLoaded', function() {
            const aboutBtns = document.querySelectorAll('.about-btn');
            const closeBtns = document.querySelectorAll('.close-btn');
            const layers = document.querySelectorAll('.layer');

            // Show project info when About button is clicked
            aboutBtns.forEach((btn, index) => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const layer = layers[index];
                    layer.classList.add('active');
                    btn.style.display = 'none';
                });
            });

            // Hide project info when Close button is clicked
            closeBtns.forEach((btn, index) => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const layer = layers[index];
                    const aboutBtn = aboutBtns[index];
                    layer.classList.remove('active');
                    aboutBtn.style.display = 'block';
                });
            });

            // Hide project info when clicking outside the layer content
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('layer')) {
                    const activeLayer = e.target;
                    const index = Array.from(layers).indexOf(activeLayer);
                    activeLayer.classList.remove('active');
                    aboutBtns[index].style.display = 'block';
                }
            });

            // Prevent event bubbling when clicking inside layer content
            layers.forEach(layer => {
                layer.addEventListener('click', function(e) {
                    if (e.target === this) {
                        const index = Array.from(layers).indexOf(this);
                        this.classList.remove('active');
                        aboutBtns[index].style.display = 'block';
                    }
                });
            });
        });