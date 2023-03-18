import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  // color?: string // =>>
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const MyButton = ({ children, color = "primary", onClick }: ButtonProps) => {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children} or your Button ;/
      </button>
    </>
  );
};

export default MyButton;
