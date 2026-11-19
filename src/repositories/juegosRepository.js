
const juegos = {
    1: {
        id: 1,
        nombre: "The Legend of Zelda: Twilight Princess",
        precio: "$30.000",
        imagen: "img/zelda.jpg",
        descripcion: "Un oscuro mal se ha extendido sobre la tierra de Hyrule, así que un pequeño granjero llamado Link debe despertar el héroe que lleva dentro y salvar a su mundo de una destrucción segura.",
    },
    2: {
        id: 2,
        nombre: "Hollow Knight: Silkson",
        precio: "$11.000",
        imagen: "img/silksong.avif",
        descripcion: "¡Descubre un vasto reino embrujado en Hollow Knight: Silksong! Explora, lucha y sobrevive mientras asciendes a la cima de un vasto reino gobernado por la seda y el canto.",
    },
    3: {
        id: 3,
        nombre: "Hades 2",
        precio: "$16.000",
        imagen: "img/hades-2.jpeg",
        descripcion: "Usa las artes oscuras para abrirte paso más allá del inframundo y enfréntate al Titán del Tiempo en esta cautivadora continuación del galardonado juego de mazmorras de tipo rogue-like.",
    },
}

export const obtenerJuegos = async () => {
  return juegos;
}