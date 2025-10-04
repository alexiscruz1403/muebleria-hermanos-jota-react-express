//todos los productos de la tienda
export const products= [{
    id: "aparador-uspallata",
    nombre: "Aparador Uspallata",
    descripcion:"Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    medidas : "180 × 45 × 75 cm",
    materiales: "Nogal macizo FSC®, herrajes de latón",
    acabado: "Aceite natural ecologico",
    peso : "68 kg",
    capacidad: "6 compartimientos interiores",
    img :{
        src:"../assets/imgs/Aparador_Uspallata.png",
        alt: "Aparador Uspallata"
    },
    precio : 25000,
},{
    id: "biblioteca-recoleta",
    nombre: "Biblioteca Recoleta",
    descripcion:"Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
    medidas : "100 × 35 × 200 cm",
    materiales: "Estructura de acero, estantes de roble",
    acabado: "Laca mate ecológica",
    capacidad: "45 kg por estante",
    modulares: "5 estantes ajustables",
    img : {
        src: "../assets/imgs/Biblioteca_Recoleta.png",
        alt: "Biblioteca Recoleta"
    },
    precio : 15000,
},{
    id: "butaca-mendoza",
    nombre: "Butaca Mendoza",
    descripcion:"Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
    medidas : "80 × 75 × 85 cm",
    materiales: "Guatambú macizo, tela bouclé",
    acabado: "Cera vegetal, tapizado premium",
    tapizado: "Repelente al agua y manchas",
    confort: "Espuma alta densidad",
    img : {
        src: "../assets/imgs/Butaca_Mendoza.png",
        alt: "Butaca Mendoza"
    },
    precio : 8000,
},{
    id: "sillon-copacabana",
    nombre: "Sillón Copacabana",
    descripcion:"Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
    medidas : "90 × 85 × 95 cm",
    materiales: "Cuero curtido vegetal, acero pintado",
    acabado: "Cuero anilina premium",
    rotacion: "360° silenciosa y suave",
    garantia: "10 años en estructura",
    img : {
        src: "../assets/imgs/Sillon_Copacabana.png",
        alt: "Sillón Copacabana"
    },
    precio : 8000,
},
{
    id: "mesa-centro-araucaria",
    nombre: "Mesa de Centro Araucaria",
    descripcion:"Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
    medidas : "90 × 90 × 45 cm",
    materiales: "Sobre de mármol Patagonia, patas de nogal",
    acabado: "Mármol pulido, aceite natural en madera",
    peso : "42 kg",
    capacidad: "25 kg distribuidos",
    img : {
        src: "../assets/imgs/Mesa_de_Centro_Araucaria.png",
        alt: "Mesa de Centro Araucaria"
    },
    precio :8000,
},{
    id: "mesa-noche-aconcagua",
    nombre: "Mesa de Noche Aconcagua",
    descripcion:"Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
    medidas: "45 × 35 × 60 cm",
    materiales: "Roble macizo FSC®, herrajes soft-close",
    acabado: "Barniz mate de poliuretano",
    almacenamiento: "1 cajon + repisa inferior",
    caracteristicas: "Cajón con cierre suave",
    img : {
        src: "../assets/imgs/Mesa_de_Noche_Aconcagua.png",
        alt: "Mesa de Noche Aconcagua"
    },
    precio : 8000,
},{
    id: "cama-neuquen",
    nombre: "Cama Neuquén",
    descripcion: "Cama plataforma con cabecero flotante tapizado en lino natural y estructura de madera maciza. Su diseño minimalista y sofisticado crea un ambiente de serenidad y elegancia, perfecto para dormitorios contemporáneos que buscan paz y simplicidad.",
    medidas: "160 × 200 × 90 cm",
    materiales: "Roble macizo FSC®, tapizado lino",
    acabado: "Aceite natural, tapizado premium",
    colchon: "Compatible con colchón 160×200",
    caracteristicas: "Cabecero flotante acolchado",
    img : {
        src: "../assets/imgs/Cama_Neuquen.png",
        alt: "Cama Neuquén"
    },
    precio : 8000,

},{
    id: "sofa-patagonia",
    nombre: "Sofá Patagonia",
    descripcion:"Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
    medidas: "220 × 90 × 80 cm",    
    estructura: "Madera de eucalipto certificada FSC®",
    tapizado: "Lino 100% natural premium",
    relleno: "Espuma HR + plumón reciclado",    
    sostenibilidad: "Materiales 100% reciclables",
    img : {
        src: "../assets/imgs/Sofa_Patagonia.png",
        alt: "Sofá Patagonia"
    },
    precio : 8000,
},{
    id: "mesa-comedor-pampa",
    nombre: "Mesa Comedor Pampa",
    descripcion:"Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
    medidas: "160-240 × 90 × 75 cm",    
    materiales: "Roble macizo FSC®, mecanismo alemán",
    acabado: "Aceite-cera natural",
    capacidad: "6-10 comensales",
    extension: "Sistema de mariposa central",
    img : {
        src: "../assets/imgs/Mesa_Comedor_Pampa.png",
        alt: "Mesa de Comedor Pampa"
    },
    precio : 8000,

},{
    id: "sillas-cordoba",
    nombre: "Sillas Córdoba",
    descripcion:"Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
    medidas: "45 × 52 × 80 cm (cada una)",    
    materiales: "Contrachapado nogal, tubo de acero",
    acabado: "Laca mate, pintura epoxi",
    apilable: "Hasta 6 sillas",
    incluye: "Set de 4 sillas",
    img : {
        src: "../assets/imgs/Sillas_Cordoba.png",
        alt: "Sillas Córdoba"
    },
    precio : 8000,
},{
    id: "escritorio-costa",
    nombre: "Escritorio Costa",
    descripcion:"Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
    medidas: "120 × 60 × 75 cm",
    materiales: "Bambú laminado, herrajes ocultos",
    acabado: "Laca mate resistente",
    almacenamiento: "1 cajón con organizador",
    cable: "Pasacables integrado",
    img : {
        src: "../assets/imgs/Escritorio_Costa.png",
        alt: "Escritorio Costa"
    },
    precio : 8000,
},{
    id: "silla-trabajo-belgrano",
    nombre: "Silla de Trabajo Belgrano",
    descripcion:"Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
    medidas: "60 × 60 × 90-100 cm",
    materiales: "Malla técnica, tejido reciclado",
    acabado: "Base cromada, tapizado premium",
    regulacion: "Altura + inclinación respaldo",
    certificacion: "Ergonomía europea EN 1335",
    img :{
        src: "../assets/imgs/Silla_de_Trabajo_Belgrano.png",
        alt: "Silla de Trabajo Belgrano"
    },
    precio : 8000,
}

]
