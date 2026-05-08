export type AuthAction = 'login' | 'register';

export interface AuthForm {
    typeAuth: AuthAction
    email: string
    password: string
    confirmPassword?: string

    name?: string
    confirmEmail?: string
}