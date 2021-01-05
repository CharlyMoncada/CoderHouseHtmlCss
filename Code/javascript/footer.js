let html = "";
let contenido = [];

function cargoRedesSocialesStreaming() {
  $.ajax({
    url: "./javascript/json/footer.json",
    dataType: "json",
    success: function (response) {
        contenido = response;
      $.each(contenido, function (i) {
        html += `<li class="footer__list footer__item--${contenido[i].redSocial}">
                        <a
                            id="${contenido[i].id}"
                            class="footer__list__link"
                            href="${contenido[i].href}"
                            target="_blank"
                        >
                        <img src="${contenido[i].rutaImagen}" />
                        </a>
                 </li>`
      });
      $("#footer__list").html(html);
    },
    error: function () {
      console.error("Ocurrió un error... :(");
      html = `<option value=0>" Error cargando Json "</option>`;
      $("#footer__list").html(html);
    },
  });
}

setTimeout(() => cargoRedesSocialesStreaming());
