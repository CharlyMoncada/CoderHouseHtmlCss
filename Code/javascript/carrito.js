let HTMLCard = "";
let contenidoJSON = [];
let favoritos = [];
let totalPrecio = 0;


function cargoCatalogoStreaming() {
  $.ajax({
    url: "./javascript/json/catalogo.json",
    dataType: "json",
    success: function (response) {
      contenidoJSON = response;
      $.each(contenidoJSON, function (i) {
        let id = parseInt(contenidoJSON[i].id);
        if(favoritos.length > 0){
          let isFavorite = favoritos.includes(id);
          if (isFavorite) {
            HTMLCard += `<div class="grid-gallery__item">
                              <p class="grid-gallery__text">Modelo ${contenidoJSON[i].nombre} - Precio: ${contenidoJSON[i].precio}</p>
                              <img
                                  id="${id}"
                                  class="grid-gallery__image"
                                  src="${contenidoJSON[i].rutaImagen}"
                                  alt="Modelo ${contenidoJSON[i].nombre}"
                              />
                              <input type="image" class="grid-gallery__star" src="./images/icons/remove.ico" onclick="eliminarDeCarritoDeCompra(${id});" />
                          </div>`;
  
            totalPrecio = totalPrecio + parseInt(contenidoJSON[i].precio)
          }
        }
      });

      $("#galleryFavoritos").html(HTMLCard);
      $("#contador-productos").html(`<p class="contador-productos">Total productos: ${favoritos.length} <br> Monto total: ${totalPrecio}</p>`);
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

function eliminarDeCarritoDeCompra(id) {
  favoritos.pop(id);
  alert("Eliminado del carrito de compras");
  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  location.reload();
}

function cargarFavoritos() {
  if (localStorage.length > 0 && localStorage.getItem("favoritos") != null) {
    favoritos = JSON.parse(localStorage.getItem("favoritos"));
  } else {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
}

setTimeout(() => {
  cargarFavoritos();
  cargoCatalogoStreaming();
});
