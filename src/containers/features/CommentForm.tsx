import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "src/components/Button";
import { useUserStore } from "src/store/UserStore";
import { cn } from "src/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// const CommentSchema = z.object({
//   name: z.string(),
//   email: z.string().email(),
//   content: z.string().max(500),
// });

// type CommentFormFields = z.infer<typeof CommentSchema>;

interface CommentFormFields {
  name: string;
  email: string;
  content: string;
}

export const CommentForm = () => {
  const user = useUserStore((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormFields>({
    defaultValues: {
      name: user?.name,
      email: user?.email,
    },
    // resolver: zodResolver(CommentSchema),
  });

  const onSubmit: SubmitHandler<CommentFormFields> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-[5%]">
        <div className="w-1/2">
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
          <input
            {...register("name", {
              required: "The name is required",
              validate: (value) => {
                return value === user?.name ? true : "Enter your user name";
              },
            })}
            type="text"
            className={cn(
              "w-full outline-0 border p-2 border-gray-300 focus:border-gray-400",
              {
                "border-red-500 focus:border-red-500": errors.name,
                "mt-6": errors.email && !errors.name,
              }
            )}
            placeholder="Name*"
          />
        </div>
        <div className="w-1/2">
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
          <input
            {...register("email", {
              required: "The email is required",
              validate: (value) => {
                return /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test(
                  value
                )
                  ? value === user?.email
                    ? true
                    : "Enter your user email"
                  : "Invalid email";
              },
            })}
            type="email"
            className={cn(
              "w-full outline-0 border p-2 border-gray-300 focus:border-gray-400",
              {
                "border-red-500 focus:border-red-500": errors.email,
                "mt-6": errors.name && !errors.email,
              }
            )}
            placeholder="Email*"
          />
        </div>
      </div>
      {errors.content && (
        <div className="text-red-500 mt-10">{errors.content.message}</div>
      )}
      <textarea
        {...register("content", {
          required: "The comment is required",
          validate: (value) => {
            return value.length <= 500 ? true : "Too long comment";
          },
        })}
        placeholder="Write a comment"
        className={cn(
          "w-full h-48 resize-none border-gray-300 border p-3 mt-10 outline-0 focus:border-gray-400",
          {
            "border-red-500 focus:border-red-500 mt-0": errors.content,
          }
        )}
      ></textarea>
      <Button size="lg" className="mt-10">
        {isSubmitting ? "Loading..." : "Post a comment"}
      </Button>
    </form>
  );
};
