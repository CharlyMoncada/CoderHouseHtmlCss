let HTMLCard = "";
let contenidoJSON = [];

function cargoCatalogoStreaming() {
  $.ajax({
    url: "javascript/json/catalogo.json",
    dataType: "json",
    success: function (response) {
      contenidoJSON = response;
      $.each(contenidoJSON, function (i) {
        // debugger;
        HTMLCard += `<div class="grid-gallery__item">
                        <img
                            id="${contenidoJSON[i].id}"
                            class="grid-gallery__image"
                            src="${contenidoJSON[i].rutaImagen}"
                            alt="Modelo ${contenidoJSON[i].nombre}"
                        />
                        <p class="grid-gallery__text">Modelo ${contenidoJSON[i].nombre}</p>
                    </div>`;
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

setTimeout(() => cargoCatalogoStreaming());
