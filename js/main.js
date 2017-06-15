var api = {
  url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
};

var cargarTemas = function() {
  $.getJSON(api.url, function(temas) {
    temas.forEach(crearTema);
  });
}
var $temas = $("#temas");
$('#myModal').on('shown.bs.modal', function() {
  $('#myInput').focus()
})
var cargarPagina = function() {
  cargarTemas();
  $("#add-form").submit(agregarTema);
};
var agregarTema = function(e) {
  e.preventDefault();
  var titulo = $(".tituloTema").val();
  var texto = $(".tema").val();
  $.post(api.url, {
    titulo,
    texto
  }, function(texto) {
    crearTema(titulo, texto);
    $(".modalTema").modal("hide");
  });
};

var crearTema = function(titulo, texto) {
  var $titulo = texto.titulo;
  var $texto = texto.texto;
  var $tr = $("<tr />");
  var $titulo = $("<td />");
  $titulo.text($titulo);
  var $texto = $("<td />");
  $tr.append($titulo);
  $tr.append($texto);
};

$(document).ready(cargarPagina);
