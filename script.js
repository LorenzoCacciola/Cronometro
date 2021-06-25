const diasPlace = document.querySelector(".dias");
const horasPlace = document.querySelector(".horas");
const minutosPlace = document.querySelector(".minutos");
const segundosPlace = document.querySelector(".segundos");

const aniversario = new Date("July 21 2021 00:00:00");

const tempoIntoDom = ({ dias, horas, minutos, segundos }) => {
  diasPlace.textContent = dias;
  horasPlace.textContent = horas;
  minutosPlace.textContent = minutos;
  segundosPlace.textContent = segundos;
};

const tempoTransform = () => {
  const dataAtual = new Date();
  const tempoAteAniversario = aniversario - dataAtual;
  const dias = Math.floor(tempoAteAniversario / 1000 / 60 / 60 / 24);
  const horas = Math.floor(tempoAteAniversario / 1000 / 60 / 60) % 24;
  const minutos = Math.floor(tempoAteAniversario / 1000 / 60) % 60;
  const segundos = Math.floor(tempoAteAniversario / 1000) % 60;

  tempoIntoDom({ dias, horas, minutos, segundos });
};

setInterval(tempoTransform, 1000);
