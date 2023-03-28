import { useForm, FieldValues } from "react-hook-form";

const ProjectExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Project - Expense Tracker</h2>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description", { required: true, minLength: 3 })}
        ></input>
        {errors.description?.type === "required" && (
          <p className="text-danger">The description field is required</p>
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
        ></input>
        {errors.amount?.type === "required" && (
          <p className="text-danger">The amount field is required</p>
        )}
      </div>
      <div>
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          {...register("category", { required: true })}
        >
          <option>none</option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ProjectExpenseTracker;
