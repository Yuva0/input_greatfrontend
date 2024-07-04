import React from "react";
import "./Input.scss";

interface InputProps {
  value?: string;
  placeholder?: string;
  hasError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  errorText?: string;
  helperText?: string;
  className?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  "data-testid"?: string;
  width?: string | number | "auto" | "inherit";
  size?: "large" | "small";
  label?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const Input = ({
  label,
  placeholder,
  hasError,
  helperText,
  errorText,
  leadingIcon,
  trailingIcon,
  width,
  onFocus,
  onBlur,
}: InputProps) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const _onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };
  const _onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  const _onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="input-container"
      style={{ width: width ?? "340px" }}
      onClick={_onClick}
    >
      {label && <div className="input-label">{label}</div>}
      <div className={`input-box ${isFocused ? "input-box-focused" : ""}`}>
        {leadingIcon && (
          <span
            style={{ color: hasError ? "red" : "#737373" }}
            className="input-leading-icon"
          >
            {leadingIcon}
          </span>
        )}
        <input
          ref={inputRef}
          placeholder={placeholder}
          onFocus={_onFocus}
          onBlur={_onBlur}
        />
        {trailingIcon && (
          <span
            className="input-trailing-icon"
            style={{ color: hasError ? "red" : "#737373" }}
          >
            {trailingIcon}
          </span>
        )}
      </div>
      {helperText && <div className="input-helper-text">{helperText}</div>}
      {errorText && <div className="input-error-text">{errorText}</div>}
    </div>
  );
};

export default Input;
