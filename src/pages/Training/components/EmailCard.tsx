import type { EmailExercises } from "@/constants/example";
import { Icons } from "@/constants/icons";
import { showDate } from "@/scripts/date";

interface Prompts {
    id: number
    ex: EmailExercises
}

export default function EmailCard({ ex }: Prompts) {
    return (
        <div className="flex flex-col flex-1 bg-[#fefefe] shadow-lg border border-[#0002] rounded-lg">
            <div className="w-full h-10 bg-(--primary-color) rounded-t-lg"></div>
            <section className="flex flex-col px-8 py-4 gap-2 ">
                <section className="flex gap-4 items-center">
                    <img src={Icons.person} className="h-12" alt="Person" />
                    <div className="flex flex-col w-full">
                        <h3 className="text-xl font-medium">{ex.title}</h3>
                        <div className="flex w-full justify-between">
                            <div className="flex gap-2">
                                <span className="text-base">{ex.owner.name}</span>
                                <span className="text-base">{ex.owner.email}</span>
                            </div>
                            <div className="flex gap-4 text-sm text-(--text-gray)">
                                <span >{typeof ex.date === 'string' ? ex.date : showDate(ex.date)}</span>
                                <span >{ex.hour}</span>
                            </div>
                        </div>
                        <span className="text-xs text-(--text-gray)">para : mi</span>
                    </div>
                </section>
            </section>

            <div className="h-px my-2 mx-20 bg-black/40"></div>

            <section className="flex flex-col px-8 py-4">
                <p className="text-sm whitespace-pre-line ">{ex.content}</p>
            </section>
        </div>
    )
}
