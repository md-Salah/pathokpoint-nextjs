interface Props {
    label: string;
    name: string;
    checked: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const Checkbox = ({ label, name, checked, handleChange }: Props) => {
    return (
      <div className="form-control">
        <label className="cursor-pointer flex items-center gap-2 w-fit">
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={handleChange}
            className="checkbox checkbox-sm checkbox-primary"
          />
          <span>{label}</span>
        </label>
      </div>
    );
  };
  
  export default Checkbox;
  