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
        if (isFavorite) {
          HTMLCard += `<div class="grid-gallery__item">
                            <p class="grid-gallery__text">Modelo ${contenidoJSON[i].nombre}</p>
                            <img
                                id="${id}"
                                class="grid-gallery__image"
                                src="${contenidoJSON[i].rutaImagen}"
                                alt="Modelo ${contenidoJSON[i].nombre}"
                            />
                            <input type="image" class="grid-gallery__star" src="./images/icons/star.ico" onclick="eliminarFavorito(${id});" />
                        </div>`;
        }
      });
      $("#galleryFavoritos").html(HTMLCard);
    },
    error: function () {
      console.error("Ocurrió un error... :(");
      HTMLCard = `<div class="grid-gallery__item">
                    <p class="grid-gallery__text">Error</p>
                 </div>`;
      $("#galleryFavoritos").html(HTMLCard);
    },
  });
}

function eliminarFavorito(id) {
  favoritos.pop(id);
  alert("Eliminado de favoritos");

  if (favoritos.length > 0) {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  } else {
    localStorage.removeItem("favoritos");
  }
  location.reload();
}

function cargarFavoritos() {
  if (localStorage.length > 0) {
    favoritos = JSON.parse(localStorage.getItem("favoritos"));
  } else {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
}

setTimeout(() => {
  cargarFavoritos();
  cargoCatalogoStreaming();
});
