let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Ingeniera en Software y Diseñadora de interfaces de usuario')
  .pauseFor(200)
  .deleteChars(10)
  .start();
