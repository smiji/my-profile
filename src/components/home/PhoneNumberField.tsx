import React from "react";
import { PhoneInput } from "react-international-phone";

type PhoneNumberFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  editing: boolean;
  defaultCountry?: "us" | "gb" | "in";
  error?: string;
  placeholder?: string;
};

const PhoneNumberField: React.FC<PhoneNumberFieldProps> = ({
  label,
  value,
  onChange,
  editing,
  defaultCountry = "gb",
  error,
  placeholder = "Enter phone number",
}) => {
  return (
    <>
      {label}
      {error && <span className="text-red-500 text-sm">{error}</span>}
      {editing ? (
        <div className="w-full phone-number-field focus-within:ring-2 focus-within:ring-blue-500 focus-within:rounded">
          <PhoneInput
            defaultCountry={defaultCountry}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="phone-number-field__input"
          />
        </div>
      ) : (
        <span className="p-2 text-cyan-700">{value || "-"}</span>
      )}
    </>
  );
};

export default PhoneNumberField;
