function askNames() {
    let userName = prompt("Salut, comment t'appelles-tu?")
    let welcome = (`👋 Welcome ${userName} 👋`)
    document.getElementById("bienvenu").innerHTML = welcome
}

askNames()

function askAges() {
    let userAge = prompt("En quelle année es-tu né?")
    let yourAge = (`Tu as plus ou moins ${2024 - userAge} ans non?`)
    document.getElementById("age").innerHTML = yourAge
}

askAges()

function askAstro() {
    let userAstro = prompt("Quel est ton signe astro?")
    
    function emojiAstro() {
        switch (userAstro) {
            case "belier":
               return "♈"
                break;
            case "taureau":
                return "♉"
                break;
            case "gemeaux":
                return "♊"
                break;
            case "cancer":
                return "♋"
                break;
            case "lion":
                return "♌"
                break;
            case "vierge":
                return "♍"
                break;
            case "balance":
                return "♎"
                break;
            case "scorpion":
                return "♏"
                break;
            case "sagittaire":
                return "♐"
                break;
            case "capricorne":
                return "♑"
                break;
            case "verseau":
                return "♒"
                break;
            case "poisson":
                return "♓"
                break;
            default:
                return "⚠️"
    
        }
    }

    let yourAstro = (`Ah je vois que tu es ${userAstro+emojiAstro()}, intéressant !`)
    document.getElementById("astro").innerHTML = yourAstro
}

askAstro()
