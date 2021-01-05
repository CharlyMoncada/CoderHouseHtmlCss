let HTMLCard = "";
let contenidoJSON = [];

function cargoProvinciasStreaming() {
  $.ajax({
    url: "./javascript/json/provincias.json",
    dataType: "json",
    success: function (response) {
      contenidoJSON = response;
      $.each(contenidoJSON, function (i) {
        HTMLCard += `<option value=${contenidoJSON[i].id}>${contenidoJSON[i].nombre}</option>`;
      });
      $("#provincias").html(HTMLCard);
    },
    error: function () {
      console.error("Ocurrió un error... :(");
      HTMLCard = `<option value=0>" Error cargando Json "</option>`;
      $("#provincias").html(HTMLCard);
    },
  });
}

setTimeout(() => cargoProvinciasStreaming());
