import { Button } from "src/components/Button";
import { Icon } from "src/components/Icon";
import { icons } from "src/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "src/components/Link";
import { cn } from "src/utils";
import { useUserStore } from "src/store/UserStore";
import { useEffect, useRef, useState } from "react";
import { Modal } from "./Modal";
import { useNavigate } from "react-router-dom";

interface SignInFields {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInFields>();

  const [isActiveSendingModal, setIsActiveSendingModal] =
    useState<boolean>(false);
  const [isAuth, signIn, user] = useUserStore((state) => [
    state.isAuth,
    state.signIn,
    state.user,
  ]);

  const rememberCB = useRef<HTMLInputElement>(null);

  const navigateToUser = useNavigate();

  useEffect(() => {
    user && loginHandler();
  }, [user, navigateToUser]);

  const onSubmit: SubmitHandler<SignInFields> = async (data) => {
    const { email, password } = data;

    try {
      remeberAuth(email, password);
      await signIn(email, password);
    } catch (error) {
      setError("root", {
        message: "This email ia slready taken",
      });
      showModal();
    }
  };

  const loginHandler = async () => {
    await showModal();
    user && navigateToUser(`/profile/${user.id}`);
  };

  const remeberAuth = (email: string, password: string) => {
    if (rememberCB.current?.checked) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
    }
  };

  const showModal = () => {
    setIsActiveSendingModal(true);

    return new Promise((resolve) =>
      setTimeout(() => {
        setIsActiveSendingModal(false);
        resolve("");
      }, 2000)
    );
  };

  return (
    <section className="px-4 py-8 shadow-2xl shadow-orange-300/40 w-96 mx-auto">
      <h2 className="text-xl font-semibold mb-6">Sign In</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.email && (
          <div className="text-red-500">{errors.email?.message}</div>
        )}
        <div className="relative my-3">
          <Icon
            IconComponent={icons.mail.icon}
            className="z-10 absolute w-6 h-6 text-gray-700 hover:text-gray-500 top-2 left-2"
          />
          <input
            {...register("email", {
              value: localStorage.getItem("userEmail") || "",
              required: "The email is required",
              validate: (value) => {
                return /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test(
                  value
                )
                  ? true
                  : "Invalid email";
              },
            })}
            className={cn(
              "pl-10 pr-5 py-2 w-full border border-gray-300 focus:outline-orange-400",
              {
                "focus:outline-red-500": errors.email,
              }
            )}
            type="email"
            placeholder="Email"
          />
        </div>
        {errors.password && (
          <div className="text-red-500">{errors.password?.message}</div>
        )}
        <div className="relative my-3">
          <Icon
            IconComponent={icons.lock.icon}
            className="z-10 absolute w-6 h-6 text-gray-700 hover:text-gray-500 top-2 left-2 font-semibold"
          />
          <input
            {...register("password", {
              value: localStorage.getItem("userPassword") || "",
              required: "The password is required",
              validate: (value) => {
                return /^[^\s\t]{8,}$/.test(value)
                  ? true
                  : "Password must be at least 8 characters long and cannot contain spaces or tabs.";
              },
            })}
            className="pl-10 pr-5 py-2 w-full border border-gray-300 focus:outline-orange-400"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="flex items-center mb-6">
          <input
            className="accent-orange-600 w-5 h-5 mr-3"
            type="checkbox"
            id="rememberIn"
            ref={rememberCB}
          />
          <label htmlFor="rememberIn">Remember me</label>
        </div>

        <Button className="w-full" size="lg">
          Sign In
        </Button>
        <p className="text-center mt-5">
          Don't have an account?{" "}
          <Link className="hover:text-gray-500" to="/sign-up">
            Sign up
          </Link>
        </p>
      </form>

      <Modal
        succesfulMes="Sign in Succesfully"
        errorMes="Something went wrong. Try again"
        isActive={isActiveSendingModal}
        isSuccesful={isAuth}
      />
    </section>
  );
};
