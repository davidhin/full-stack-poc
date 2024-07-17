import { cva } from "class-variance-authority";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
};

export default function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} className={buttonVariants({ variant })} />;
}

const buttonVariants = cva(
  "py-2 px-4 rounded-md font-semibold hover:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-primary-500 to-primary-700 text-black",
        secondary: "bg-greyscale-700 text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
