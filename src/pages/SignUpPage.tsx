import axios from "axios";
import { useState } from "react";
import { routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { SignUpForm } from "src/containers/features/SignUpForm";
import { AuthService } from "src/services/Auth";
import { useUserStore } from "src/store/UserStore";

export const SignUpPage = () => {
  const links = [routes.HOME, routes.SIGN_UP];

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [signIn, signUp] = useUserStore((state) => [
    state.signIn,
    state.signUp,
  ]);

  const getUser = async () => {
    axios("https://foodtuck-api-3023b9355fd1.herokuapp.com/users", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then(res => console.log(res));
  };

  return (
    <main className="py-20">
      <PageIntro title="Sign up page" links={links} />
      <SignUpForm />

      {/* <form>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-300 mx-2"
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-300 mx-2"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-300 mx-2"
        />
        <button
          className="bg-gray-300 mx-2"
          onClick={(e) => {
            e.preventDefault();
            console.log(email);
            console.log(password);
            signIn(email, password);
          }}
        >
          Log In
        </button>
        <button className="bg-gray-300 mx-2" onClick={(e) => {
          e.preventDefault()
          getUser()
        }}>
          Log Out
        </button>
        <button
          className="bg-gray-300 mx-2"
          onClick={(e) => {
            e.preventDefault();
            console.log(name);
            console.log(email);
            console.log(password);
            signUp(name, email, password);
          }}
        >
          Sign Up
        </button>
      </form> */}
    </main>
  );
};
