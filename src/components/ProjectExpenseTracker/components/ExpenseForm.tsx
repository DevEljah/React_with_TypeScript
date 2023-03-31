import { useForm } from "react-hook-form";
import { Expense } from "../../../App";
import categories from "../categories";

interface Props {
  onSubmit: (data: Expense) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Expense>();

  // const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
        className="mb-4"
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            type="text"
            className="form-control"
            {...register("description", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
          />
          {errors.description?.type === "required" && (
            <p className="text-danger">The description field is required</p>
          )}
          {errors.description?.type === "minLength" && (
            <p className="text-danger">
              The description must be at least 3 charracters
            </p>
          )}
          {errors.description?.type === "maxLength" && (
            <p className="text-danger">
              The description must be maximum of 50 charracters
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className="form-control"
            {...register("amount", { required: true })}
          />
          {errors.amount?.type === "required" && (
            <p className="text-danger">The amount field is required</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category">Category</label>
          <select
            className="form-select"
            id="category"
            {...register("category", {
              required: true,
              validate: (value) => value !== "defaultvalue",
            })}
          >
            <option value="defaultvalue">None</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category?.type === "required" && (
            <p className="text-danger">The category field is required</p>
          )}
          {errors.category?.type === "validate" && (
            <p className="text-danger">Please select a category</p>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
