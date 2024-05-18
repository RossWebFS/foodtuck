import { AuthService } from "src/services/Auth";
import { create } from "zustand";

interface TUseUserStore {
  user: TUser | {};
  isAuth: boolean;
  setAuth: (bool: boolean) => void;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string, userName: string) => void;
}

interface TUser {
  email: string;
  password: string;
}

export const useUserStore = create<TUseUserStore>((set, get) => ({
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
      console.log(response)
      // const {setAuth} = get()
      // setAuth(true)
      // set({
      //   user: ,
      // });
      set({
        isAuth: true
      })
    } catch (err) {
      set({
        isAuth: false
      })
      console.log(err);
    }
  },
  signUp: async (userName, email, password) => {
    try {
      const response = await AuthService.signUp(userName, email, password);
      localStorage.setItem("token", response.data.token);
      console.log(response)
      set({
        isAuth: true
      })
      // set({
      //   user: response.data.signUpDto,
      // });
    } catch (err) {
      set({
        isAuth: false
      })
      console.log("Err");
    }
  },
}));
