interface SectionType {
  container?: boolean;
  space?: "exterasmall" | "small" | "medium" | "large";
  className?: string;
  identifier?: string;
  children?: React.ReactNode;
}

const Section = ({
  container,
  space,
  className,
  identifier,
  children,
}: SectionType) => {
  return (
    <>
      <section
        id={`${identifier ? identifier : ""}`}
        className={`${container ? "container mx-auto" : "w-full"} ${
          space === "exterasmall"
            ? "space-exterasmall"
            : space === "small"
            ? "space-small"
            : space === "medium"
            ? "space-medium"
            : space === "large"
            ? "space-large"
            : ""
        } ${className}`}
      >
        {children}
      </section>
    </>
  );
};

export default Section;
