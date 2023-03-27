import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 charecters" }), // 2nd parameter is optional!
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "Age must be at least 18" }),
});

// interface FormData {
//   name: string;
//   age: number;
// } //=>>
type FormData = z.infer<typeof schema>;

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  // console.log(formState.errors);

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="from-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name")}
        />
        {errors.name && <p className="text-danger"> {errors.name.message} </p>}
      </div>
      <div className="mb-3 w-25">
        <label htmlFor="age" className="from-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && <p className="text-danger"> {errors.age.message} </p>}
      </div>
      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default FormValidation;
