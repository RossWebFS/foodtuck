import { TFilterObject } from "src/types";
import { TESelect } from "tw-elements-react";
import { SelectData } from "tw-elements-react/dist/types/forms/Select/types";

interface SelectProductFilterProps {
  filter: TFilterObject;
  filterHandler: (value: TFilterObject) => void;
}

export const SelectProductFilter = ({
  filter,
  filterHandler,
}: SelectProductFilterProps) => {
  const preferredFilter = (e: SelectData | SelectData[]) => {
    if (Array.isArray(e)) {
      const values = e
        .map((value) => {
          if (value.value === "cart" || value.value === "wishList")
            return value.value;
          return null;
        })
        .filter((item): item is "cart" | "wishList" => item !== null);
      filterHandler({ ...filter, preferred: values });
    }
  };
  const caloryFilter = (e: SelectData | SelectData[]) => {
    if (Array.isArray(e)) {
      const values = e
        .map((value) => {
          if (value.value === "high" || value.value === "middle" || value.value === "low")
             return value.value;
          return null;
        })
        .filter((item): item is "high" | "middle" | "low" => item !== null);
      filterHandler({ ...filter, calories: values });
    }
  };

  return (
    <section className="flex items-center py-8 gap-10">
      <div className="flex items-center">
        <label htmlFor="#request-filter">Sort by:</label>
        <TESelect
          id="request-filter"
          data={[
            { text: "In cart", value: "cart" },
            { text: "In wish list", value: "wishList" },
          ]}
          className="w-64 ml-2"
          placeholder="Choose.."
          multiple
          clearBtn
          onValueChange={(e) => {
            if (e) preferredFilter(e);
          }}
        />
      </div>

      <div className="flex items-center">
        <label htmlFor="#request-filter">Calories:</label>
        <TESelect
          id="request-filter"
          data={[
            { text: "Below 300", value: "low" },
            { text: "Between 300 and 600", value: "middle" },
            { text: "Over 600", value: "high" },
          ]}
          className="w-64 ml-2"
          placeholder="Choose.."
          multiple
          clearBtn
          onValueChange={(e) => {
            if (e) caloryFilter(e)
          }}
        />
      </div>
    </section>
  );
};
