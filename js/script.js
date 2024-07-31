const imgs = document.getElementById("img-carousel");
const img = document.querySelectorAll("#img-carousel img");

let idx = 0;
let larguraImagem = 350;
let tempoIntervalo = 7000;

function carrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * larguraImagem}px)`;
}

function ajustarResponsividade() {
  if (window.innerWidth <= 950) {
    larguraImagem = 350;
  } else {
    larguraImagem = 880;
  }
}

ajustarResponsividade();
window.addEventListener('resize', ajustarResponsividade);

let intervaloCarrossel = setInterval(carrossel, tempoIntervalo);