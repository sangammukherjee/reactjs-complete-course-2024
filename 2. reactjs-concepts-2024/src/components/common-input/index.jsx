function CommonInput({ label, onChange, type, name, id, value, placeholder }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type || "text"}
        id={id}
        placeholder={placeholder || "Enter value here"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CommonInput;
