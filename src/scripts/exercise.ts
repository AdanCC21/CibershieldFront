export function handleResultMessage(results: { correct: number, incorrect: number }) {
    if(results.incorrect === results.correct){
        return "Estás progresando, vamos poco a poco.";
    }

    if (results.incorrect === 0) {
        return "¡Felicidades! Obtuviste una puntuación perfecta. Tienes un buen ojo para detectar a los malos.";
    }

    if (results.correct > results.incorrect) {
        return "!!Muy bien!!, ya casi lo logras, sigue así.";
    }

    if (results.correct === 0) {
        return "Hmmmm... Parece que te hace falta práctica. Te recomendamos leer la sección de phishing en información para comenzar.";
    }

    if (results.incorrect > results.correct) {
        return "Vas por buen camino. Sigue practicando y conseguirás una puntuación perfecta.";
    }
}