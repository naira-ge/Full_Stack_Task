import { useRef, useEffect } from "react";

import "./styles.css";
  
const Input = ({
  className,
  name,
  value,
  placeholder = "",
  type = "text",
  required = true,
  label,
  error,
  autoComplete,
  autoFocus,
  disabled,
  icon,
  ...handlers
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);
  
  return (
    <div className={className}>
      <div className="input-container">
        {icon && <img alt="icon" className="icon" src={icon} />}
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          required={required}
          autoComplete={autoComplete}
          disabled={disabled}
          ref={inputRef}
          {...handlers}
        />
        <label>{label}</label>
      </div>
      <span>{error}</span>
    </div>
  )
}

export default Input;
