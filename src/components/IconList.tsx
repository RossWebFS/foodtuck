import { twMerge } from "tailwind-merge";

import { Icon } from "./Icon";

interface IconListProps {
  icons: React.ReactNode[];
  children?: React.ReactNode;
  listItemStyles?: string;
  listStyles?: string;
}

export const IconList = ({
  children,
  icons,
  listItemStyles,
  listStyles,
}: IconListProps) => {
  const listItems:React.ReactNode[] = icons.map((i, index) => (
    <li key={index} className={twMerge("mx-2", listItemStyles)}>
      <Icon styles="pt-1.5">{i}</Icon>
    </li>
  ));

  return (
    <ul className={twMerge("flex", listStyles)}>
      {children}
      {listItems}
    </ul>
  );
};
