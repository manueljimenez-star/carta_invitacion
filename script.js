const sobre = document.getElementById('sobre');
const tapa = document.getElementById('tapa');
const carta = document.getElementById('carta');
const instruccion = document.getElementById('instruccion');

let paso = 0; // Contador de toques

sobre.addEventListener('click', () => {
      paso++;

      switch (paso) {
            case 1:
                  // PASO 1: Abrir la tapa y ocultar el texto de ayuda
                  tapa.classList.add('rotate-x-170');
                  instruccion.classList.add('opacity-0');

                  // Mandar la tapa atrás después de que empiece a girar
                  setTimeout(() => {
                        tapa.style.zIndex = "5";
                  }, 300);

                  instruccion.innerText = "Toca para ver la carta";
                  setTimeout(() => instruccion.classList.remove('opacity-0'), 500);
                  break;

            case 2:
                  // PASO 2: Asomar la carta (se queda dentro del bolsillo z-30)
                  carta.classList.remove('opacity-0');

                  // Añadimos el recorte (clip-path): 
                  // Cortamos el 40% inferior de la imagen para que no sobresalga por abajo del sobre
                  carta.style.clipPath = "inset(0% 0% 40% 0%)";

                  carta.classList.add('-translate-y-[50%]', 'scale-[0.96]');

                  instruccion.innerText = "Toca para sacarla";
                  break;

            case 3:
                  // PASO 3: Sacar la carta totalmente al frente
                  carta.style.zIndex = "100";

                  // QUITAMOS EL RECORTE para que la carta se vea completa al salir
                  carta.style.clipPath = "inset(0% 0% 0% 0%)";

                  carta.classList.remove('-translate-y-[70%]', 'scale-[0.96]', 'brightness-[0.8]');
                  carta.classList.add('-translate-y-[55%]', 'scale-[1.2]', 'brightness-100', 'drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]');

                  carta.style.pointerEvents = "auto";
                  instruccion.classList.add('opacity-0');
                  break;
      }
});