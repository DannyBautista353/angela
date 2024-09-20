
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsData = [
  { text: "[Música]", time: 2.41 },
{ text: "desde el día en que te vi sentir como", time: 11.32 },
{ text: "que ya te conocía un", time: 14.75 },
{ text: "minuto fue suficiente", time: 17.72 },
{ text: "y ya sentía quererte", time: 20.27 },
{ text: "me encanta que seas tan ocurrente", time: 23.59 },
{ text: "de repente dices cosas que me vuelan la mente", time: 25.80 },
{ text: "simplemente pero siempre estás presente", time: 28.19 },
{ text: "aunque no pueda verte de locura casi estamos", time: 32.84 },
{ text: "igual de un día a otro me volví tu mean", time: 37.23 },
{ text: "y ya eres mi persona favorita", time: 40.92 },
{ text: "cada minuto a tu lado es genial", time: 45.44 },
{ text: "y no hay nadie en el mundo mundial que", time: 48.76 },
{ text: "ame más que estar contigo cada momento", time: 52.87 },
{ text: "lo haces especial tú eres mi persona favorita", time: 56.00 },
{ text: "Y aunque no siempre lo ando diciendo", time: 60.32 },
{ text: "es buen momento de decirte que te quiero", time: 64.40 },
{ text: "te quiero te quiero y siempre así será", time: 67.28 },
{ text: "será", time: 79.36 },
{ text: "creo que por más que pase y pase el tiempo", time: 80.88 },
{ text: "aunque llueva o truene nunca pasará maestro", time: 84.00 },
{ text: "al menos eso siento", time: 88.75 },
{ text: "igual de un día a otro me volví un mega fan", time: 97.64 },
{ text: "y ya eres mi persona favorita", time: 101.60 },
{ text: "cada minuto a tu lado es genial", time: 105.64 },
{ text: "y no hay nadie en el mundo mundial que", time: 109.75 },
{ text: "ame más que estar contigo cada momento", time: 112.84 },
{ text: "lo haces especial tú eres mi persona favorita", time: 117.03 },
{ text: "Y aunque no siempre lo ando diciendo", time: 118.28 },
{ text: "es buen momento de decirte que te quiero", time: 121.28 },
{ text: "de decirte que te quiero", time: 124.20 },
{ text: "te quiero", time: 127.56 },
{ text: "de decirte que te quiero", time: 128.39 },
{ text: "pareciste justamente cuando ya estaba listo para quererte", time: 133.48 },
{ text: "qué suerte cómo te fui a encontrar", time: 136.36 },
{ text: "ya eres mi persona favorita", time: 139.84 },
{ text: "cada minuto a tu lado", time: 143.72 },
{ text: "y no hay nadie en el mundo mundial que", time: 146.80 },
{ text: "ame más que estar contigo cada momento", time: 150.87 },
{ text: "lo haces especial tú eres mi persona favorita", time: 153.92 },
{ text: "aunque no siempre lo ando diciendo", time: 158.08 },
{ text: "es buen momento de decirte que te quiero", time: 159.36 },
{ text: "te quiero te quiero te quiero", time: 162.51 },
{ text: "y si así será", time: 165.23 },
{ text: "te quiero te quiero te quiero", time: 168.68 },
{ text: "y si así será", time: 172.48 },
{ text: "[Música]", time: 177.10 },
{ text: "y siempre así será", time: 179.95 },
{ text: "[Música]", time: 185.98 },

];
function updateLyrics() {
  var time = audio.currentTime; // Mantén el tiempo en formato decimal
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}


// Animar las letras
/* function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
} */

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);