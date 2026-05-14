import { emailExamplesEasy, emailExamplesHard, emailExamplesMedium } from "@/constants/email";
import { smsExamples, smsExamplesEasy, smsExamplesHard } from "@/constants/sms";
import type { EmailExercises } from "@/entities/email";
import type { CategoryType, DificultyType } from "@/entities/form.entity";


export function getExamples(dificulty: DificultyType, category: CategoryType) {
    let max: number = 0;
    let list: EmailExercises[] = []
    switch (dificulty) {
        case 'facil':
            max = 3
            category === 'email' ?
                list = emailExamplesEasy : list = smsExamplesEasy;
            break;
        case 'medio':
            max = 5;
            category === 'email' ?
                list = emailExamplesMedium : list = smsExamples;
            break;
        case 'dificil':
            max = 8;
            category === 'email' ?
                list = emailExamplesHard : list = smsExamplesHard;
            break;
        default:
            max = 5;
            category === 'email' ?
                list = emailExamplesMedium : list = smsExamples;
    }

    const examples = new Set<EmailExercises>()

    do {
        const indx = Math.floor(Math.random() * list.length);
        if (!examples.has(list[indx]))
            examples.add(list[indx]);
    } while (examples.size < max)

    return examples
}