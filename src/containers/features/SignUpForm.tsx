import { Button } from "src/components/Button";
import { Icon } from "src/components/Icon";
import { icons } from "src/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from "src/utils";
import { Modal } from "src/containers/features/Modal";
import { useEffect, useState } from "react";
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

  const onSubmit: SubmitHandler<SignUpFields> = async (data) => {
    const { name, email, password } = data;
    try {
      await signUp(name, email, password);
    } catch (err) {
      setError("root", {
        message: "This email ia slready taken",
      });
    } finally {
      setIsActiveSendingModal(true);
      setTimeout(() => {
        setIsActiveSendingModal(false);
      }, 2000);
    }
  };

  const navigateToUser = useNavigate()

  useEffect(() => {
    user && navigateToUser(`/profile/${user.id}`)
  }, [navigateToUser, user])

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
            name="remember"
            id="remember"
          />
          <label htmlFor="#remember">Remember me</label>
        </div>

        <Button className="w-full" size="lg">
          Sign Up
        </Button>

        <p className="text-end text-gray-500 mt-3">Forgot password?</p>

        <div className="border-t border-t-gray-300 pt-5 relative mt-10">
          <button className="flex justify-center py-2 w-full bg-transparent border border-gray-300 my-2 relative">
            <svg
              enable-background="new 0 0 48 48"
              height="2rem"
              viewBox="0 0 48 48"
              width="2rem"
              xmlns="http://www.w3.org/2000/svg"
              className="z-10 absolute top-1 left-2"
            >
              <path
                d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                fill="#ffc107"
              />
              <path
                d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z"
                fill="#ff3d00"
              />
              <path
                d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z"
                fill="#4caf50"
              />
              <path
                d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z"
                fill="#1976d2"
              />
            </svg>
            Sign up with Google
          </button>
          <button className="py-2 w-full bg-transparent border border-gray-300 my-2 relative">
            <svg
              fill="#000000"
              width="2rem"
              height="2rem"
              viewBox="-52.01 0 560.035 560.035"
              xmlns="http://www.w3.org/2000/svg"
              className="z-10 absolute top-0.5 left-2"
            >
              <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
            </svg>
            Sign up with Apple
          </button>
        </div>
        <p className="text-center mt-2">
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
