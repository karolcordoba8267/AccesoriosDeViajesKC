import avion from "./avion.png"
import img02 from "./img.jpg"
import img03 from "./img03.jpg";
import img04 from "./img04.jpg";
import img05 from "./img05.jpg";
import img06 from "./img06.jpg";
import img07 from "./img07.jpg";
import img08 from "./img08.jpg";
import img09 from "./img09.jpg";
import img10 from "./img10.jpg";
import img11 from "./img11.jpg";
import img12 from "./img12.jpg";
import img13 from "./img13.jpg";
import img14 from "./img14.jpg";
import img15 from "./img15.jpg";
import img16 from "./img16.jpg";
import img17 from "./img17.jpg";
import img18 from "./img18.jpg";
import img19 from "./img19.jpg";
import img20 from "./img20.jpg";
import img21 from "./img21.jpg";
import img22 from "./img22.jpg";
import img23 from "./img23.jpg";
import img24 from "./img24.jpg";
import img25 from "./img25.jpg";
import img26 from "./img26.jpg";
import img27 from "./img27.jpg";
import img28 from "./img28.jpg";
import img29 from "./img29.jpg";

let all_product = [
    {
        "id": 1,
        "name": "Gafas de sol polarizadas",
        "category": "verano",
        "image": "img01",
        "new_price": 50.0,
        "old_price": 80.5,
        "description": "Protege tus ojos del sol con estas gafas de sol polarizadas. Perfectas para viajes a la playa o la montaña."
    },
    {
        "id": 2,
        "name": "Mochila de viaje ultraligera",
        "category": "invierno",
        "image": "img02",
        "new_price": 120.0,
        "old_price": 180.0,
        "description": "Lleva todo lo que necesitas para tu viaje en esta mochila ultraligera y cómoda."
    },
    {
        "id": 3,
        "name": "Adaptador universal de viaje",
        "category": "primavera",
        "image": "img03",
        "new_price": 15.0,
        "old_price": 20.0,
        "description": "Conecta tus dispositivos electrónicos en cualquier país del mundo con este adaptador universal."
    },
    {
        "id": 4,
        "name": "Botella de agua reutilizable",
        "category": "primavera",
        "image": "img04",
        "new_price": 20.0,
        "old_price": 30.0,
        "description": "Mantente hidratado en tu viaje con esta botella de agua reutilizable."
    },
    {
        "id": 5,
        "name": "Almohada de viaje con memoria de forma",
        "category": "invierno",
        "image": "img05",
        "new_price": 30.0,
        "old_price": 45.0,
        "description": "Duerme cómodamente en tu viaje con esta almohada de viaje con memoria de forma."
    },
    {
        "id": 6,
        "name": "Antifaz para dormir",
        "category": "invierno",
        "image": "img06",
        "new_price": 10.0,
        "old_price": 15.0,
        "description": "Consigue un sueño reparador en tu viaje con este antifaz para dormir."
    },
    {
        "id": 7,
        "name": "Tapones para los oídos",
        "category": "invierno",
        "image": "img07",
        "new_price": 5.0,
        "old_price": 8.0,
        "description": "Disfruta de paz y tranquilidad en tu viaje con estos tapones para los oídos."
    },
    {
        "id": 8,
        "name": "Candado para maleta con TSA",
        "category": "invierno",
        "image": "img08",
        "new_price": 25.0,
        "old_price": 35.0,
        "description": "Protege tus pertenencias en tu viaje con este candado para maleta con TSA."
    },
    {
        "id": 9,
        "name": "Neceser de viaje transparente",
        "category": "invierno",
        "image": "img09",
        "new_price": 15.0,
        "old_price": 25.0,
        "description": "Lleva tus artículos de aseo personal en este neceser de viaje transparente."
    },
    {
        "id": 10,
        "name": "Organizador de maleta",
        "category": "invierno",
        "image": "img10",
        "new_price": 20.0,
        "old_price": 30.0,
        "description": "Organiza tu equipaje de forma eficiente con este organizador de maleta."
    },
    {
        "id": 11,
        "name": "Bolsa de lavandería",
        "category": "invierno",
        "image": "img11",
        "new_price": 55,
        "old_price": 30.0,
        "description": "Organiza tu equipaje de forma eficiente con este organizador de maleta."
    },
    {
        "id": 12,
        "name": "Toalla de microfibra",
        "category": "invierno",
        "image": "img12",
        "new_price": 15.0,
        "old_price": 20.0,
        "description": "Seca tu cuerpo rápidamente después de la ducha o la piscina con esta toalla de microfibra compacta y ligera."
    },
    {
        "id": 13,
        "name": "Paraguas de viaje plegable",
        "category": "invierno",
        "image": "img13",
        "new_price": 25.0,
        "old_price": 35.0,
        "description": "Protégete de la lluvia en tu viaje con este paraguas de viaje plegable y resistente al viento."
    },
    {
        "id": 14,
        "name": "Kit de primeros auxilios",
        "category": "invierno",
        "image": "img14",
        "new_price": 10.0,
        "old_price": 15.0,
        "description": "Ten a mano todo lo necesario para tratar pequeñas lesiones en tu viaje con este kit de primeros auxilios."
    },
    {
        "id": 15,
        "name": "Batería externa portátil",
        "category": "invierno",
        "image": "img15",
        "new_price": 30.0,
        "old_price": 45.0,
        "description": "Mantén tus dispositivos electrónicos cargados en tu viaje con esta batería externa portátil."
    },
    {
        "id": 16,
        "name": "Adaptador de enchufe europeo",
        "category": "invierno",
        "image": "img16",
        "new_price": 5.0,
        "old_price": 8.0,
        "description": "Conecta tus dispositivos electrónicos a enchufes europeos con este adaptador."
    },
    {
        "id": 17,
        "name": "Gafas de lectura",
        "category": "invierno",
        "image": "img17",
        "new_price": 10.0,
        "old_price": 15.0,
        "description": "Lleva contigo estas gafas de lectura compactas para leer en el avión o en el tren."
    },
    {
        "id": 18,
        "name": "Funda para pasaporte",
        "category": "invierno",
        "image": "img18",
        "new_price": 15.0,
        "old_price": 20.0,
        "description": "Protege tu pasaporte y otros documentos de viaje con esta funda elegante y resistente."
    },
    {
        "id": 19,
        "name": "Cinturón de viaje con bolsillos ocultos",
        "category": "invierno",
        "image": "img19",
        "new_price": 25.0,
        "old_price": 35.0,
        "description": "Mantén tus objetos de valor seguros y accesibles en tu viaje con este cinturón con bolsillos ocultos."
    },
    {
        "id": 20,
        "name": "Almohada de cuello inflable",
        "category": "invierno",
        "image": "img20",
        "new_price": 15.0,
        "old_price": 20.0,
        "description": "Descansa cómodamente en tu viaje con esta almohada de cuello inflable."
    },
    {
        "id": 21,
        "name": "Bolsa de mano para viaje",
        "category": "verano",
        "image": "img21",
        "new_price": 40.0,
        "old_price": 60.0,
        "description": "Lleva contigo tus artículos esenciales de viaje en esta bolsa de mano ligera y práctica."
    },
    {
        "id": 22,
        "name": "Botella de agua plegable",
        "category": "primavera",
        "image": "img22",
        "new_price": 12.0,
        "old_price": 18.0,
        "description": "Lleva contigo esta botella de agua plegable y reutilizable para mantenerte hidratado durante tus aventuras."
    },
    {
        "id": 23,
        "name": "Candado TSA",
        "category": "verano",
        "image": "img23",
        "new_price": 8.0,
        "old_price": 12.0,
        "description": "Protege tus pertenencias con este candado aprobado por la TSA para viajes internacionales."
    },
    {
        "id": 24,
        "name": "Antifaz para dormir",
        "category": "primavera",
        "image": "img24",
        "new_price": 6.0,
        "old_price": 10.0,
        "description": "Descansa cómodamente en el avión o en el hotel con este antifaz suave y ajustable."
    },
    {
        "id": 25,
        "name": "Organizador de cables",
        "category": "primavera",
        "image": "img25",
        "new_price": 9.0,
        "old_price": 14.0,
        "description": "Mantén tus cables y cargadores ordenados con este práctico organizador."
    },
    {
        "id": 26,
        "name": "Mapa de viaje rascable",
        "category": "verano",
        "image": "img26",
        "new_price": 20.0,
        "old_price": 28.0,
        "description": "Registra tus destinos visitados rascando este mapa de viaje interactivo."
    },
    {
        "id": 27,
        "name": "Bolsa impermeable para teléfono",
        "category": "primavera",
        "image": "img27",
        "new_price": 7.0,
        "old_price": 12.0,
        "description": "Protege tu teléfono de la lluvia y la humedad con esta bolsa impermeable transparente."
    },
    {
        "id": 28,
        "name": "Cargador universal",
        "category": "primavera",
        "image": "img28",
        "new_price": 18.0,
        "old_price": 25.0,
        "description": "Carga tus dispositivos en cualquier parte del mundo con este cargador compatible con múltiples enchufes."
    },
    {
        "id": 29,
        "name": "Mochila de viaje resistente al agua",
        "category": "verano",
        "image": "img29",
        "new_price": 40.0,
        "old_price": 55.0,
        "description": "Guarda tus pertenencias de forma segura en esta mochila espaciosa y resistente al agua."
    },
    {
        "id": 30,
        "name": "Cepillo de dientes de viaje",
        "category": "primavera",
        "image": "img30",
        "new_price": 4.0,
        "old_price": 7.0,
        "description": "Mantén tu higiene bucal en tus aventuras con este cepillo de dientes compacto y portátil."
    }
];
