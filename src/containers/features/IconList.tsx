import { Icon } from "src/components/Icon";

import { TIcon } from "src/types";
import { cn } from "src/utils";

interface IconListProps {
  icons: TIcon[];
  iconStyles?: string;
  listItemStyles?: string;
  listStyles?: string;
}

export const IconList = ({
  icons,
  iconStyles,
  listItemStyles,
  listStyles,
}: IconListProps) => {
  const listItems = icons.map((icon) => (
    <li className={cn("mx-2", listItemStyles)}>
      <a href={icon.src}>
        <Icon IconComponent={icon.icon} className={iconStyles} />
      </a>
    </li>
  ));

  return <ul className={cn("flex", listStyles)}>{listItems}</ul>;
};
