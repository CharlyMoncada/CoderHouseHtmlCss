let HTMLCard = "";
let contenidoJSON = [];
var favoritos = [];

function cargoCatalogoStreaming() {
  $.ajax({
    url: "javascript/json/catalogo.json",
    dataType: "json",
    success: function (response) {
      contenidoJSON = response;
      $.each(contenidoJSON, function (i) {
        let id = parseInt(contenidoJSON[i].id);
        let isFavorite = favoritos.includes(id);

        HTMLCard += `<div class="grid-gallery__item">
                        <p class="grid-gallery__text">Modelo ${contenidoJSON[i].nombre}</p>
                        <img
                            id="${id}"
                            class="grid-gallery__image"
                            src="${contenidoJSON[i].rutaImagen}"
                            alt="Modelo ${contenidoJSON[i].nombre}"
                        />`;
        if (!isFavorite) {
          HTMLCard += `<input type="image" class="grid-gallery__star" src="./images/icons/star.ico" onclick="agregarFavorito(${contenidoJSON[i].id});" />`;
        }
        HTMLCard += `</div>`;
      });
      $("#gallery").html(HTMLCard);
    },
    error: function () {
      console.error("Ocurrió un error... :(");
      HTMLCard = `<div class="grid-gallery__item">
                    <p class="grid-gallery__text">Error</p>
                 </div>`;
      $("#gallery").html(HTMLCard);
    },
  });
}

function agregarFavorito(id) {
  let existe = false;
  for (let i in favoritos) {
    if (favoritos[i] == id) {
      favoritos.pop(id);
      alert("Eliminado de favoritos");
      existe = true;
      break;
    }
  }
  if (existe == false) {
    alert("Agregado a favoritos");
    favoritos.push(id);
  }

  if (favoritos.length > 0) {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  } else {
    localStorage.removeItem("favoritos");
  }

  location.reload();
}

function cargarFavoritos() {
  if (localStorage.length > 0) {
    debugger
    favoritos = JSON.parse(localStorage.getItem("favoritos"));
  } else {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
}

setTimeout(() => {
  cargarFavoritos();
  cargoCatalogoStreaming();
});
