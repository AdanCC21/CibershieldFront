import type { UserEntity } from "@/entities/user"

export interface EmailExercises {
    id: number
    title: string
    owner: UserEntity
    date: Date | string
    hour: string
    content: string
    whyIsAnError?: string
    isReal: boolean
}