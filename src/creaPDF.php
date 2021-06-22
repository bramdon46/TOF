<?php
include_once('src/tcpdf.php');

class PDF
{

  var $nom_arch;
  var $objetoPDF;

  function __construct($nom_arch)
  {
     $this->nom_arch=$nom_arch; //nombre archivo
     //crea objeto de pdf en el atributo de clase
     $this->objetoPDF=new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF8', false);
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
     $this->objetoPDF->SetFont('times', 'I', 10);
   }

   function creaPDF($consulta)
   {
    $this->objetoPDF->AddPage(); //crea una nueva hoja
    $this->objetoPDF->SetTextColor(10,60,10);
    $html="<h1>Reporte general de los datos</h1>
    <em>Prof. Melica Villalobos</em>14
    Melica Villalobos
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
?>
