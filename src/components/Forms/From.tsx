// import { FormEvent, useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  console.log(register("name"));

  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);

  /* useState;
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  }); */
  // const person = { name: "", age: 0 };

  /* const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (nameRef.current !== null)
      // console.log(nameRef.current.value);
      person.name = nameRef.current.value;
    if (ageRef.current !== null)
      // console.log(ageRef.current.value);
      person.age = parseInt(ageRef.current.value);
    console.log(person);
  }; */

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form
      onSubmit={
        // "handleSubmit" is just a fuc that recive the "data" in this from
        handleSubmit(onSubmit)
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
        <input
          // ref={nameRef}
          id="name"
          type="text"
          className="form-control"
          /* onChange={(e) => setPerson({ ...person, name: e.target.value })}
          value="name" */
          {...register("name")}
        />
      </div>
      <div className="mb-3 w-25">
        <label htmlFor="age" className="from-label">
          Age
        </label>
        <input
          // ref={ageRef}
          id="age"
          type="number"
          className="form-control"
          {...register("age")}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default Form;
