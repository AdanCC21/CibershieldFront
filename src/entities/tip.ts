import type { CategoryType } from "./form.entity"

export interface TipEntity {
    id: number
    title: string
    desc: string
    tipType: CategoryType
}