import React from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

interface Props extends TextareaProps {
  id: string;
  label: string;
}

function Textarea({ id, label, ...props }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-neutral-400 font-semibold">
        {label}
      </label>

      <textarea
        id={id}
        {...props}
        className="border border-neutral-300 py-1 px-4 rounded-md max-w-xs focus:border-neutral-800  focus:ring-0 focus-visible:outline-none"
      ></textarea>
    </div>
  );
}

export default Textarea;
