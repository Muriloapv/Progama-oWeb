function addInfoDataAcesso() {

  let date = new Date();

  let options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  let data = new Intl.DateTimeFormat("pt-br", options).format(date);

  let dataJson = JSON.stringify(data);

  localStorage.setItem("data", dataJson);

  let p = document.createElement("p");

  let contVisitas = localStorage.getItem("contVisitas");

  if (!contVisitas) {
    contVisitas = {n: 1};
  }
  
  else {
    contVisitas = JSON.parse(contVisitas);
    contVisitas.n++;
  }

  p.textContent = `Esta pagina foi visitada ${contVisitas.n} vezes. A pagina visita foi: ${data}`

  document.querySelector("footer#rodape").appendChild(p);

  let contVisitasJson = JSON.stringify(contVisitas);
  localStorage.setItem("contVisitas", contVisitasJson);

}
