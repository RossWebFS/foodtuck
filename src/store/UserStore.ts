import { jwtDecode } from "jwt-decode";
import { AuthService } from "src/services/Auth";
import { usersService } from "src/services/Users";
import { TUser } from "src/types";
import { create } from "zustand";

// type UserWithoutId = Omit<TUser, '_id'>;

interface TUseUserStore {
  user: TUser | null;
  isAuth: boolean;
  setAuth: (bool: boolean) => void;
  signIn: (emailData: string, passwordData: string) => void;
  signUp: (emailData: string, passwordData: string, userData: string) => void;
  signOut: () => void;
  update: (id: string, userdata: TUser) => void;
}

interface TPayload {
  id: string;
  iat: number;
  exp: number;
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
      const user: TUser = await usersService.getUserById(payload.id);
      const { name, email, password } = user;
      set({
        isAuth: true,
        user: {
          name,
          email,
          password,
          id: payload.id,
          avatar: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
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
    set({
      user: await usersService.updateUser(id, userData),
    });
  },
}));
