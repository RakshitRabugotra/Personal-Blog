import { twMerge } from "tailwind-merge";

export default function Heading({
  id,
  className,
  center,
  children,
}: {
  id?: string;
  className?: string;
  center?: boolean;
  children: React.ReactNode;
}) {
  return (
    <h1
      id={id}
      className={twMerge(
        "font-monumentRegular text-4xl uppercase leading-tight",
        className,
        "text-wrap w-full",
        center ? "text-center" : "text-left" 
      )}
    >
      {children}
    </h1>
  );
}
