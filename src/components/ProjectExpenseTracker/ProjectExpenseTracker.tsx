const ProjectExpenseTracker = () => {
  return (
    <div>
      <h2>Project - Expense Tracker</h2>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Amount
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
        ></input>
      </div>
      <div>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Category
        </label>
        <select className="form-select" aria-label="Default select example">
          <option>none</option>
          <option value="1">Groceries</option>
          <option value="2">Utilities</option>
          <option value="3">Entertainment</option>
        </select>
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default ProjectExpenseTracker;
