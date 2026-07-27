import { Icons } from "@/constants/icons";
import type { EmailExercises } from "@/entities/email";
import { showDate } from "@/scripts/date";

interface Prompts {
    ex: EmailExercises
}

export default function EmailCard({ ex }: Prompts) {
    return (
        <div className="flex flex-col flex-1 bg-[#fefefe] shadow-lg border border-[#0002] rounded-lg">
            <div className="w-full h-10 bg-(--primary-color) rounded-t-lg"></div>

            <section className="flex flex-col md:flex-row px-2 md:px-8 py-4 gap-4 items-center ">
                <img src={Icons.person} className="h-12" alt="Person" />
                <div className="flex flex-col w-full md:text-start text-center">
                    <h3 className="text-xl font-medium mb-4 md:mb-0">{ex.title}</h3>
                    
                    <div className="flex flex-wrap w-full justify-center md:justify-between">
                        <div className="flex flex-col md:flex-row md:gap-2 w-full text-wrap">
                            <span className="text-base">{ex.owner.name}</span>
                            <span className="text-sm md:text-black text-(--text-gray)">{ex.owner.email}</span>
                        </div>
                        <div className="flex gap-4 text-sm text-(--text-gray)">
                            <span >{typeof ex.date === 'string' ? ex.date : showDate(ex.date)}</span>
                            <span >{ex.hour}</span>
                        </div>
                    </div>
                    <span className="text-xs text-(--text-gray)">para : mi</span>
                </div>
            </section>

            <div className="h-px my-2 mx-20 bg-black/40"></div>

            <section className="flex flex-col px-8 py-4 mx-auto mb-2 w-[95%] md:mx-0 md:w-full overflow-auto rounded-md">
                <div dangerouslySetInnerHTML={{ __html: ex.content }}></div>
            </section>
        </div>
    )
}
