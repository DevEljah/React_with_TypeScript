import { categories } from "../../../App";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpensFilter = ({ onSelectCategory }: Props) => {
  return (
    <>
      <div className="mb-3">
        <select
          onChange={(event) => onSelectCategory(event.target.value)}
          className="form-select"
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ExpensFilter;
