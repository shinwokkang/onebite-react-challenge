function Input({ currency, value, onChange }) {
  return (
    <div>
      <label>{currency}: </label>
      <input
        value={value}
        onChange={(e) => onChange(currency, e.target.value)}
      />
    </div>
  );
}

export default Input;
