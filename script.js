function reloj(){
    let today = new Date;
    let diadelasemana = today.toLocaleString(
        'default', {weekday: 'long'}
    );

    var viernes;
    let frase;

    switch (diadelasemana) {
        case "lunes":
            viernes = new Date((today.getMonth()+1) + "/" + (today.getDate()+4) + "/" + today.getFullYear());
            document.querySelector("img").setAttribute("src", "https://i.pinimg.com/564x/8c/7a/ba/8c7aba94cc776e32f9135588a3b7b8d7.jpg");
            frase = "Que Dios nos acompañe.";
            break;
        case "martes":
            viernes = new Date((today.getMonth()+1) + "/" + (today.getDate()+3) + "/" + today.getFullYear());
            document.querySelector("img").setAttribute("src", "https://i.pinimg.com/564x/5f/6e/87/5f6e873247c8385a76373b85389a1739.jpg");
            frase = "Un día más un día menos.";
            break;
        case "miércoles":
            viernes = new Date((today.getMonth()+1) + "/" + (today.getDate()+2) + "/" + today.getFullYear());
            document.querySelector("img").setAttribute("src", "https://i.pinimg.com/564x/9d/a1/25/9da1255cf1e6b1f8d96f0f38ad991ed3.jpg");
            frase = "Compañero/as no sé si llegaré.";
            break;
        case "jueves":
            viernes = new Date((today.getMonth()+1) + "/" + (today.getDate()+1) + "/" + today.getFullYear());
            document.querySelector("img").setAttribute("src", "https://i.pinimg.com/564x/0f/ed/9c/0fed9c0b80036ba1ede7d5101bd270e0.jpg");
            frase = "Un día más, ánimo compañero/as.";
            break;
        case "viernes":
            viernes = new Date((today.getMonth()+1) + "/" + (today.getDate()+7) + "/" + today.getFullYear());
            document.querySelector("img").setAttribute("src", "https://i.pinimg.com/564x/08/64/0b/08640b34412b64c5be6d0296bc6192cd.jpg");
            frase = "IT´S FRIDAY THEN!";
            break;
        case "sábado":
            viernes = new Date((today.getMonth()+1) + "/" + (today.getDate()+6) + "/" + today.getFullYear());
            document.querySelector("img").setAttribute("src", "https://i.pinimg.com/564x/a9/83/a1/a983a1f6659a32ac8dd3bd9b5d28cb83.jpg");
            frase = "Queda mucho para el siguiente viernes pero ... ES SÁBADO!";
            break;
        case "domingo":
            viernes = new Date((today.getMonth()+1) + "/" + (today.getDate()+5) + "/" + today.getFullYear());
            document.querySelector("img").setAttribute("src", "https://i.pinimg.com/564x/b0/33/6d/b0336de8b6ca431d44e0ad5ed76b1dd8.jpg");
            frase = "Cómo se ha pasado tan rápido el fin de semana.";
            break;
    }

    let diff = (viernes - today);
    let diffDays = Math.floor(diff / 86400000);
    let diffHrs = Math.floor((diff % 86400000) / 3600000);
    let diffMins = Math.round(((diff % 86400000) % 3600000) / 60000);
    let diffSecs = Math.round((((diff % 86400000) % 3600000) % 60000) / 1000);
    let palabra;

    if (diffDays == 0 || diffDays == 1) {
        palabra = "Queda ";
    } else {
        palabra = "Quedan ";
    }

    document.querySelector(".reloj").innerHTML = (palabra + diffDays + " días, " + diffHrs + " horas, " + diffMins + " minutos y " + diffSecs +" segundos para el viernes.");
    document.querySelector(".p").innerHTML = (frase);
    setTimeout(reloj, 1000);
}

function calculo(){

    
}
