import { FormEvent } from "react";

const Form = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submited");
  };

  return (
    <form
      onSubmit={
        handleSubmit
        /* (e) => {
          e.preventDefault();
          console.log("submited");
        } */
      }
    >
      <div className="mb-3">
        <label htmlFor="name" className="from-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3 w-25">
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
