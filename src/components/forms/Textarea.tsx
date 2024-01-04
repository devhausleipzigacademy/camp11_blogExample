import React from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

interface Props extends TextareaProps {
	label: string;
	name: string;
}

function Textarea({ label, name, ...props }: Props) {
	const id = `textarea-${name}`;

	return (
		<div className="flex flex-col gap-2">
			<label
				htmlFor={id}
				className="text-sm text-neutral-400 font-semibold"
			>
				{label}
			</label>

			<textarea
				name={name}
				id={id}
				{...props}
				className="border border-neutral-300 py-1 px-4 rounded-md max-w-xs focus:border-neutral-800  focus:ring-0 focus-visible:outline-none"
			></textarea>
		</div>
	);
}

export default Textarea;
