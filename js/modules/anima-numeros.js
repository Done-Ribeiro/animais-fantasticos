export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
      const total = +numero.innerText;

      let start = 0;
      const incremento = Math.floor(total / 100);
      const time = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(time);
        }
      }, 25 * Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }
  observer = new MutationObserver(handleMutation);

  // criando um observer pra acompanhar o inicio do initAnimaNumeros corretamente
  // = quando o scrool chegar no h1 dele
  const observerTarget = document.querySelector('.numeros');
  observer.observe(observerTarget, { attributes: true });
}
