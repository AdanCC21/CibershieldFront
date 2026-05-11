import { type EmailExercises } from "@/constants/example";


export function getExamples(max: number, list:EmailExercises[]) {
    const examples = new Set<EmailExercises>()

    do {
        const indx = Math.floor(Math.random() * max);
        if (!examples.has(list[indx]))
            examples.add(list[indx]);
    } while (examples.size < max)

    return examples
}