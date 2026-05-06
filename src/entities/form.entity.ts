export type UserType = "guest" | 'account';
export type CategoryType = "sms" | "email";
export type DificultyType = 'easy' | 'medium' | 'hard';

export interface TrainingForm {
  userType: UserType | null
  name: string
  email: string
  category: CategoryType | null
  dificulty:DificultyType | null
}