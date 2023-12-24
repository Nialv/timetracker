import { capitalize } from "@helpers/capitalize";
import { SelectOptions } from "@interfaces/SelectOptions";

const Select = ({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: SelectOptions[];
}) => {
  if (options.length === 0) return "";

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        <select
          id={name}
          name={name}
          data-testid={"test" + capitalize(name)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md shadow-sm transition duration-150 ease-in-out"
        >
          {options.map(({ id, name }, i) => (
            <option value={id} key={id + i}>
              {name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
