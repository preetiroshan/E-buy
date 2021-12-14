
import { TRegisterParams } from "../../redux/reducers/users/register/types";
import { signInFilter, TSignInResponse } from "../../userTypes";

const userService = {
  signIn(credentials: signInFilter): Promise<TSignInResponse> {
    return fetch('/api/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
  },

  register(credentials: TRegisterParams): Promise<TSignInResponse> {
    return fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
  }
}
export default userService;