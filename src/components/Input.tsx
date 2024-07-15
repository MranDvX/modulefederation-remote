interface InputProps {
  value: number;
  onChange: (newValue: number) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <div className="flex-row">
        <input
          type="text"
          value={value.toString()}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Input;
