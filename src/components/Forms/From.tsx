import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (nameRef.current !== null)
      // console.log(nameRef.current.value);
      person.name = nameRef.current.value;
    if (ageRef.current !== null)
      // console.log(ageRef.current.value);
      person.age = parseInt(ageRef.current.value);
    console.log(person);
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
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3 w-25">
        <label htmlFor="age" className="from-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default Form;
