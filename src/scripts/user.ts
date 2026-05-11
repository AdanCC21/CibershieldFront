import type { UserEntity } from "@/entities/user";
export function GetUser(): UserEntity | null {
    const raw = sessionStorage.getItem('user');
    if (!raw) return null;

    try {
        return JSON.parse(raw) as UserEntity;
    } catch {
        return null;
    }
}