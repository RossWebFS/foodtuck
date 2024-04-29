interface CategoryCheckboxListProps {
  categories: string[];
}

export const CategoryCheckboxList = ({
  categories,
}: CategoryCheckboxListProps) => {
  const categoryCheckboxes = categories.map((category) => {
    return (
      <li className="flex my-2 items-center">
        <input
          id={`${category}-checkbox`}
          type="checkbox"
          className="accent-orange-600 mr-2 w-4 h-4"
        />
        <label htmlFor={`${category}-checkbox`}></label>
        {category}
      </li>
    );
  });

  return <ul>{categoryCheckboxes}</ul>;
};
