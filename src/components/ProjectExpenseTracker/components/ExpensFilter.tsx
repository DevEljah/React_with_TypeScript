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
          <option value="Grocieries">Grocieries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
    </>
  );
};

export default ExpensFilter;
