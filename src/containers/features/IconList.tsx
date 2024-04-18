import { Icon } from "../../components/Icon";

import { TIcons } from "src/types";
import { cn } from "src/utils";

interface IconListProps {
  icons: TIcons[];
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
    <li key={icon.id} className={cn("mx-2", listItemStyles)}>
      <Icon IconComponent={icon.icon} className={iconStyles} />
    </li>
  ));

  return <ul className={cn("flex", listStyles)}>{listItems}</ul>;
};
