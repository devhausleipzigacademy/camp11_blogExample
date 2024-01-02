import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends InputProps {
  id: string;
  label: string;
}

function Input({ id, label, ...props }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-neutral-400 font-semibold">
        {label}
      </label>
      <input
        {...props}
        id={id}
        className="border border-neutral-300 py-1 px-4 rounded-md max-w-xs focus:border-neutral-800  focus:ring-0 focus-visible:outline-none"
      />
    </div>
  );
}

export default Input;
