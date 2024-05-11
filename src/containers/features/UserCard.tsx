import { Link } from "src/components/Link";
import { IconList } from "src/containers/features/IconList";
import { TIcon } from "src/types";

interface UserCardProps {
  avatar?: string;
  name?: string;
  media?: TIcon[];
}

export const UserCard = ({
  avatar = "https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png",
  name,
  media,
}: UserCardProps) => {
  return (
    <section className="flex flex-col items-center justify-center border border-gray-200 p-6 mt-6 min-h-[18rem]">
      {name && avatar && media ? (
        <>
          <img className="w-28 h-28" src={avatar} alt="user" />
          <h3 className="text-xl font-semibold mt-6 mb-3">{name}</h3>
          {/* <p className="text-gray-500 text-center mb-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel accusamus
        itaque ducimus rem reiciendis molestias perferendis, dignissimos
        doloremque est ab.
      </p> */}
          <IconList icons={media} iconStyles="text-gray-700" />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500 text-lg mb-3">
            You don't have an account yet
          </p>
          <Link to="/" variant="button" rounded="default" className="text-gray-100">
            Sign Up
          </Link>
        </div>
      )}
    </section>
  );
};
