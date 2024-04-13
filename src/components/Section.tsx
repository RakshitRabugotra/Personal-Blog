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
        "flex min-h-screen items-center p-4",
        fitHeight ? "h-fit" : "",
        className
      )}
    >
      {children}
    </div>
  );
}
