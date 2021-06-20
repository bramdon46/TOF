<?php

class conectar
{
    var $conexion;//guardar el ide de la conexion
    var $servidor="127.0.0.1";//dominio o ip
    var $usuario="root";
    var $contrasena="";
    var $nombrebd="tof";

        //generar conexion a la bd
    function __construct()
    {
        if($GLOBALS['conexion']=new mysqli($this->servidor,$this->usuario,$this->contrasena,$this->nombrebd)){
            //echo "conexion exitosa";
        }
        else{
            // echo "Error de conexion";
        }
    }

    //alta
    function alta($campos)
    {
        $sentencia="INSERT INTO test (nombre, tipo_test, fecha_test)
        VALUES ( '$campos[nombre]' , '$campos[test]' , NOW() )";
        if($GLOBALS['conexion']->query($sentencia))
            echo "Datos Guardados con exito";
        else
            echo "Fallo en algo";
    }
    //consulta
    function baja($campos)
    {
      $sentencia="delete from test where id='$campos[id]'";
      if($GLOBALS['conexion']->query($sentencia))
          echo "Fila eliminada";
      else
          echo "Fallo al tratar de eliminar ";
    }
}

    if(isset($_REQUEST))
    {
      $db = new conectar();
      //echo "<script>console.log('entro aqui');</script>";
      switch ($_REQUEST['crud'])
      {
        case 'alta':
          $db->alta($_REQUEST);
          break;
        case 'baja';
          $db->baja($_REQUEST);
          break;
      }
    }
?>
