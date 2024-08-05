const ConditionFilter = ({
  handleCondition,
}: {
  handleCondition: (condition: string) => void;
}) => {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center py-3 px-5 border-b">
        <h4 className="font-semibold text-black02 text-base">Condition</h4>
      </div>
      <div className="px-5 pt-3 pb-5 form-control">
        <CheckBox label="New" handleCondition={handleCondition} />
        <CheckBox label="Old" handleCondition={handleCondition} />
        <div className="ml-4">
          <CheckBox label="Old like new" handleCondition={handleCondition} />
          <CheckBox label="Old good enough" handleCondition={handleCondition} />
          <CheckBox label="Old acceptable" handleCondition={handleCondition} />
        </div>
      </div>
    </div>
  );
};

export default ConditionFilter;

const CheckBox = ({
  label,
  handleCondition,
}: {
  label: string;
  handleCondition: (condition: string) => void;
}) => (
  <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
    <input type="checkbox" className="checkbox checkbox-xs checkbox-primary" />
    <span className="label-text">{label}</span>
  </label>
);
