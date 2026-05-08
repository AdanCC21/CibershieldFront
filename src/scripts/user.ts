import type { UserEntity } from "@/entities/user";

export async function GetUser(): Promise<UserEntity | null> {
    const us = await JSON.parse(sessionStorage.getItem('user') || '');
    if (!us) return null
    return us as UserEntity
}