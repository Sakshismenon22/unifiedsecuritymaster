function Select({
  label,
  value,
  onChange,
  options = [],
  required = false
}) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <select
        value={value ?? ""}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select {label}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;