export type TRegisterParams = {
  name: string;
  email: string;
  password: string;
}

export type TRegisterForm =  TRegisterParams &{
  confirmedPassword: string
}