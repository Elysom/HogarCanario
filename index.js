const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const sitiosFamosos = [
  // Gran Canaria
  {
    nombre: "Playa de Las Canteras",
    descripcion: "Una de las playas más famosas de Las Palmas de Gran Canaria, conocida por su arena dorada y aguas tranquilas.",
    imagen: "images/sitios/playacanteras.jpg",
    tipo: "Naturaleza",
    isla: "Gran Canaria"
  },  {
    nombre: "Garachico",
    descripcion: "Un pintoresco pueblo con piscinas naturales formadas por lava volcánica.",
    imagen: "images/sitios/garachico.jpg",
    tipo: "Cultura",
    isla: "Tenerife"
  },
  {
    nombre: "Parque Nacional de Timanfaya",
    descripcion: "Paisajes volcánicos impresionantes con actividad geotérmica.",
    imagen: "images/sitios/timanfaya.jpg",
    tipo: "Naturaleza",
    isla: "Lanzarote"
  },
  {
    nombre: "Roque Nublo",
    descripcion: "Un monolito de piedra volcánica y un mirador, símbolo de Gran Canaria.",
    imagen: "images/sitios/roquenublo.jpg",
    tipo: "Monumento",
    isla: "Gran Canaria"
  },
  {
    nombre: "Dunas de Maspalomas",
    descripcion: "Un impresionante desierto de dunas en el sur de la isla, perfecto para paseos y fotografía.",
    imagen: "images/sitios/dunasmaspalomas.jpg",
    tipo: "Naturaleza",
    isla: "Gran Canaria"
  },
  {
    nombre: "Cueva Pintada",
    descripcion: "Un yacimiento arqueológico prehispánico donde se pueden ver pinturas rupestres de los antiguos canarios.",
    imagen: "images/sitios/cuevapintada.jpg",
    tipo: "Monumento",
    isla: "Gran Canaria"
  },  {
    nombre: "Betancuria",
    descripcion: "La antigua capital de Fuerteventura, con encanto colonial.",
    imagen: "images/sitios/betancuria.jpg",
    tipo: "Cultura",
    isla: "Fuerteventura"
  },
  {
    nombre: "Parque Nacional de la Caldera de Taburiente",
    descripcion: "Un enorme cráter con senderos y bosques impresionantes.",
    imagen: "images/sitios/caldera-taburiente.jpg",
    tipo: "Naturaleza",
    isla: "La Palma"
  },
  {
    nombre: "Puerto de Mogán",
    descripcion: "Un hermoso pueblo costero conocido como la 'Venecia de Canarias' por sus canales y arquitectura pintoresca.",
    imagen: "images/sitios/puertomogan.jpg",
    tipo: "Cultura",
    isla: "Gran Canaria"
  },
  {
    nombre: "Jungle house",
    descripcion: "No dejes tu jack daniel's en la nevera que te lo roba un nicaraguense",
    imagen: "images/sitios/junglehouse.jpg",
    tipo: "Monumento",
    isla: "Gran Canaria"
  },
  {
    nombre: "Pico de las Nieves",
    descripcion: "El punto más alto de Gran Canaria con vistas panorámicas impresionantes de la isla.",
    imagen: "images/sitios/picodelasnieves.jpg",
    tipo: "Naturaleza",
    isla: "Gran Canaria"
  },  {
    nombre: "Mirador del Río",
    descripcion: "Un mirador espectacular diseñado por César Manrique.",
    imagen: "images/sitios/mirador-rio.jpg",
    tipo: "Monumento",
    isla: "Lanzarote"
  },
  {
    nombre: "Parque Natural de Corralejo",
    descripcion: "Dunas doradas y playas de agua cristalina en el norte de la isla.",
    imagen: "images/sitios/corralejo.jpg",
    tipo: "Naturaleza",
    isla: "Fuerteventura"
  },
  {
    nombre: "Jardín Botánico Viera y Clavijo",
    descripcion: "El mayor jardín botánico de España con una increíble diversidad de flora canaria.",
    imagen: "images/sitios/jardinbotanico.jpg",
    tipo: "Naturaleza",
    isla: "Gran Canaria"
  },
  {
    nombre: "Teror",
    descripcion: "Un pueblo histórico con calles empedradas, balcones canarios y la Basílica de Nuestra Señora del Pino.",
    imagen: "images/sitios/teror.jpg",
    tipo: "Cultura",
    isla: "Gran Canaria"
  },
  {
    nombre: "Barranco de Guayadeque",
    descripcion: "Un barranco espectacular con casas cueva y restaurantes en el interior de la roca.",
    imagen: "images/sitios/guayadeque.jpg",
    tipo: "Naturaleza",
    isla: "Gran Canaria"
  },
  {
    nombre: "Faro de Maspalomas",
    descripcion: "Un icónico faro del siglo XIX junto a la playa de Maspalomas, ideal para paseos al atardecer.",
    imagen: "images/sitios/faromaspalomas.jpg",
    tipo: "Monumento",
    isla: "Gran Canaria"
  },
  {
    nombre: "Agaete y el Puerto de Las Nieves",
    descripcion: "Un pintoresco pueblo pesquero con piscinas naturales y vistas al Teide.",
    imagen: "images/sitios/puertolasnieves.jpg",
    tipo: "Cultura",
    isla: "Gran Canaria"
  },
  {
    nombre: "Caldera de Bandama",
    descripcion: "Un enorme cráter volcánico con senderos y vistas espectaculares.",
    imagen: "images/sitios/calderabandama.jpg",
    tipo: "Naturaleza",
    isla: "Gran Canaria"
  },
  {
    nombre: "Playa de Amadores",
    descripcion: "Una playa artificial con aguas cristalinas y arena blanca importada del Caribe.",
    imagen: "images/sitios/playaamadores.jpg",
    tipo: "Naturaleza",
    isla: "Gran Canaria"
  },
  {
    nombre: "Cenobio de Valerón",
    descripcion: "Un impresionante granero excavado en la roca por los antiguos aborígenes canarios.",
    imagen: "images/sitios/cenobiovaleron.jpg",
    tipo: "Monumento",
    isla: "Gran Canaria"
  },
  {
    nombre: "Presa de Soria",
    descripcion: "Una de las presas más grandes de Gran Canaria, rodeada de naturaleza y tranquilidad.",
    imagen: "images/sitios/presasoria.jpg",
    tipo: "Naturaleza",
    isla: "Gran Canaria"
  },
  {
    nombre: "Mirador de Abrante",
    descripcion: "Un mirador con suelo de cristal sobre el acantilado.",
    imagen: "images/sitios/mirador-abrante.jpg",
    tipo: "Monumento",
    isla: "La Gomera"
  },
  {
    nombre: "Mirador de La Peña",
    descripcion: "Un mirador diseñado por César Manrique con vistas espectaculares.",
    imagen: "images/sitios/mirador-peña.jpg",
    tipo: "Monumento",
    isla: "El Hierro"
  },
  {
    nombre: "San Mateo",
    descripcion: "Un pueblo rural con uno de los mercados agrícolas más tradicionales de la isla.",
    imagen: "images/sitios/sanmateo.jpg",
    tipo: "Cultura",
    isla: "Gran Canaria"
  },
  {
    nombre: "Playa de Güigüi",
    descripcion: "Una playa virgen y paradisíaca, accesible solo a pie o en barco.",
    imagen: "images/sitios/playaguigui.jpg",
    tipo: "Naturaleza",
    isla: "Gran Canaria"
  },
  {
    nombre: "Fataga",
    descripcion: "Un encantador pueblo en el Valle de las Mil Palmeras, rodeado de montañas.",
    imagen: "images/sitios/fataga.jpg",
    tipo: "Cultura",
    isla: "Gran Canaria"
  },
  {
    nombre: "Casa de Colón",
    descripcion: "Un museo en Las Palmas de Gran Canaria que explora la relación de Colón con las islas.",
    imagen: "images/sitios/casacolon.jpg",
    tipo: "Cultura",
    isla: "Gran Canaria"
  },  // Tenerife
  {
    nombre: "Teide",
    descripcion: "El pico más alto de España y un Parque Nacional espectacular.",
    imagen: "images/sitios/teide.jpg",
    tipo: "Naturaleza",
    isla: "Tenerife"
  },
  {
    nombre: "Loro Parque",
    descripcion: "Un zoológico y acuario famoso por sus espectáculos de animales.",
    imagen: "images/sitios/loro-parque.jpg",
    tipo: "Cultura",
    isla: "Tenerife"
  },
  {
    nombre: "Auditorio de Tenerife",
    descripcion: "Una obra arquitectónica icónica de Santiago Calatrava.",
    imagen: "images/sitios/auditorio.jpg",
    tipo: "Monumento",
    isla: "Tenerife"
  },
  {
    nombre: "Playa de las Teresitas",
    descripcion: "Una playa paradisíaca con arena dorada traída del Sahara.",
    imagen: "images/sitios/teresitas.jpg",
    tipo: "Naturaleza",
    isla: "Tenerife"
  },
  {
    nombre: "Cueva de los Verdes",
    descripcion: "Un túnel volcánico con una historia fascinante.",
    imagen: "images/sitios/cueva-los-verdes.jpg",
    tipo: "Naturaleza",
    isla: "Lanzarote"
  },
  {
    nombre: "Jameos del Agua",
    descripcion: "Un espacio artístico y natural creado por César Manrique.",
    imagen: "images/sitios/jameos.jpg",
    tipo: "Cultura",
    isla: "Lanzarote"
  },
  {
    nombre: "Playa de Papagayo",
    descripcion: "Una de las playas más hermosas de Lanzarote con aguas turquesas.",
    imagen: "images/sitios/papayo.jpg",
    tipo: "Naturaleza",
    isla: "Lanzarote"
  },
  {
    nombre: "Isla de Lobos",
    descripcion: "Un islote virgen con senderos y playas paradisíacas.",
    imagen: "images/sitios/isla-de-lobos.jpg",
    tipo: "Naturaleza",
    isla: "Fuerteventura"
  },
  {
    nombre: "Cueva del Llano",
    descripcion: "Un tubo volcánico subterráneo con una fauna única.",
    imagen: "images/sitios/cueva-del-llano.jpg",
    tipo: "Naturaleza",
    isla: "Fuerteventura"
  },
  {
    nombre: "Playa de Cofete",
    descripcion: "Una playa salvaje y aislada con paisajes impresionantes.",
    imagen: "images/sitios/cofete.webp",
    tipo: "Naturaleza",
    isla: "Fuerteventura"
  },
  {
    nombre: "Roque de los Muchachos",
    descripcion: "El punto más alto de la isla, con observatorios astronómicos.",
    imagen: "images/sitios/roque-muchachos.jpg",
    tipo: "Naturaleza",
    isla: "La Palma"
  },
  {
    nombre: "Bosque de los Tilos",
    descripcion: "Un frondoso bosque de laurisilva con cascadas y senderos.",
    imagen: "images/sitios/bosque-tilos.jpg",
    tipo: "Naturaleza",
    isla: "La Palma"
  },
  {
    nombre: "Volcán de San Antonio",
    descripcion: "Un cráter volcánico con un mirador impresionante.",
    imagen: "images/sitios/volcan-san-antonio.jpg",
    tipo: "Naturaleza",
    isla: "La Palma"
  },
  {
    nombre: "Santa Cruz de La Palma",
    descripcion: "Una ciudad colonial con balcones tradicionales y calles empedradas.",
    imagen: "images/sitios/santa-cruz.jpg",
    tipo: "Cultura",
    isla: "La Palma"
  },  // La Gomera
  {
    nombre: "Parque Nacional de Garajonay",
    descripcion: "Un bosque subtropical de laurisilva declarado Patrimonio de la Humanidad.",
    imagen: "images/sitios/garajonay.jpg",
    tipo: "Naturaleza",
    isla: "La Gomera"
  },
  {
    nombre: "Valle Gran Rey",
    descripcion: "Un destino costero con playas, acantilados y senderos.",
    imagen: "images/sitios/vaye-gran-rey.jpg",
    tipo: "Naturaleza",
    isla: "La Gomera"
  },
  {
    nombre: "San Sebastián de La Gomera",
    descripcion: "Capital de la isla con historia vinculada a Cristóbal Colón.",
    imagen: "images/sitios/san-sevastian.jpg",
    tipo: "Cultura",
    isla: "La Gomera"
  },
  {
    nombre: "Los Órganos",
    descripcion: "Un espectacular acantilado de roca basáltica en forma de tubos de órgano.",
    imagen: "images/sitios/organos.jpg",
    tipo: "Naturaleza",
    isla: "La Gomera"
  },
  {
    nombre: "Charco Azul",
    descripcion: "Una piscina natural de aguas cristalinas entre lava volcánica.",
    imagen: "images/sitios/charco-azul.jpg",
    tipo: "Naturaleza",
    isla: "El Hierro"
  },
  {
    nombre: "El Sabinar",
    descripcion: "Un bosque de sabinas con formas retorcidas por el viento.",
    imagen: "images/sitios/sabinar.jpg",
    tipo: "Naturaleza",
    isla: "El Hierro"
  },
  {
    nombre: "La Restinga",
    descripcion: "Un pequeño pueblo pesquero con algunos de los mejores fondos marinos de Canarias.",
    imagen: "images/sitios/restinga.jpg",
    tipo: "Cultura",
    isla: "El Hierro"
  }
];
//Usamos cors para permitir peticiones desde cualquier origen(Dado a que tenemos la página en otro puerto)
app.use(cors());

app.use("/public",express.static('public'));


// Ruta con opción de límite
app.get('/api/sitios', (req, res) => {
  let { limit } = req.query;
  limit = parseInt(limit);

  if (!isNaN(limit) && limit > 0) {
    return res.json(sitiosFamosos.slice(0, limit));
  }

  res.json(sitiosFamosos);
});

// Ruta para obtener un sitio aleatorio
app.get('/api/sitios/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * sitiosFamosos.length);
  res.json(sitiosFamosos[randomIndex]);
});

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});