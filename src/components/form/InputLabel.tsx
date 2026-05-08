interface Prompts {
    label: string

    value: any
    atribute: string
    handleForm: (e: any) => void
    placeHolder?: string

    inpType?: React.HTMLInputTypeAttribute
}

export default function InputLabel({ label, value, atribute, handleForm, inpType, placeHolder }: Prompts) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={atribute} className="text-base">{label}</label>
            <input id={atribute} name={atribute} value={value} onChange={handleForm} type={inpType ?? 'text'} className="p-2 border border-(--primary-color)/20 focus:border-(--primary-color)/80 outline-none rounded-lg" placeholder={placeHolder} />
        </div>
    )
}
