import type { EmailExercises } from "@/entities/email"

interface Prompts {
    ex: EmailExercises
}

export default function PhoneCard({ ex }: Prompts) {
    return (
        <div className="flex items-center justify-center p-6 h-full flex-1">
            <div className="relative w-fit max-h-[80vh] aspect-9/16 rounded-[2.5rem] border-10 border-black bg-white shadow-2xl overflow-hidden">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20" />

                <div className="flex items-center gap-3 px-4 pt-12 pb-3 border-b border-neutral-200 bg-white">
                    <div className="w-11 h-11 rounded-full bg-neutral-300 flex items-center justify-center text-neutral-600 font-semibold">
                        ?
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold text-sm text-neutral-900">
                            {ex.owner.email}
                        </span>
                        <span className="text-xs text-neutral-500">
                            online
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-3 p-4 bg-[#ece5dd] h-full">

                    <div className="max-w-[85%] bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                        <p className="text-sm text-neutral-800">
                            {ex.content}
                        </p>

                        <div className="flex justify-end mt-1">
                            <span className="text-[10px] text-neutral-400">
                                {ex.hour}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-3 bg-white border-t border-neutral-200">
                    <div className="flex items-center bg-neutral-100 rounded-full px-4 py-2">
                        <span className="text-sm text-neutral-400">
                            ...
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
