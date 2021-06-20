<<?php  class conectar
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
    function select()
    {
      $sentencia="SELECT * FROM test";
        if($consulta=$GLOBALS['conexion']->query($sentencia))
        {
          $json = array();
          while ($row = $consulta->fetch_assoc())
          {
            $json[]=array(
              'id' => $row['id'],
              'nombre' => $row['nombre'],
              'test' => $row['tipo_test'],
              'fecha' => $row['fecha_test']
            );
          }
          $jsonString = json_encode($json);
          echo $jsonString;
          //echo $jsonString;
        }
    }
}
$db = new conectar();
$db->select();
?>
