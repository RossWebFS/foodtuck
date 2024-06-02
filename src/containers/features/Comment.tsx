import { TComment } from "src/types";
import avatar from "src/assets/users/User1.png";
import { icons } from "src/constants";
import { Icon } from "src/components/Icon";
import { useUserStore } from "src/store/UserStore";

interface CommentProps {
  comment: TComment;
}
export const Comment = ({ comment }: CommentProps) => {
  const user = useUserStore((state) => state.user);
  return (
    <div className="flex gap-2 mt-12">
      <img
        className="w-16 h-16 rounded-full object-cover"
        src={avatar}
        alt="avatar"
      />
      <div>
        <h5 className="font-semibold">User</h5>
        <div className="flex gap-3 items-center">
          <div>
            <Icon
              IconComponent={icons.outlinedCalendar.icon}
              className="text-orange-400 mr-2 w-5 h-5 cursor-default"
            />
            <span className="text-gray-500">June 02 2024</span>
          </div>
          {
            <div className="group flex gap-1 items-center">
              <Icon
                IconComponent={icons.bin.icon}
                className="hover:text-gray-600 text-gray-600 group-hover:text-red-500"
              />
              <span className="group-hover:text-red-500 transition-colors duration-200 cursor-pointer">
                Delete
              </span>
            </div>
          }
        </div>
        <p className="mt-3 text-gray-700">{comment.content}</p>
      </div>
    </div>
  );
};
