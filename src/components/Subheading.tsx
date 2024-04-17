import { twMerge } from "tailwind-merge";

export default function SubHeading({
  id,
  className,
  noTransform,
  center,
  children,
}: {
  id?: string;
  className?: string;
  noTransform?: boolean;
  center?: boolean;
  children: React.ReactNode;
}) {
  return (
    <h3
      id={id}
      className={twMerge(
        "font-monumentRegular text-xl md:text-3xl leading-tight",
        noTransform ? "" : "uppercase",
        className,
        "text-wrap w-full",
        center ? "text-center" : "text-left"
      )}
    >
      {children}
    </h3>
  );
}
