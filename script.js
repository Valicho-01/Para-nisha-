// Función para iniciar el juego
function iniciarJuego() {
  const juego = document.getElementById("juego");
  const carta = document.getElementById("carta");
  carta.style.display = "none";
  juego.style.display = "block";

  juego.innerHTML = `
    <h2>¿Cuánto me conoces, Nisha? 🧠</h2>
    <p>Pregunta 1: ¿Qué harías si me como tu postre?</p>
    <button onclick="respuesta('Me lo cobras en venganza dulce')">A) Te ignoro... pero lo apunto</button><br>
    <button onclick="respuesta('Gritas, pero igual me quieres')">B) Me gritas como si fuera traición</button><br>
    <button onclick="respuesta('Me abrazas y luego me haces pagar')">C) Me abrazas... pero igual me lo cobras</button>
  `;
}

// Función que responde a la opción elegida
function respuesta(mensaje) {
  const juego = document.getElementById("juego");
  juego.innerHTML = `
    <h3>Tu respuesta fue:</h3>
    <p>${mensaje}</p>
    <p>Sea cual sea tu elección... eres mi hermana favorita (y única 😜)</p>
    <p><strong>Te quiere,</strong><br>El que te hace renegar 💥</p>
  `;
}

// Función para mostrar la carta aleatoria
function mostrarCarta() {
  const frases = [
    "Eres más que mi hermana, eres mi cómplice de infancia.",
    "No importa cuántas veces discutamos, siempre te voy a cuidar.",
    "Tú haces que mi vida sea menos seria y más divertida.",
    "Si algún día olvidas cuánto vales, aquí estoy yo para recordártelo.",
    "Gracias por existir, aunque me hagas renegar diario.",
    "Este código es solo una excusa para decirte que te quiero mucho."
  ];

  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

  const carta = document.getElementById("carta");
  const juego = document.getElementById("juego");
  juego.style.display = "none";
  carta.style.display = "block";

  carta.innerHTML = `
    <h2>Mi carta para ti, Nisha 💌</h2>
    <p>${fraseAleatoria}</p>
    <p><strong>Con cariño,</strong><br>El que te hace renegar 🧠💛</p>
  `;
}
