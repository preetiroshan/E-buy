export type signInFilter = {
  email: string;
  password: string;
}

export type TSignInResponse = {
  _id: number;
  name: string;
  email: string;
  token: string;
}