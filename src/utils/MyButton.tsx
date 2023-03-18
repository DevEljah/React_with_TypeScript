import { ReactNode, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  // color?: string // =>>
  color?: "primary" | "secondary" | "danger";
  // onClick: () => void;
}

const MyButton = ({
  children,
  color = "primary" /* onClick */,
}: ButtonProps) => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      {toggle ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Alert
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setToggle(false)}
          ></button>
        </div>
      ) : (
        ""
      )}

      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => setToggle(true)}
      >
        {children}
      </button>
    </>
  );
};

export default MyButton;
