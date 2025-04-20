import {forwardRef, InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({label, className, ...props}, ref) => {
    return ( 
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-neutral-100">{label}</label>
        )}
        <input
          ref={ref}
          className={`px-3 py-2 text-white bg-neutral-800/40 border border-neutral-900 rounded-md text-sm outline-none ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
