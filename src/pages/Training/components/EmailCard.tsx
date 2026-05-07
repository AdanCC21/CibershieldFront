import { Icons } from "@/constants/icons";

interface Prompts {
    id: number
    ex: any
}

export default function EmailCard({ id, ex }: Prompts) {
    console.log(id);
    return (
        <div className="flex flex-col flex-1 bg-[#fefefe] shadow-lg border border-[#0002] rounded-lg">
            <div className="w-full h-10 bg-(--primary-color) rounded-t-lg"></div>
            <section className="flex flex-col px-4 py-2 gap-2 ">

                <section className="flex gap-4 items-center">
                    <img src={Icons.person} className="h-12" alt="Person" />
                    <div className="flex flex-col w-full">
                <h3 className="text-xl font-medium">Tiulo del correo</h3>
                        <div className="flex w-full justify-between">
                            <div className="flex gap-2">
                                <span className="text-base">Nombre de la persona</span>
                                <span className="text-base">correo@gmail.com</span>
                            </div>
                            <div className="flex gap-2 text-xs text-(--text-gray)">
                                <span>Jueve 23 de marzo de 2026</span>
                                <span>9:00am</span>
                            </div>
                        </div>
                        <span className="text-xs text-(--text-gray)">para : mi</span>
                    </div>
                </section>
            </section>

            <div className="h-px my-2 mx-20 bg-black/40"></div>

            <section className="flex flex-col p-4">
                <p className="text-sm whitespace-pre-line ">{`Espero que estés bien. Te escribo para confirmar la reunión de seguimiento del proyecto este jueves 8 de mayo a las 3:00 p.m. por videollamada.Durante la reunión revisaremos:\n-Avances de esta semana\n-Cambios pendientes en el diseño\n-Fechas de entrega actualizadas\nPor favor avísame si necesitas agregar algún otro punto a la agenda.\nQuedo atento.`}</p>
            </section>
        </div>
    )
}
