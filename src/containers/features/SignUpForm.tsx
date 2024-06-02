import { Button } from "src/components/Button";
import { Icon } from "src/components/Icon";
import { icons } from "src/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from "src/utils";
import { Modal } from "src/containers/features/Modal";
import { useEffect, useRef, useState } from "react";
import { useUserStore } from "src/store/UserStore";
import { Link } from "src/components/Link";
import { useNavigate } from "react-router-dom";

interface SignUpFields {
  name: string;
  email: string;
  password: string;
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpFields>();
  const [isActiveSendingModal, setIsActiveSendingModal] =
    useState<boolean>(false);
  const [isAuth, signUp, user] = useUserStore((state) => [
    state.isAuth,
    state.signUp,
    state.user
  ]);

  const rememberCB = useRef<HTMLInputElement>(null);

  const navigateToUser = useNavigate()

  useEffect(() => {
    user && signUpHandler()
  }, [user, navigateToUser]);

  const remeberAuth = (email: string, password: string) => {
    if (rememberCB.current?.checked) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
    }
  };

  const onSubmit: SubmitHandler<SignUpFields> = async (data) => {
    const { name, email, password } = data;
    try {
      remeberAuth(email, password)
      await signUp(name, email, password);
    } catch (err) {
      setError("root", {
        message: "This email ia slready taken",
      });
      showModal();
    }
  };

  const signUpHandler = async () => {
    await showModal();
    user && navigateToUser(`/profile/${user.id}`)
  }

  const showModal = () => {
    setIsActiveSendingModal(true);

    return new Promise((resolve) =>
      setTimeout(() => {
        setIsActiveSendingModal(false);
        resolve("");
      }, 2000)
    ).then(() => user && navigateToUser(`/profile/${user.id}`));
  };

  return (
    <section className="px-4 py-8 shadow-2xl shadow-orange-300/40 w-96 mx-auto">
      <h2 className="text-xl font-semibold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.name && (
          <div className="text-red-500">{errors.name?.message}</div>
        )}

        <div className="relative my-3">
          <Icon
            IconComponent={icons.outlinedUser.icon}
            className="z-10 absolute w-6 h-6 text-gray-700 hover:text-gray-500 top-2 left-2"
          />
          <input
            className={cn(
              "pl-10 pr-5 py-2 w-full border border-gray-300 focus:outline-orange-400",
              {
                "focus:outline-red-500": errors.name,
              }
            )}
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "The name is required",
            })}
          />
        </div>
        {errors.email && (
          <div className="text-red-500">{errors.email?.message}</div>
        )}

        <div className="relative my-3">
          <Icon
            IconComponent={icons.mail.icon}
            className="z-10 absolute w-6 h-6 text-gray-700 hover:text-gray-500 top-2 left-2"
          />
          <input
            className={cn(
              "pl-10 pr-5 py-2 w-full border border-gray-300 focus:outline-orange-400",
              {
                "focus:outline-red-500": errors.email,
              }
            )}
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "The email is required",
              validate: (value) => {
                return /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test(
                  value
                )
                  ? true
                  : "Invalid email";
              },
            })}
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
            className={cn(
              "pl-10 pr-5 py-2 w-full border border-gray-300 focus:outline-orange-400",
              {
                "focus:outline-red-500": errors.password,
              }
            )}
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "The password is required",
              validate: (value) => {
                return /^[^\s\t]{8,}$/.test(value)
                  ? true
                  : "Password must be at least 8 characters long and cannot contain spaces or tabs.";
              },
            })}
          />
        </div>

        <div className="flex items-center mb-6">
          <input
            className="accent-orange-600 w-5 h-5 mr-3"
            type="checkbox"
            id="rememberUp"
            ref={rememberCB}
          />
          <label htmlFor="rememberUp">Remember me</label>
        </div>

        <Button className="w-full" size="lg">
          Sign Up
        </Button>
        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link className="hover:text-gray-500" to="/sign-in">
            Sign in
          </Link>
        </p>
      </form>

      <Modal
        succesfulMes="Sign up Succesfully"
        errorMes="Something went wrong. Try again"
        isActive={isActiveSendingModal}
        isSuccesful={isAuth}
      />
    </section>
  );
};
