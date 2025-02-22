import React from "react";

interface InputPlaceholderProps {
  label: string;
  iconSrc?: string;
  className?: string;
  altText?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPlaceholder: React.FC<InputPlaceholderProps> = ({
  label,
  iconSrc,
  className,
  altText,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div
      className={`bg-[#E0E8F3] rounded-lg min-w-[300px] min-h-[48px] flex flex-row gap-x-1.5 items-center p-4 w-full max-w-xl ${className}`}
    >
      {/* Icon Section */}
      {iconSrc && (
        <img
          className="w-6 h-6 object-contain mr-2"
          alt={altText || "Input icon"}
          src={iconSrc}
        />
      )}

      {/* Input Field */}
      <input
        type={type}
        className="bg-transparent outline-none flex-1 text-[#737285] placeholder-[#B0B0B0] text-sm"
        placeholder={placeholder || label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputPlaceholder;
