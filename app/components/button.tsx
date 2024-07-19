import { cn } from "@/app/lib/utils";
import { cva } from "class-variance-authority";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
};

export default function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
}

const buttonVariants = cva(
  "py-2 px-4 rounded-md font-semibold hover:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-blue-300 text-black",
        secondary: "bg-greyscale-700 text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
