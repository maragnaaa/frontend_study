interface BagdeProps {
  text: string;
  classname: string;
}

export function Badge({ text, classname }: BagdeProps) {
  return (
    <>
      <div className={classname}>
        <p>{text}</p>
      </div>
    </>
  );
}
