import { TComment } from "src/types";

import Quotes from "src/assets/decorations/Quotes.png";
import avatar from "src/assets/users/User1.png"

interface FeedBackCardProps {
  comment: TComment
}
export const FeedBackCard = ({
  comment,
}: FeedBackCardProps) => {
  return (
    <div className="bg-white w-[45rem] h-[22rem] relative flex flex-col mx-auto mt-16 items-center text-black">
      <img
        className="absolute self-center -top-16 z-20"
        src={avatar}
        alt="user 1"
      />
      <img className="w-12 mt-[5rem] mb-3" src={Quotes} alt="quotes" />
      <p className="w-4/5 text-center">{comment.content}</p>
      <p className="text-2xl mt-7 mb-2 font-bold">User</p>
      <p className="text-gray-500">Food Specialist</p>
    </div>
  );
};
