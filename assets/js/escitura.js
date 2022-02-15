const typed = new Typed('.typed', {
    strings: ['Haz de tu vida un sueño y de tu sueño una realidad', 'Sin Locura no hay diversion', 'La simplicidad, llevada al extremo se convierte en elegancia ', 'Sigue tus sueños. Sólo asegurate de tener diversión.', 'Los mejores momentos no tienen fotos, porque se trata de disfrutar el momento'],
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
    startDelay: 1000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 60, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});