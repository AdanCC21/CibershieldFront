export type UserType = "guest" | 'account';

export interface TrainingForm {
  userType: UserType | null
  name: string
  email: string
}