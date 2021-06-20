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
       <form id="formulario">
           <!-- etiqueta que mustra las preguntas del test -->
         <div id="preguntas">

         </div>
         <div>
           <main class="container">
             <div class=" jumbotron d-flex justify-content-center mb-5 colorFour">
               <!-- boton que genera el resultado de las respuestas -->
               <button type="submit" class="btn btn-primary colorThree" >Ver resultados</button>

             </div>
           </main>
         </div>
       </form>
       <?php include("src/footer.php")?>

       <!-- scripts necesarios para generar las animaciones y la logica de programacion -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="src/carreras_test1.js"></script>
    <script src="src/logic.js"></script>
    <script src="src/test1.js"></script>

  </body>
</html>
