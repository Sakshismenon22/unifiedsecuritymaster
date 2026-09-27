function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false
}) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <input
        type={type}
        value={value ?? ""}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
