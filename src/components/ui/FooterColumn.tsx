interface FooterProps {
  columnClass: string;
  titleClass: string;
  columnTitle: string;
  optionsDivClass: string;
  options: string[];
  textClass: string;
}

export function FooterColumn({
  columnClass,
  titleClass,
  columnTitle,
  optionsDivClass,
  options,
  textClass,
}: FooterProps) {
  return (
    <>
      <div className={columnClass}>
        <h2 className={titleClass}>{columnTitle}</h2>
        <div className={optionsDivClass}>
          {options.map((text, index) => (
            <a key={index} href="#" className={textClass}>
              {text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
