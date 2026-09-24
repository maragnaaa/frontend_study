interface InputProps {
  placeholder: string;
  inputClass: string;
}

export function Input({ placeholder, inputClass }: InputProps) {
  return (
    <>
      <input type="number" className={inputClass} placeholder={placeholder} />
    </>
  );
}
