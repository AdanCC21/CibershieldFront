import { smsExamples, smsExamplesEasy, smsExamplesHard } from "@/constants/sms";
import type { EmailExercises } from "@/entities/email";
import type { CategoryType, DificultyType } from "@/entities/form.entity";
import exercises from "@/constants/excercise.json";

interface JSONData {
    dificil: EmailExercises[]
    medio: EmailExercises[]
    facil: EmailExercises[]
}

export function getExamples(dificulty: DificultyType, category: CategoryType) {
    let max: number = 0;
    let list: EmailExercises[] = []
    const data = exercises as JSONData;
    
    switch (dificulty) {
        case 'facil':
            max = 3
            category === 'email' ?
                list = data.facil : list = smsExamplesEasy;
            break;
        case 'medio':
            max = 5;
            category === 'email' ?
                list = data.medio : list = smsExamples;
            break;
        case 'dificil':
            max = 7;
            category === 'email' ?
                list = data.dificil : list = smsExamplesHard;
            break;
        default:
            max = 5;
            category === 'email' ?
                list = data.medio : list = smsExamples;
    }

    const examples = new Set<EmailExercises>()

    do {
        const indx = Math.floor(Math.random() * list.length);
        if (!examples.has(list[indx]))
            examples.add(list[indx]);
    } while (examples.size < max)

    return examples
}