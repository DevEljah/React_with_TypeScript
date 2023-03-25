import React from "react";

const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="from-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="from-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default Form;
