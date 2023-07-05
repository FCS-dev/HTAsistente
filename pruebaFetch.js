let contenido = document.getElementById("btn_traerdatos");
contenido.addEventListener("click", traer_datos);
let usuario = document.getElementById("contenido");

function traer_datos() {
  fetch("https://randomuser.me/api/?results=25&exc=login&nat=es&seed=fra")
    .then((rpta) => rpta.json())
    .then((datos) => {
      let usuarios = datos.results;
      //console.log(usuarios["0"].email);
      usuarios.forEach((element) => {
        // console.log(element);
        usuario.innerHTML += `
        <img src="${element.picture.large}" width="100px">
              <p>Nombre : ${element.name.title} ${element.name.first} ${element.name.last}</p>
              <p>Correo : ${element.email}</p>
              <p>Id     : ${element.id.name} ${element.id.value}</p>
             `;
      });
    });
}
