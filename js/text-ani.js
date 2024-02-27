var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('DEVELOPER')
    .pauseFor(2500)
    .deleteAll()
    .typeString('DESIGNER')
    .pauseFor(2500)
    .deleteAll()
    .start();