// 1. Pre-carga de la imagen para evitar parpadeos
const tempImg = new Image();
tempImg.src = "img/CARTA.jpg";

document.addEventListener('DOMContentLoaded', () => {
      const sobre = document.getElementById('sobre');
      const tapa = document.getElementById('tapa');
      const carta = document.getElementById('carta');
      const fondoBlanco = document.getElementById('fondo-blanco');
      const instruccion = document.getElementById('instruccion');
      const link = document.getElementById('link-instagram');

      let paso = 0;

      sobre.onclick = function (e) {
            // Bloquear clics adicionales si la carta ya está fuera
            if (paso === 3) return;

            paso++;

            if (paso === 1) {
                  tapa.classList.add('abierta'); 
                  
                  

                  setTimeout(() => {
                        tapa.style.zIndex = "5";
                        instruccion.innerText = "Toca la invitación";
                        instruccion.style.opacity = "1";
                  }, 600);
            }
            else if (paso === 2) {
                  carta.classList.remove('opacity-0');
                  carta.style.clipPath = "inset(0% 0% 30% 0%)";
                  carta.classList.add('-translate-y-[60%]', 'scale-[0.96]');

                  instruccion.innerText = "Toca para sacarla";
            }
            else if (paso === 3) {
                  carta.style.zIndex = "100";
                  carta.style.clipPath = "inset(0% 0% 0% 0%)";
                  carta.classList.remove('brightness-[0.8]');
                  carta.classList.add('-translate-y-[45%]', 'scale-[1.2]', 'brightness-100', 'shadow-2xl');

                  link.classList.remove('pointer-events-none');
                  instruccion.innerText = "¡Haz clic en la carta!";
                  instruccion.classList.remove('animate-bounce');
            }
      };
});