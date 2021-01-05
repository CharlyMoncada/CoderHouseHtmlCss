let HTMLCard = "";
let contenidoJSON = [];
var favoritos = [];

function cargoCatalogoStreaming() {
  $.ajax({
    url: "./javascript/json/catalogo.json",
    dataType: "json",
    success: function (response) {
      contenidoJSON = response;
      $.each(contenidoJSON, function (i) {
        let id = parseInt(contenidoJSON[i].id);

        if (favoritos.length == 0) {
          HTMLCard += `<div class="grid-gallery__item">
                          <p class="grid-gallery__text">Modelo ${contenidoJSON[i].nombre}</p>
                          <img
                            id="${id}"
                            class="grid-gallery__image"
                            src="${contenidoJSON[i].rutaImagen}"
                            alt="Modelo ${contenidoJSON[i].nombre}"
                          />`;
          HTMLCard += `<input type="image" class="grid-gallery__star" src="./images/icons/add_shopping_cart.ico" onclick="agregarAlCarritoDeCompras(${contenidoJSON[i].id});" />`;
          HTMLCard += `</div>`;
        } else if (favoritos.length > 0) {
          let isFavorite = favoritos.includes(id);
          HTMLCard += `<div class="grid-gallery__item">
                        <p class="grid-gallery__text">Modelo ${contenidoJSON[i].nombre} - Precio: ${contenidoJSON[i].precio}</p>
                        <img
                          id="${id}"
                          class="grid-gallery__image"
                          src="${contenidoJSON[i].rutaImagen}"
                          alt="Modelo ${contenidoJSON[i].nombre}"
                        />`;

          if (!isFavorite) {
            HTMLCard += `<input type="image" class="grid-gallery__star" src="./images/icons/add_shopping_cart.ico" onclick="agregarAlCarritoDeCompras(${contenidoJSON[i].id});" />`;
          }

          HTMLCard += `</div>`;
        }
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

function agregarAlCarritoDeCompras(id) {
  alert("Agregado al carrito de compras (Solo un producto)");
  favoritos.push(id);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  location.reload();
}

function cargarFavoritos() {
  if (localStorage.length > 0 && localStorage.getItem("favoritos") != null) {
    favoritos = JSON.parse(localStorage.getItem("favoritos"));
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

setTimeout(() => {
  cargarFavoritos();
  cargoCatalogoStreaming();
});
