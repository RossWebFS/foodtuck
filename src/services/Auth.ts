import { AxiosResponse } from "axios";
import api from "src/http";

interface SignInResponse {
  accessToken: string;
  refreshToken: string;
}
interface SignUpResponse {
  accessToken: string;
  refreshToken: string;
}

interface SignInForm {
  email: string;
  password: string;
}

interface SignUpForm extends SignInForm {
  userName: string;
}

export const AuthService = {
  signIn: async (
    email: string,
    password: string
  ): Promise<AxiosResponse> => {
    return api.post("/users/sign-in", {
      email,
      password,
    });
  },
  signUp: async (
    name: string,
    email: string,
    password: string
  ): Promise<AxiosResponse> => {
    return api.post("/use/sign-up", {
      name,
      email,
      password,
    });
  },
};
