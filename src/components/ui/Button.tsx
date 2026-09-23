interface ButtonProps {
  text: string;
  classname: string;
}

export function Button({ text, classname }: ButtonProps) {
  return (
    <div>
      <button type="button" className={classname}>
        {text}
      </button>
    </div>
  );
}
