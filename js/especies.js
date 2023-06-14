function abrirVentanaEmergente1() {
    // Crear un div para la ventana emergente
    var ventana = document.createElement("div");
    ventana.className = "ventana-emergente";

    // Agregar contenido a la ventana emergente
    var contenido = "El tiburón alfombra (Hemiscyllium spp.), también conocido como tiburón de alfombra o tiburón caminante, es una especie de tiburón que se encuentra en las aguas tropicales poco profundas del océano Índico y el Pacífico occidental. A diferencia de otros tiburones, el tiburón alfombra tiene la capacidad única de caminar sobre el fondo marino utilizando sus aletas pectorales y pelvicas modificadas.<br><br>Estos tiburones tienen un cuerpo alargado y plano, lo que les permite moverse de manera más eficiente en los entornos coralinos y rocosos donde habitan. Su piel presenta un patrón de manchas y rayas que los ayuda a camuflarse entre las algas y los corales, proporcionándoles una excelente capacidad de mimetismo.<br><br>El tiburón alfombra es generalmente inofensivo para los humanos, ya que se alimenta principalmente de pequeños peces y crustáceos. Son tímidos y suelen retirarse o esconderse cuando se acerca alguien.";
    ventana.innerHTML = contenido;

    // Crear el botón de cierre
    var botonCerrar = document.createElement("span");
    botonCerrar.className = "cerrar";
    botonCerrar.innerHTML = "X";
    botonCerrar.onclick = function () {
        document.body.removeChild(ventana);
    };

    // Agregar el botón de cierre a la ventana emergente
    ventana.appendChild(botonCerrar);

    // Agregar la ventana emergente al cuerpo del documento
    document.body.appendChild(ventana);
}
function abrirVentanaEmergente2() {
    // Crear un div para la ventana emergente
    var ventana = document.createElement("div");
    ventana.className = "ventana-emergente";

    // Agregar contenido a la ventana emergente
    var contenido = "El tiburón ángel, también conocido como tiburón ángel colilargo o tiburón ángel de aguas profundas (Squatina squatina), es una especie de tiburón que se encuentra en aguas frías del Atlántico norte y el Mediterráneo. A pesar de su nombre, el tiburón ángel no es un verdadero tiburón, sino un tipo de pez plano conocido como raya guitarra.<br><br>El tiburón ángel se caracteriza por su cuerpo plano y ensanchado, que se asemeja a una alfombra en forma. Tienen aletas pectorales grandes y redondeadas, que los ayudan a nadar y a moverse en el fondo marino. Su coloración varía desde tonos marrones hasta grisáceos, lo que les permite camuflarse entre las arenas y los sedimentos marinos.<br><br>Estos tiburones son depredadores nocturnos y se alimentan principalmente de peces óseos, crustáceos y cefalópodos. Pasan la mayor parte del tiempo camuflados en el fondo marino, enterrados parcialmente en la arena, esperando a que su presa se acerque lo suficiente para emboscarla.<br><br>El tiburón ángel es considerado una especie en peligro de extinción debido a la pesca excesiva y la degradación de su hábitat. Actualmente, está protegido en muchas áreas para ayudar a su conservación.<br><br>Es importante destacar que el tiburón ángel es una especie que no debe ser capturada ni perturbada. Si tienes la oportunidad de avistar uno en su entorno natural, es mejor admirar su belleza desde una distancia segura sin interferir con su comportamiento natural.<br><br>En resumen, el tiburón ángel es una especie fascinante que se asemeja a una raya en forma y comportamiento. Su capacidad de camuflaje y su estilo de vida en el fondo marino lo convierten en un depredador eficiente y adaptado a su entorno. Sin embargo, debido a su estado de conservación, es importante proteger y preservar esta especie única.";
    ventana.innerHTML = contenido;

    // Crear el botón de cierre
    var botonCerrar = document.createElement("span");
    botonCerrar.className = "cerrar";
    botonCerrar.innerHTML = "X";
    botonCerrar.onclick = function () {
        document.body.removeChild(ventana);
    };

    // Agregar el botón de cierre a la ventana emergente
    ventana.appendChild(botonCerrar);

    // Agregar la ventana emergente al cuerpo del documento
    document.body.appendChild(ventana);
}
function abrirVentanaEmergente3() {
    // Crear un div para la ventana emergente
    var ventana = document.createElement("div");
    ventana.className = "ventana-emergente";

    // Agregar contenido a la ventana emergente
    var contenido = "El tiburón anguila, también conocido como tiburón anguila de arena o tiburón anguila espinoso (Chlamydoselachus anguineus), es una especie de tiburón que pertenece a una familia antigua y primitiva llamada Chlamydoselachidae. Este tiburón es notable por su apariencia inusual y su adaptación al hábitat de las profundidades marinas.<br><br>El tiburón anguila tiene un cuerpo largo y delgado, similar a una anguila, de ahí su nombre. Su piel está cubierta de escamas dentadas y puntiagudas, que le otorgan un aspecto espinoso. Su boca se encuentra en posición terminal, lo que significa que está ubicada en la parte frontal de la cabeza. Además, sus aletas pectorales son muy grandes y se asemejan a las alas de un murciélago.<br><br>Estos tiburones habitan en las profundidades del océano, generalmente a más de 200 metros de profundidad, aunque pueden encontrarse a más de 1.000 metros. Se distribuyen en aguas templadas y frías alrededor del mundo. Debido a su hábitat en las profundidades, se sabe poco sobre su comportamiento y ciclo de vida.<br><br>El tiburón anguila se alimenta principalmente de peces y cefalópodos que habitan en las profundidades marinas. Aunque es un depredador, su naturaleza es poco conocida debido a su inaccesibilidad en el medio marino.<br><br>Dado que el tiburón anguila se encuentra en aguas profundas y no es comúnmente capturado, no representa una amenaza significativa para los humanos. Sin embargo, debido a la falta de información sobre su población y su biología, se considera una especie vulnerable en términos de conservación.<br><br>En resumen, el tiburón anguila es una especie intrigante y misteriosa que se adapta a las profundidades marinas. Su apariencia única y su hábitat inaccesible han llevado a que se sepa relativamente poco sobre su comportamiento y biología. Para su protección, es fundamental conservar y preservar los hábitats de las profundidades marinas donde habita.";
    ventana.innerHTML = contenido;

    // Crear el botón de cierre
    var botonCerrar = document.createElement("span");
    botonCerrar.className = "cerrar";
    botonCerrar.innerHTML = "X";
    botonCerrar.onclick = function () {
        document.body.removeChild(ventana);
    };

    // Agregar el botón de cierre a la ventana emergente
    ventana.appendChild(botonCerrar);

    // Agregar la ventana emergente al cuerpo del documento
    document.body.appendChild(ventana);
}
function abrirVentanaEmergente4() {
    // Crear un div para la ventana emergente
    var ventana = document.createElement("div");
    ventana.className = "ventana-emergente";

    // Agregar contenido a la ventana emergente
    var contenido = "El tiburón azul, también conocido como tintorera o tiburón azul común (Prionace glauca), es una especie de tiburón ampliamente distribuida en los océanos de todo el mundo. Es conocido por su característico color azul metálico en la parte superior de su cuerpo.<br><br>Los tiburones azules tienen un cuerpo alargado y esbelto, con una forma hidrodinámica que les permite nadar rápidamente en el agua. Son depredadores oportunistas y se alimentan de una amplia variedad de presas, como peces, calamares y crustáceos.<br><br>Estos tiburones son migratorios y pueden realizar movimientos a larga distancia. Se han registrado migraciones de tiburones azules de hasta 4.000 kilómetros. Además, son capaces de sumergirse a grandes profundidades, llegando incluso a alcanzar más de 1.000 metros.<br><br>El tiburón azul es una especie importante desde el punto de vista comercial, ya que su carne y aletas son utilizadas en la industria pesquera. Esto ha llevado a preocupaciones sobre su conservación y a la implementación de medidas de manejo para su protección.<br><br>A pesar de su tamaño y apariencia imponente, el tiburón azul no representa una amenaza significativa para los seres humanos. Los encuentros con tiburones azules suelen ser pacíficos y se recomienda mantener la distancia y respetar su espacio en el agua.<br><br>En resumen, el tiburón azul es una especie fascinante que se encuentra en los océanos de todo el mundo. Su color distintivo, su capacidad de migración y su papel en los ecosistemas marinos lo convierten en un objeto de interés para los científicos y amantes de la naturaleza.";
    ventana.innerHTML = contenido;

    // Crear el botón de cierre
    var botonCerrar = document.createElement("span");
    botonCerrar.className = "cerrar";
    botonCerrar.innerHTML = "X";
    botonCerrar.onclick = function () {
        document.body.removeChild(ventana);
    };

    // Agregar el botón de cierre a la ventana emergente
    ventana.appendChild(botonCerrar);

    // Agregar la ventana emergente al cuerpo del documento
    document.body.appendChild(ventana);
}
function abrirVentanaEmergente5() {
    // Crear un div para la ventana emergente
    var ventana = document.createElement("div");
    ventana.className = "ventana-emergente";

    // Agregar contenido a la ventana emergente
    var contenido = "El tiburón ballena (Rhincodon typus) es el pez más grande que habita en nuestros océanos. Aunque su nombre puede sugerir una combinación de tiburón y ballena, el tiburón ballena es en realidad un tipo de tiburón. Su tamaño impresionante y su aspecto distintivo lo hacen reconocible y fascinante para los amantes de la vida marina.<br><br>El tiburón ballena tiene un cuerpo masivo, de color grisáceo y con una piel cubierta de manchas claras y oscuras. Su boca es extremadamente grande y puede alcanzar hasta 1,5 metros de ancho. Se alimenta principalmente de plancton y pequeños peces que filtra del agua utilizando sus branquias en forma de criba.<br><br>Estos tiburones se encuentran en aguas tropicales y subtropicales de todo el mundo. Son conocidos por sus migraciones a larga distancia y pueden viajar cientos o incluso miles de kilómetros. Durante ciertas épocas del año, se congregan en áreas específicas para alimentarse o reproducirse.<br><br>A pesar de su tamaño y apariencia imponente, el tiburón ballena es considerado inofensivo para los humanos. Son criaturas gentiles y generalmente no representan una amenaza para los buceadores o nadadores. De hecho, muchas personas tienen la oportunidad de nadar junto a estos majestuosos animales en experiencias de buceo y snorkel.<br><br>El tiburón ballena se enfrenta a desafíos de conservación debido a la pesca incidental, la contaminación y la degradación de su hábitat. Para proteger esta especie única, se han implementado regulaciones y esfuerzos internacionales de conservación.<br><br>En resumen, el tiburón ballena es una criatura asombrosa que destaca por su tamaño y belleza. Su papel en los ecosistemas marinos y su interacción pacífica con los humanos lo convierten en un símbolo de conservación y aprecio por la vida marina.";
    ventana.innerHTML = contenido;

    // Crear el botón de cierre
    var botonCerrar = document.createElement("span");
    botonCerrar.className = "cerrar";
    botonCerrar.innerHTML = "X";
    botonCerrar.onclick = function () {
        document.body.removeChild(ventana);
    };

    // Agregar el botón de cierre a la ventana emergente
    ventana.appendChild(botonCerrar);

    // Agregar la ventana emergente al cuerpo del documento
    document.body.appendChild(ventana);
}
function abrirVentanaEmergente6() {
    // Crear un div para la ventana emergente
    var ventana = document.createElement("div");
    ventana.className = "ventana-emergente";

    // Agregar contenido a la ventana emergente
    var contenido = "El tiburón bambú (Chiloscyllium spp.) es una especie de tiburón de pequeño a mediano tamaño que se encuentra en las aguas costeras de Asia y Australia. Su nombre se debe a su apariencia similar a la de un bambú debido a las bandas verticales que recorren su cuerpo.<br><br>Los tiburones bambú son conocidos por su comportamiento tranquilo y su preferencia por los fondos marinos, como los arrecifes de coral y los lechos de algas marinas. Son tiburones de hábitos nocturnos y se alimentan principalmente de pequeños peces, crustáceos y moluscos.<br><br>Estos tiburones tienen una estructura corporal única que les permite respirar mientras están en reposo en el fondo marino. Tienen aberturas respiratorias adicionales llamadas espiráculos, que se encuentran detrás de los ojos y les permiten tomar oxígeno incluso cuando están cubiertos de arena o sedimentos.<br><br>El tiburón bambú es apreciado en la acuicultura y en la industria de las mascotas debido a su tamaño relativamente pequeño, su comportamiento tranquilo y su adaptabilidad a los acuarios. Sin embargo, también enfrentan amenazas debido a la destrucción de su hábitat y la captura para el comercio de aletas de tiburón.<br><br>En conclusión, el tiburón bambú es una especie fascinante que habita en las aguas costeras de Asia y Australia. Su apariencia distintiva y su comportamiento único lo convierten en un objeto de interés para los entusiastas de la vida marina.";
    ventana.innerHTML = contenido;

    // Crear el botón de cierre
    var botonCerrar = document.createElement("span");
    botonCerrar.className = "cerrar";
    botonCerrar.innerHTML = "X";
    botonCerrar.onclick = function () {
        document.body.removeChild(ventana);
    };

    // Agregar el botón de cierre a la ventana emergente
    ventana.appendChild(botonCerrar);

    // Agregar la ventana emergente al cuerpo del documento
    document.body.appendChild(ventana);
}
function abrirVentanaEmergente7() {
    // Crear un div para la ventana emergente
    var ventana = document.createElement("div");
    ventana.className = "ventana-emergente";

    // Agregar contenido a la ventana emergente
    var contenido = "El tiburón blanco (Carcharodon carcharias), también conocido como gran tiburón blanco o simplemente blanco, es una de las especies de tiburones más reconocidas y temidas. Este impresionante depredador marino se encuentra en diversos océanos alrededor del mundo.<br><br>El tiburón blanco es conocido por su tamaño impresionante y su aspecto imponente. Puede alcanzar longitudes de hasta 6 metros y pesar más de 2 toneladas. Su cuerpo está diseñado para la velocidad y la caza, con una forma hidrodinámica, una mandíbula llena de dientes afilados y una cola poderosa.<br><br>Contrario a su reputación como un depredador feroz y peligroso para los humanos, los ataques de tiburón blanco son extremadamente raros. De hecho, la mayoría de los encuentros con humanos son incidentales y no resultan en agresión. Estos tiburones prefieren alimentarse de presas marinas como focas, leones marinos y peces grandes.<br><br>El tiburón blanco ha sido objeto de gran interés y estudio debido a su importancia en los ecosistemas marinos y su papel como depredador tope. Sin embargo, también enfrenta desafíos de conservación debido a la pesca excesiva y la degradación de su hábitat.<br><br>En resumen, el tiburón blanco es un magnífico depredador marino que despierta fascinación y temor en igual medida. Su presencia en los océanos es un recordatorio de la diversidad y la belleza de la vida marina, así como de la importancia de su conservación.";
    ventana.innerHTML = contenido;

    // Crear el botón de cierre
    var botonCerrar = document.createElement("span");
    botonCerrar.className = "cerrar";
    botonCerrar.innerHTML = "X";
    botonCerrar.onclick = function () {
        document.body.removeChild(ventana);
    };

    // Agregar el botón de cierre a la ventana emergente
    ventana.appendChild(botonCerrar);

    // Agregar la ventana emergente al cuerpo del documento
    document.body.appendChild(ventana);
}
function abrirVentanaEmergente8() {
    // Crear un div para la ventana emergente
    var ventana = document.createElement("div");
    ventana.className = "ventana-emergente";

    // Agregar contenido a la ventana emergente
    var contenido = "El tiburón cebra (Stegostoma fasciatum) es una especie de tiburón que se encuentra en aguas tropicales y subtropicales del océano Índico y el Pacífico occidental. Su nombre se debe a los patrones de rayas verticales en su cuerpo que se asemejan a las rayas de una cebra.<br><br>Este tiburón tiene un cuerpo robusto y un hocico corto y redondeado. Puede alcanzar una longitud de hasta 3 metros y se alimenta principalmente de invertebrados marinos como cangrejos, langostas, pulpos y erizos de mar.<br><br>A diferencia de otros tiburones, el tiburón cebra es generalmente pacífico y no representa una amenaza para los seres humanos. Es una especie popular entre los buceadores debido a su apariencia única y su comportamiento tranquilo. Sin embargo, el tiburón cebra también enfrenta riesgos debido a la pesca excesiva y la degradación de su hábitat.<br><br>En conclusión, el tiburón cebra es una especie fascinante que se distingue por sus rayas verticales distintivas. Su presencia en los océanos es un testimonio de la diversidad y la belleza de la vida marina, y es importante tomar medidas para su conservación.";
    ventana.innerHTML = contenido;

    // Crear el botón de cierre
    var botonCerrar = document.createElement("span");
    botonCerrar.className = "cerrar";
    botonCerrar.innerHTML = "X";
    botonCerrar.onclick = function () {
        document.body.removeChild(ventana);
    };

    // Agregar el botón de cierre a la ventana emergente
    ventana.appendChild(botonCerrar);

    // Agregar la ventana emergente al cuerpo del documento
    document.body.appendChild(ventana);
}
function abrirVentanaEmergente9() {
    // Crear un div para la ventana emergente
    var ventana = document.createElement("div");
    ventana.className = "ventana-emergente";

    // Agregar contenido a la ventana emergente
    var contenido = "El tiburón cobrizo (Carcharhinus brachyurus), también conocido como tiburón bronce, es una especie de tiburón que se encuentra en aguas tropicales y subtropicales alrededor del mundo. Su nombre se debe al color cobrizo o bronceado de su piel.<br><br>Este tiburón tiene un cuerpo esbelto y alargado, con una longitud promedio de 2.5 a 3.5 metros. Es un nadador rápido y ágil, y se alimenta principalmente de peces, cefalópodos y crustáceos. El tiburón cobrizo es conocido por su comportamiento curioso y su disposición a acercarse a los buceadores.<br><br>A pesar de su reputación como depredador, los ataques de tiburón cobrizo a los seres humanos son extremadamente raros. Estos tiburones suelen ser tímidos y prefieren evitar el contacto con los humanos. Sin embargo, es importante tener precaución al nadar en áreas donde se sabe que habitan tiburones.<br><br>El tiburón cobrizo juega un papel importante en los ecosistemas marinos como depredador tope. Sin embargo, como muchas otras especies de tiburones, enfrenta amenazas debido a la pesca excesiva y la degradación de su hábitat.<br><br>En resumen, el tiburón cobrizo es un magnífico habitante de los océanos con su color cobrizo distintivo y su comportamiento cauteloso. Su presencia en los mares es un recordatorio de la diversidad y la importancia de la conservación marina.";
    ventana.innerHTML = contenido;

    // Crear el botón de cierre
    var botonCerrar = document.createElement("span");
    botonCerrar.className = "cerrar";
    botonCerrar.innerHTML = "X";
    botonCerrar.onclick = function () {
        document.body.removeChild(ventana);
    };

    // Agregar el botón de cierre a la ventana emergente
    ventana.appendChild(botonCerrar);

    // Agregar la ventana emergente al cuerpo del documento
    document.body.appendChild(ventana);
}
function abrirVentanaEmergente10() {
    // Crear un div para la ventana emergente
    var ventana = document.createElement("div");
    ventana.className = "ventana-emergente";

    // Agregar contenido a la ventana emergente
    var contenido = "El tiburón cornudo (Heterodontus francisci) es una especie de tiburón que se encuentra en las aguas costeras del océano Pacífico oriental. Recibe su nombre debido a las protuberancias en forma de cuernos que tiene sobre sus aletas.<br><br>Este tiburón tiene un cuerpo robusto y puede alcanzar una longitud de hasta 1.5 metros. A diferencia de otros tiburones, el tiburón cornudo tiene dientes frontales puntiagudos que utiliza para morder y moler su alimento, que incluye crustáceos, moluscos y pequeños peces.<br><br>El tiburón cornudo es un tiburón relativamente inofensivo para los humanos debido a su tamaño y dieta. Sin embargo, puede mostrar comportamientos defensivos si se siente amenazado.<br><br>El tiburón cornudo también es conocido por su habilidad para inflar su cuerpo y bloquear el paso a posibles depredadores al alojar aire en su estómago. Este comportamiento le ayuda a protegerse en caso de ser atacado.<br><br>En resumen, el tiburón cornudo es una especie fascinante con su apariencia distintiva y su comportamiento defensivo. Su presencia en los océanos es un recordatorio de la diversidad y la adaptación de las criaturas marinas.";
    ventana.innerHTML = contenido;

    // Crear el botón de cierre
    var botonCerrar = document.createElement("span");
    botonCerrar.className = "cerrar";
    botonCerrar.innerHTML = "X";
    botonCerrar.onclick = function () {
        document.body.removeChild(ventana);
    };

    // Agregar el botón de cierre a la ventana emergente
    ventana.appendChild(botonCerrar);

    // Agregar la ventana emergente al cuerpo del documento
    document.body.appendChild(ventana);
}
