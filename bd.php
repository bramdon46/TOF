<?php include("src/navtop.php") ?>
<!--etiqueta que muestra el texto de presentacion  -->
<main class="container">
 <div class="jumbotron bg-white shadow p-3 mb-5 ">
    <p class=" text-dark d-flex justify-content-center ">En este sitio podrás encontrar herramientas que te ayudarán a
      tomar una decisión sobre qué tipo de carrera universitaria
       deberías estudiar, también puedes consultar una lista de las
       universidades más reconocidas de la ciudad así como sus
       planes de estudios.
     </p>
     <p class=" text-dark d-flex justify-content-center ">Y recuerda que el futuro es tan oscuro que no lo podemos vislumbrar y depende de nosotros mismos darle luz y volverlo cálido con cada una de nuestras acciones.</p>
 </div>
</main>

    <div>
      <main class="container">
       <div class="jumbotron colorFour align-middle shadow p-3 mb-5">
         <table class="table border-Light" >
            <tr class="text-white">
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Test</th>
              <th scope="col">Fecha</th>
            </tr>
          <tbody id="cuerpoTabla">

          </tbody>
         </table>
       </div>
      </main>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <?php include("src/footer.php")?>
    <script src="src/bd.js"></script>
</body>
</html>
