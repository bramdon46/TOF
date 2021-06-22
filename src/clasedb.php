<?php

//set_include_path("./src/creaPDF.php");
set_include_path("src/tcpdf.php");

class conectar
{
    var $conexion;//guardar el ide de la conexion
    var $servidor="127.0.0.1";//dominio o ip
    var $usuario="root";
    var $contrasena="";
    var $nombrebd="tof";
    var $objclassPDF;


        //generar conexion a la bd
    function __construct()
    {
        if($GLOBALS['conexion']=new mysqli($this->servidor,$this->usuario,$this->contrasena,$this->nombrebd))
        {
            $this->objclassPDF=new PDF("ArchivoPrueba");
        }
        else{
            // echo "Error de conexion";
        }
    }

    public function createFilePDF()
    {
     /*realiza busqueda en la base de datos y el arreglo,
     resultante lo envia a crea pdf*/

       if($consulta=$GLOBALS['conexion']->query("SELECT * FROM test"))
       {
       //manda llamar la funcion creaPDF de la classPDF
          $this->objclassPDF->creaPDF($consulta);
       }
       else
       {
         echo "Error";
       }
    }
}

class PDF extends TCPDF
{

  var $nom_arch;
  var $objetoPDF;

  function __construct($nom_arch)
  {
     $this->nom_arch=$nom_arch; //nombre archivo
     //crea objeto de pdf en el atributo de clase
     /*$this->objetoPDF=new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF8', false);
     //atributos de documento
     $this->objetoPDF->SetCreator('Coloca que tipo de documento PDF_HEADER_LOGOse crea');
     $this->objetoPDF->SetAuthor('Ana Valeria Duran Linares, Juan Diego Garcia Montiel, Bramdon Aldair Uribe Baltazar');
     $this->objetoPDF->SetTitle(' Reporte General');
     //asigna atributos de encabezado o pie de página
     $this->objetoPDF->setFooterData(array(100,64,0), array(0,64,128));
     $this->objetoPDF->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
     $this->objetoPDF->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

     $this->objetoPDF->SetMargins(20, 20, 20);
     $this->objetoPDF->SetHeaderMargin(PDF_MARGIN_HEADER);
     $this->objetoPDF->SetFooterMargin(PDF_MARGIN_FOOTER);
     //tipo de letra
     $this->objetoPDF->SetFont('times', 'I', 10);*/
     $this->TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
   }

   function creaPDF($consulta)
   {
    $this->objetoPDF->AddPage(); //crea una nueva hoja
    $this->objetoPDF->SetTextColor(10,60,10);
    $html="<h1>Reporte general de los datos</h1>
    <em>Prueba General</em>14

    <br>";
    $htmltabla='<br><br><table border="1" cellspacing="2" cellpadding="4">
    <tr> <th>ID</th><th>NOMBRE</th><th>Test</th><th>Fecha</th> </tr>';
    while($registros=$consulta->fetch_assoc())
    {
       /*lee el arreglo de registros que se recibió de
       la class ClaseDB
       y lo guarda en una cadena $htmltabla*/
       $htmltabla=$htmltabla."<tr border=1><td>".$registros['id'].
       "</td><td>".$registros['nombre'].
       "</td><td>".$registros['test'].
       "</td><td>".$registros['fecha']."</td></tr>";
    }
    //cierra y la tabla junta la cadena $html con $htmltabla
    $htmltabla=$htmltabla. "</table>";
    //Imprime datos
    $this->objetoPDF->writeHTMLCell(0, 0, 100, 50, $html, 1, 1,0);
    //imprime la tabla con los registros
    $this->objetoPDF->writeHTML($htmltabla);
    //$this->objetoPDF->Output($this->nom_arch.'pdf','I');
    $this->objetoPDF->Output($this->nom_arch.'.pdf','I');
    }
}

echo "Si llego aqui";
$db = new conectar();
//$db->createFilePDF();
?>
