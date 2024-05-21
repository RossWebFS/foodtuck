import { jwtDecode } from "jwt-decode";
import { AuthService } from "src/services/Auth";
import { usersService } from "src/services/Users";
import { TUser } from "src/types";
import { create } from "zustand";

interface TUseUserStore {
  user: TUser | {};
  isAuth: boolean;
  setAuth: (bool: boolean) => void;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string, userName: string) => void;
}

// interface TUser {
//   email: string;
//   password: string;
// }

interface TPayload {
  id: string;
  iat: number;
  exp: number;
}

export const useUserStore = create<TUseUserStore>((set) => ({
  user: {},
  isAuth: false,
  setAuth: (bool: boolean) => {
    set({
      isAuth: bool,
    });
  },
  signIn: async (email, password) => {
    try {
      const response = await AuthService.signIn(email, password);
      localStorage.setItem("token", response.data.token);
      const payload: TPayload = jwtDecode(response.data.token);
      const user: TUser = await usersService.getUserById(payload.id);
      console.log(user)
      set({
        isAuth: true,
        user: user,
      });
    } catch (err) {
      set({
        isAuth: false,
      });
    }
  },
  signUp: async (userName, email, password) => {
    try {
      const response = await AuthService.signUp(userName, email, password);
      localStorage.setItem("token", response.data.token);
      const payload: TPayload = jwtDecode(response.data.token);
      const user: TUser = await usersService.getUserById(payload.id);
      console.log(user)
      set({
        isAuth: true,
        user: user,
      });
    } catch (err) {
      set({
        isAuth: false,
      });
    }
  },
}));
