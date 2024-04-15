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
        "flex flex-col min-h-screen items-center p-8 pt-20 gap-4",
        fitHeight ? "h-fit" : "",
        className
      )}
    >
      {children}
    </div>
  );
}
