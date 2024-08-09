document.addEventListener("DOMContentLoaded", function () {
    const cartasContainer = document.getElementById("cartas-container");

    const productos = [
        { nombre: "Buen Dia", 
            descripcion: "Cada día tenemos la oportunidad de levantarnos con alegría, sin importar las dificultades que enfrentamos. <br> La Biblia nos dice en el Salmo 118:24: “Este es el día que hizo el Señor; nos gozaremos y alegraremos en él”. <br> Esta simple verdad nos recuerda que cada día es un regalo de Dios.<br>Comenzar el día con una actitud alegre, con una sonrisa, no solo nos beneficia a nosotros, sino también a quienes nos rodean. <br>Proverbios 17:22 dice: “El corazón alegre es buena medicina”. <br>Nuestra alegría puede animar y sanar a otros, mostrando la luz de Cristo en sus vidas. La alegría no depende de nuestras circunstancias. <br>Filipenses 4:4 nos dice: “Regocijaos en el Señor siempre”. Incluso en tiempos difíciles, podemos alegrarnos porque nuestra esperanza está en Dios.<br>Qué Dios te bendiga en este día.<br>Pastor Ricardo Carlos", 
            imagen: "../img_devocionales/buenDia.png" },
        { nombre: "Un Corazón Limpio", 
            descripcion: "Un corazón limpio.La importancia de mantener un corazón limpio es esencial para nuestra relación con Dios y nuestra vida diaria. <br> En Mateo 5:8, Jesús nos dice: “Bienaventurados los de limpio corazón, porque ellos verán a Dios”. Este versículo nos muestra que la pureza del corazón nos permite experimentar la presencia y la guía de Dios de una manera especial.Un corazón limpio implica mantenernos alejados del pecado y las malas intenciones. <br> Proverbios 4:23 nos dice “Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida”. Esto nos recuerda que nuestras acciones y palabras son un reflejo de lo que llevamos en el corazón. Por lo tanto, debemos ser diligentes en llenarlo con lo que es bueno, puro y santo.Mantener un corazón limpio también significa ser honestos y sinceros con nosotros mismos y con los demás. <br> En Salmos 51:10, David clamó: “Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí”. Este clamor revela la necesidad de depender de Dios para la limpieza y renovación continua de nuestro corazón.<br> En nuestra vida cotidiana, podemos mantener un corazón limpio a través de la oración, la lectura de la Palabra de Dios y el arrepentimiento constante. Cuando reconocemos nuestras fallas y buscamos la purificación en Dios, nos acercamos más a Él y podemos vivir en paz y libertad.<br> Pastor Ricardo Carlos.", 
            imagen: "../img_devocionales/corazonLimpio.png" },
        { nombre: "El corazón conoce su propia amrgura", 
            descripcion: "“El corazón conoce su propia amargura, y extraño no se entremeterá en su alegría.” (Proverbios 14:10)Cada uno de nosotros conoce la profundidad de su propio dolor y la alegría que llevamos dentro. Sin embargo, muchas veces intentamos llenar nuestros vacíos emocionales y espirituales con cosas temporales: relaciones, posesiones, éxitos, o placeres momentáneos. <br> A pesar de estos esfuerzos, el vacío permanece, porque solo hay Uno que puede verdaderamente llenar nuestro corazón: Jesús.Jesús dijo en Juan 4:13-14, “Cualquiera que bebiere de esta agua, volverá a tener sed; mas el que bebiere del agua que yo le daré, no tendrá sed jamás.”<br> Esta agua que Jesús ofrece es su amor, su presencia y su salvación. Nada en este mundo puede compararse con la plenitud que encontramos en Él.Intentar llenar nuestro corazón con lo temporal es como tratar de llenar un pozo sin fondo. Pero cuando invitamos a Jesús a nuestras vidas, Él llena ese vacío con su amor perfecto y eterno.<br> Él trae paz, alegría y propósito, cosas que el mundo no puede ofrecer.Hoy, te invito a abrir tu corazón a Jesús. Permítele llenar cada rincón con su amor y gracia. <br> Descubrirás que con Él, el vacío se desvanece y encuentras una satisfacción que nunca imaginaste. <br>Pastor Ricardo Carlos.", 
            imagen: "../img_devocionales/corazonPropiaAmargura.png" },
        { nombre: "Salmo 101", 
            descripcion: "Al leer en esta mañana el Salmo 101, quiero compartir con ustedes algo que me parece importante. David empieza alabando a Dios por su amor y justicia, y eso me recuerda que debemos comenzar cada día agradeciendo y adorando a Dios. David también promete vivir con integridad en su hogar. Esto me hace pensar que la verdadera integridad empieza en casa, en lo que hacemos cuando nadie nos ve. Debemos esforzarnos por ser personas íntegras en todas las áreas de nuestras vidas. Además, David dice que se negará a mirar cosas malas y que detesta la deshonestidad. En nuestra vida diaria, es crucial evitar todo lo que pueda desviarnos de los caminos de Dios y alejarnos de influencias negativas. Así que, hoy los animo a reflexionar sobre cómo estamos viviendo nuestras vidas. ¿Estamos comenzando nuestros días con gratitud? ¿Estamos siendo íntegros incluso cuando nadie nos ve? ¿Estamos evitando las influencias negativas? <br> Oremos juntos: Señor, ayúdame a vivir con integridad y a rechazar lo que no te agrada. Que mi vida refleje tu amor y justicia. Amén.", 
            imagen: "../img_devocionales/salmo101.png" },
        { nombre: "Todo lo hizo Dios hermoso en su tiempo", 
            descripcion: "En Eclesiastés 3:11, se nos dice que “Dios hizo todo hermoso en su momento, y ha puesto eternidad en el corazón del hombre, aunque éste no alcanza a comprender todo lo que Dios ha hecho desde el principio hasta el fin.” Este versículo me ha hecho pensar mucho en cómo manejamos nuestras vidas y nuestras expectativas.A veces, nos sentimos impacientes o frustrados porque las cosas no suceden en el momento que queremos. Queremos que nuestras oraciones sean respondidas inmediatamente o que nuestros sueños se hagan realidad sin demora. Pero este versículo nos recuerda que Dios tiene un plan perfecto y que todo sucede en su tiempo. Aunque no siempre entendemos sus caminos, podemos confiar en que Él está trabajando para nuestro bien.Creo que esto nos enseña a tener más paciencia y a mantener la esperanza. En lugar de preocuparnos o apresurarnos, podemos esperar con confianza en el tiempo perfecto de Dios. Cada día es una oportunidad para vivir con propósito y significado, alineándonos con el plan eterno que Dios tiene para nosotros. Sé que puede ser difícil esperar, pero recuerda que Dios hará todo hermoso en su momento.Pastor Ricardo Carlos", 
            imagen: "../img_devocionales/hermosoEnSuTiempo.png" },
    ];

    productos.forEach((producto) => {
        const carta = document.createElement("div");
        carta.classList.add("carta");
        carta.innerHTML = `
            <h2>${producto.nombre}</h2>
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="carta-texto">
                <p class="descripcionProducto" style="display: none;">${producto.descripcion}</p>
                <button class="mostrarDescripcion" onclick="mostrarDescripcion(this)">Ver Devocional</button>
            </div>
        `;
        cartasContainer.appendChild(carta);
    });
});

function mostrarDescripcion(boton) {
    const descripcion = boton.previousElementSibling;
    descripcion.style.display = "block";
    boton.style.display = "none";
}

