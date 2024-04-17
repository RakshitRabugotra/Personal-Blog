import { twMerge } from "tailwind-merge";

export default function Section({
  children,
  id,
  className,
  fitHeight,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fitHeight?: boolean;
}) {
  return (
    <div
      id={id}
      className={twMerge(
        "flex flex-col items-center p-8 pt-20 gap-4",
        fitHeight ? "h-fit" : "min-h-screen",
        className
      )}
    >
      {children}
    </div>
  );
}
