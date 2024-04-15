import { twMerge } from "tailwind-merge";

interface IText {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/* This component can conditionally render a single line or paragraph*/ 
export default function Text({ id, className, children }: IText) {
  // Check if the passed object is an array, then print individual lines
  const isArray = Array.isArray(children);

  return isArray ? (
    children.map((line, index) => (
      <TextLine id={id} className={className}>
        {line}
      </TextLine>
    ))
  ) : (
    <TextLine id={id} className={className}>
      {children}
    </TextLine>
  );
}

/* Component for line line <p> tag*/
function TextLine({ id, className, children }: IText) {
  return (
    <p
      id={id}
      className={twMerge(
        "text-md font-extralight w-full text-pretty text-zinc-200/80",
        className
      )}
    >
      {children}
    </p>
  );
}
