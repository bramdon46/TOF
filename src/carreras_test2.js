//Este apartado carga en memoria las carreras clasificadas por aptitudes
var carrerasVerbal = ["<br><br>Universidad: UDV<br>Licenciatura en administración",
"<br><br>Universidad: UDV<br>Licenciatura en derecho",
"<br><br>Universidad: UVA<br>Licenciatura en derecho",
"<br><br>Universidad: UNICLA<br>Administración con terminales",
"<br><br>Universidad: UNICLA<br>Ciencias de la Comunicación con terminales",
"<br><br>Universidad: UNICLA<br>Derecho con terminales",
"<br><br>Universidad: UNICLA<br>Relaciones Internacionales",
"<br><br>Universidad: UNID<br>Licenciatura en administración de empresas turísticas",
"<br><br>Universidad: UNID<br>Licenciatura en ciencias y técnicas de la comunicación",
"<br><br>Universidad: UNID<br>Licenciatura en ciencias jurídicas",
"<br><br>Universidad: UNID<br>Ingeniería en tecnología de información y comunicación",
"<br><br>Universidad: ITSU<br>Ingeniería en Administración",
"<br><br>Universidad: UNIVA<br>Administración e Innovación de Negocios",
"<br><br>Universidad: UNIVA<br>Derecho"],
carrerasNumerica = ["<br><br>Universidad: UDV<br>Licenciatura en administración",
"<br><br>Universidad: UDV<br>Licenciatura en arquitectura",
"<br><br>Universidad: UDV<br>Licenciatura en contaduría",
"<br><br>Universidad: UDV<br>Licenciatura en informática",
"<br><br>Universidad: UDV<br>Ingeniería Civil",
"<br><br>Universidad: UMNSH<br>Ingeniería en agronomía",
"<br><br>Universidad: UVA<br>Licenciatura en arquitectura",
"<br><br>Universidad: UVA<br>Licenciatura en ciencias de la educación",
"<br><br>Universidad: UVA<br>Licenciatura en contaduría pública",
"<br><br>Universidad: UNICLA<br>Administración con terminales",
"<br><br>Universidad: UNICLA<br>Arquitectura con terminales",
"<br><br>Universidad: UNICLA<br>Contaduría Pública y Finanzas",
"<br><br>Universidad: UNICLA<br>Enfermería",
"<br><br>Universidad: UNICLA<br>Ingeniería en Sistemas Computacionales",
"<br><br>Universidad: UNID<br>Licenciatura en administración de empresas turísticas",
"<br><br>Universidad: UNID<br>Licenciatura en arquitectura",
"<br><br>Universidad: UNID<br>Licenciatura en tecnología educativa",
"<br><br>Universidad: ITSU<br>Ingeniería en Sistemas Computacionales",
"<br><br>Universidad: ITSU<br>Ingeniería en Administración",
"<br><br>Universidad: ITSU<br>Ingeniería Electrónica",
"<br><br>Universidad: ITSU<br>Ingeniería Industrial",
"<br><br>Universidad: ITSU<br>Ingeniería Mecatrónica",
"<br><br>Universidad: ITSU<br>Ingeniería Mecánica",
"<br><br>Universidad: ITSU<br>Ingeniería Civil",
"<br><br>Universidad: UNIVA<br>Administración e Innovación de Negocios",
"<br><br>Universidad: UNIVA<br>Contaduría, Fiscal y Finanzas"],
carrerasMYC = ["<br><br>Universidad: UDV<br>Licenciatura en arquitectura",
"<br><br>Universidad: UDV<br>Licenciatura en informática",
"<br><br>Universidad: UDV<br>Ingeniería Civil",
"<br><br>Universidad: UMNSH<br>Ingeniería en agronomía",
"<br><br>Universidad: UVA<br>Licenciatura en arquitectura",
"<br><br>Universidad: UVA<br>Licenciatura en criminología",
"<br><br>Universidad: UNICLA<br>Arquitectura con terminales",
"<br><br>Universidad: UNICLA<br>Ingeniería en Sistemas Computacionales",
"<br><br>Universidad: UNID<br>Licenciatura en arquitectura",
"<br><br>Universidad: ITSU<br>Ingeniería en Sistemas Computacionales",
"<br><br>Universidad: ITSU<br>Ingeniería Electrónica",
"<br><br>Universidad: ITSU<br>Ingeniería Industrial",
"<br><br>Universidad: ITSU<br>Ingeniería Mecatrónica",
"<br><br>Universidad: ITSU<br>Ingeniería Mecánica",
"<br><br>Universidad: ITSU<br>Ingeniería Civil"],
carrerasAP = ["<br><br>Universidad: UDV<br>Licenciatura en diseño y comunicación visual",
"<br><br>Universidad: UNICLA<br>Animación y Arte Digital",
"<br><br>Universidad: UNICLA<br>Artes Escénicas y Producción de Espectáculos",
"<br><br>Universidad: UNICLA<br>Diseño Gráfico y Publicidad",
"<br><br>Universidad: UNICLA<br>Industria de la Moda y el Vestido",
"<br><br>Universidad: UNID<br>Licenciatura en diseño gráfico digital",
"<br><br>Universidad: UNIVA<br>Mercadotecnia y Diseño de Marca"],
carrerasMusical = ["<br><br>Universidad: UNICLA<br>Artes Escénicas y Producción de Espectáculos"],
carrerasCientifica = ["<br><br>Universidad: UDV<br>Licenciatura en arquitectura",
"<br><br>Universidad: UDV<br>Ingeniería Civil",
"<br><br>Universidad: UMNSH<br>Ingeniería en agronomía",
"<br><br>Universidad: UVA<br>Licenciatura en arquitectura",
"<br><br>Universidad: UVA<br>Licenciatura en nutrición",
"<br><br>Universidad: UNICLA<br>Arquitectura con terminales",
"<br><br>Universidad: UNICLA<br>Enfermería",
"<br><br>Universidad: UNICLA<br>Ingeniería en Sistemas Computacionales",
"<br><br>Universidad: UNICLA<br>Nutrición",
"<br><br>Universidad: ITSU<br>Ingeniería en Sistemas Computacionales",
"<br><br>Universidad: ITSU<br>Ingeniería Electrónica",
"<br><br>Universidad: ITSU<br>Ingeniería Industrial",
"<br><br>Universidad: ITSU<br>Ingeniería Mecatrónica",
"<br><br>Universidad: ITSU<br>Ingeniería Mecánica",
"<br><br>Universidad: ITSU<br>Ingeniería Civil"],
carrerasSocial = ["<br><br>Universidad: UDV<br>Licenciatura en pedagogía",
"<br><br>Universidad: UDV<br>Licenciatura en psicología",
"<br><br>Universidad: UDV<br>Licenciatura en trabajo social",
"<br><br>Universidad: UVA<br>Licenciatura en ciencias de la educación",
"<br><br>Universidad: UVA<br>licenciatura en psicología",
"<br><br>Universidad: UNICLA<br>Ciencias de la Comunicación con terminales",
"<br><br>Universidad: UNICLA<br>Enseñanza de las Lenguas Extranjeras",
"<br><br>Universidad: UNICLA<br>Pedagogía con terminales",
"<br><br>Universidad: UNICLA<br>Psicología con terminales",
"<br><br>Universidad: UNICLA<br>Relaciones Internacionales",
"<br><br>Universidad: UNID<br>Licenciatura en ciencias y técnicas de la comunicación",
"<br><br>Universidad: UNID<br>Licenciatura en educación física, recreación y deporte",
"<br><br>Universidad: UNID<br>Ingeniería en tecnología de información y comunicación",
"<br><br>Universidad: UNID<br>Licenciatura en tecnología educativa"],
carrerasDestrezaManual = ["<br><br>Universidad: UDV<br>Licenciatura en diseño y comunicación visual",
"<br><br>Universidad: UNICLA<br>Animación y Arte Digital",
"<br><br>Universidad: UNICLA<br>Artes Escénicas y Producción de Espectáculos",
"<br><br>Universidad: UNICLA<br>Cultura Física, Recreación y Deporte",
"<br><br>Universidad: UNICLA<br>Diseño Gráfico y Publicidad",
"<br><br>Universidad: UNICLA<br>Industria de la Moda y el Vestido",
"<br><br>Universidad: UNID<br>Licenciatura en diseño gráfico digital",
"<br><br>Universidad: UNIVA<br>Mercadotecnia y Diseño de Marca"],
carrerasPractica = ["<br><br>Universidad: UDV<br>Licenciatura en derecho",
"<br><br>Universidad: UDV<br>Licenciatura en pedagogía",
"<br><br>Universidad: UVA<br>Licenciatura en criminología",
"<br><br>Universidad: UVA<br>Licenciatura en derecho",
"<br><br>Universidad: UNICLA<br>Artes Escénicas y Producción de Espectáculos",
"<br><br>Universidad: UNICLA<br>Ciencias de la Comunicación con terminales",
"<br><br>Universidad: UNICLA<br>Cultura Física, Recreación y Deporte",
"<br><br>Universidad: UNICLA<br>Derecho con terminales",
"<br><br>Universidad: UNICLA<br>Enfermería",
"<br><br>Universidad: UNICLA<br>Enseñanza de las Lenguas Extranjeras",
"<br><br>Universidad: UNICLA<br>Pedagogía con terminales",
"<br><br>Universidad: UNID<br>Licenciatura en ciencias y técnicas de la comunicación",
"<br><br>Universidad: UNID<br>Licenciatura en ciencias jurídicas",
"<br><br>Universidad: UNID<br>Licenciatura en educación física, recreación y deporte",
"<br><br>Universidad: UNID<br>Ingeniería en tecnología de información y comunicación",
"<br><br>Universidad: UNIVA<br>Derecho",
"<br><br>Universidad: UNIVA<br>Mercadotecnia y Diseño de Marca"],
carrerasEjecutiva = ["<br><br>Universidad: UDV<br>Licenciatura en contaduría",
"<br><br>Universidad: UDV<br>Licenciatura en derecho",
"<br><br>Universidad: UVA<br>Licenciatura en contaduría pública",
"<br><br>Universidad: UVA<br>Licenciatura en derecho",
"<br><br>Universidad: UNICLA<br>Contaduría Pública y Finanzas",
"<br><br>Universidad: UNICLA<br>Derecho con terminales",
"<br><br>Universidad: UNICLA<br>Relaciones Internacionales",
"<br><br>Universidad: UNID<br>Licenciatura en ciencias jurídicas",
"<br><br>Universidad: ITSU<br>Ingeniería Industrial",
"<br><br>Universidad: UNIVA<br>Contaduría, Fiscal y Finanzas",
"<br><br>Universidad: UNIVA<br>Derecho"],
carrerasTrabajoDeOficina = ["<br><br>Universidad: UDV<br>Licenciatura en administración",
"<br><br>Universidad: UDV<br>Licenciatura en contaduría",
"<br><br>Universidad: UVA<br>Licenciatura en contaduría pública",
"<br><br>Universidad: UNICLA<br>Administración con terminales",
"<br><br>Universidad: UNICLA<br>Contaduría Pública y Finanzas",
"<br><br>Universidad: UNID<br>Licenciatura en administración de empresas turísticas",
"<br><br>Universidad: ITSU<br>Ingeniería en Administración",
"<br><br>Universidad: UNIVA<br>Administración e Innovación de Negocios",
"<br><br>Universidad: UNIVA<br>Contaduría, Fiscal y Finanzas"];
