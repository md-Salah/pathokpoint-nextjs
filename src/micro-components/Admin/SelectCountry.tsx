interface Props {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectCountry = ({ name, value, handleChange }: Props) => {
  return (
    <select
      className="select select-bordered focus:outline-none focus:border-primary"
      name={name}
      value={value}
      onChange={handleChange}
    >
      <option value="">Select country</option>
      <option value="BD">Bangladesh</option>
      <option value="IN">India</option>
      <option value="UK">United Kingdom</option>
    </select>
  );
};

export default SelectCountry;
