import { cn } from "src/utils";
import { useState } from "react";

interface TabsProps {
  tabList: string[];
  tabStyles?: string;
  setCategory: (value: string) => void
}

export const Tabs = ({ tabList, tabStyles, setCategory }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(tabList[0]);

  const tabListItems = tabList.map((tab) => {
    return (
      <li
        key={tab}
        className={cn(
          "hover:text-gray-400 mx-9 transition-all duration-200 cursor-pointer text-lg",
          tabStyles,
          {
            "text-orange-400": activeTab === tab,
          }
        )}
        onClick={() => {
          setActiveTab(tab)
          setCategory(tab)
        }}
      >
        {tab}
      </li>
    );
  });

  return <ul className="flex justify-center">{tabListItems}</ul>;
};
