function nomDuMois(date) {
    switch (date.getMonth()) {
        case 0:
            return ("janvier")
            break
        case 1:
            return ("février")
            break
        case 2:
            return ("mars")
            break
        case 3:
            return ("avril")
            break
        case 4:
            return ("mai")
            break
        case 5:
            return ("juin")
            break
        case 6:
            return ("juillet")
            break
        case 7:
            return ("août")
            break
        case 8:
            return ("septembre")
            break
        case 9:
            return ("octobre")
            break
        case 10:
            return ("novembre")
            break
        case 11:
            return ("décembre")
            break
    } // Fin du switch
} // Fin de la fonction NomDuMois

function nomDuJour(date) {
    switch (date.getDay()) {
        case 1:
            return "lundi"
            break
        case 2:
            return "mardi"
            break
        case 3:
            return "mercredi"
            break
        case 4:
            return "jeudi"
            break
        case 5:
            return "vendredi"
            break
        case 6:
            return "samedi"
            break
        case 7:
            return "dimanche"
            break
    } // Fin du switch
} // Fin de la fonction NomDuJour

function horloge(el) {
    if (typeof el == "string") {
        el = document.getElementById(el);
    }
    function actualiser() {
        var date = new Date();
        var str = (date.getHours() < 10 ? '0' : '') + date.getHours();
        str += ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        el.innerHTML = str;
    }
    actualiser();
    setInterval(actualiser, 1000);
}