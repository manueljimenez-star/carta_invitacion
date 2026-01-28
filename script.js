const tempImg = new Image();
tempImg.src = "img/HEMOS SIDO ESCOGIDOS 2.png";

// Asegúrate de que este código esté en tu archivo script.js en GitHub
document.addEventListener('DOMContentLoaded', () => {
      const sobre = document.getElementById('sobre');
      const tapa = document.getElementById('tapa');
      const carta = document.getElementById('carta');
      const instruccion = document.getElementById('instruccion');
      const link = document.getElementById('link-instagram');

      let paso = 0;

      sobre.onclick = function () {
            if (paso === 3) return;
            paso++;

            if (paso === 1) {
                  tapa.classList.add('rotate-x-170');
                  instruccion.style.opacity = "0";
                  setTimeout(() => {
                        tapa.style.zIndex = "5";
                        instruccion.innerText = "Toca la invitación";
                        instruccion.style.opacity = "1";
                  }, 400);
            }
            else if (paso === 2) {
                  carta.classList.remove('opacity-0');
                  carta.style.clipPath = "inset(0% 0% 30% 0%)";
                  carta.classList.add('-translate-y-[70%]', 'scale-[0.96]');
                  instruccion.innerText = "Toca para sacarla";
            }
            else if (paso === 3) {
                  carta.style.zIndex = "100";
                  carta.style.clipPath = "inset(0% 0% 0% 0%)";
                  carta.classList.remove('-translate-y-[70%]', 'scale-[0.96]', 'brightness-[0.8]');
                  carta.classList.add('-translate-y-[60%]', 'scale-[1.2]', 'brightness-100');
                  link.classList.remove('pointer-events-none');
                  instruccion.innerText = "¡Haz clic en la carta!";
            }
      };
});