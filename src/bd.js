let cuerpoTab = document.getElementById("cuerpoTabla");

const createRow = (datoCol1, datoCol2, datoCol3, datoCol4) => {

  let fila = document.createElement("tr");
  fila.className="table-light";
  fila.id=datoCol1;

  let col1 = document.createElement("td");
  col1.innerHTML=datoCol1;
  //col1.className='table-light';
  fila.appendChild(col1);

  let col2 = document.createElement("td");
  col2.innerHTML=datoCol2;
  //col2.className='table-light';
  fila.appendChild(col2);

  let col3 = document.createElement("td");
  col3.innerHTML=datoCol3;
  //col3.className='table-light';
  fila.appendChild(col3);

  let col4 = document.createElement("td");
  col4.innerHTML=datoCol4;
  //col4.className='table-light';
  fila.appendChild(col4);

  let col5 = document.createElement("td");
  let btn = document.createElement("button");
  btn.className="task-delete btn btn-danger";
  btn.innerHTML="Eliminar";
  col5.appendChild(btn);
  fila.appendChild(col5);

  cuerpoTab.appendChild(fila);
}

$.ajax({
  url: 'src/crud-select.php',
  type: 'GET',
  success: function(response)
  {
    var texto=response;
    texto = texto.substring(1,texto.length);
    const row = JSON.parse(texto);
    row.forEach(item => {
      createRow(
        item.id,
        item.nombre,
        item.test,
        item.fecha );
    });

  }
});
$(document).ready(function() {
  $(document).on('click', '.task-delete', (e) =>{
    let varConfir=confirm('Estas seguro de lo que haces?');
    if(varConfir)
    {
      var element = $(this)[0].activeElement.parentElement.parentElement;
      var inde = element.getAttribute("id");
      var datos =
      {
        id: inde,
        crud: 'baja'
      }
      $.post('src/crud.php', datos, function(response){
            console.log(response);
      });
      document.getElementById(inde).remove();
    }
  });
});
