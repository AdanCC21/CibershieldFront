export type HeadColor = 'red' | 'primary';
export type ModalType = 'finish' | 'error' | 'default';

export interface ModalPrompts {
    title?: string | null
    message: string

    color?: HeadColor | null
    modalType?: ModalType | null
    results?: { correct: number, incorrect: number }

    btnLabel?: string
}