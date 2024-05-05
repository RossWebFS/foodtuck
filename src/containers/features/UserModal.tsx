import { useState } from "react";
import { Icon } from "src/components/Icon";
import { Link } from "src/components/Link";
import { cn } from "src/utils";

interface UserModalProps {
  icon: React.ElementType;
  activeModal?: null | string;
  setActiveModal: (value: null | string) => void;
}

export const UserModal = ({
  icon,
  activeModal,
  setActiveModal,
}: UserModalProps) => {
  const [hasUser] = useState(false);

  return (
    <div>
      <Icon
        IconComponent={icon}
        className={cn("w-5 h-5", {
          "text-orange-400": activeModal === "user",
        })}
        onClick={() => {
          activeModal === "user"
            ? setActiveModal(null)
            : setActiveModal("user");
        }}
      />

      <div
        className={cn(
          "absolute w-64 h-72 top-14 bg-black -translate-x-[56%] rounded-xl border p-4 flex items-center",
          {
            hidden: activeModal !== "user" || activeModal === null,
          }
        )}
      >
        { activeModal === "user" && !hasUser ? (<div className="text-center w-full">
          <p className="mb-2">You don't have an account</p>
          <Link to="/" variant="button" rounded="default">
            Sign Up
          </Link>
        </div>) :
        (<ul className="h-full w-full overflow-y-auto coloredScrollbar text-gray-100/15">
          {}
        </ul>)}
      </div>
    </div>
  );
};
