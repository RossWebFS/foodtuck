import { jwtDecode } from "jwt-decode";
import { AuthService } from "src/services/Auth";
import { usersService } from "src/services/Users";
import { TPayload, TUser } from "src/types";
import { create } from "zustand";

interface TUseUserStore {
  user: TUser | null;
  isAuth: boolean;
  setAuth: (bool: boolean) => void;
  signIn: (emailData: string, passwordData: string) => void;
  signUp: (emailData: string, passwordData: string, userData: string) => void;
  signOut: () => void;
  update: (id: string, userdata: TUser) => void;
}

export const useUserStore = create<TUseUserStore>((set) => ({
  user: null,
  isAuth: false,
  setAuth: (bool: boolean) => {
    set({
      isAuth: bool,
    });
  },
  signIn: async (emailData, passwordData) => {
    try {
      const response = await AuthService.signIn(emailData, passwordData);
      const payload: TPayload = jwtDecode(response.data.token);
      const user: TUser = await usersService.getUserById(payload.id);
      const { name, email, password, avatar } = user;
      set({
        isAuth: true,
        user: { name, email, password, avatar, id: payload.id },
      });
    } catch (err) {
      set({
        isAuth: false,
      });
    }
  },
  signUp: async (userData, emailData, passwordData) => {
    try {
      const response = await AuthService.signUp(
        userData,
        emailData,
        passwordData
      );
      localStorage.setItem("token", response.data.token);
      const payload: TPayload = jwtDecode(response.data.token);
      const data: TUser = await usersService.getUserById(payload.id);
      const { name, email, password } = data;
      const { _id, ...user } = await usersService.updateUser(payload.id, {
        id: payload.id,
        name,
        email,
        password,
        avatar: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
      });
      set({
        isAuth: true,
        user: {
          ...user,
          id: _id,
        },
      });
    } catch (err) {
      set({
        isAuth: false,
      });
    }
  },
  signOut: async () => {
    localStorage.removeItem("token");
    set({
      user: null,
      isAuth: false,
    });
  },
  update: async (id, userData) => {
    const { _id, ...data } = await usersService.updateUser(id, userData);
    set({
      user: { id: _id, ...data },
    });
  },
}));
