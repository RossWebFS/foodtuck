import { AxiosResponse } from "axios";
import api from "src/http";

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
    return api.post("/users/sign-up", {
      name,
      email,
      password,
    });
  },
};
