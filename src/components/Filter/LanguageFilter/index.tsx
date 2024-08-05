const LanguageFilter = ({
  ln,
  handleLanguage,
}: {
  ln: string;
  handleLanguage: (ln: string) => void;
}) => (
  <div className="bg-white">
    <div className="flex justify-between items-center py-3 px-5 border-b">
      <h4 className="font-semibold text-black02 text-base">Language</h4>
    </div>
    <div className="px-5 pt-3 pb-5 form-control">
      <CheckBox label="Bangla" handleLanguage={handleLanguage} ln={ln} />
      <CheckBox label="English" handleLanguage={handleLanguage} ln={ln} />
      <CheckBox label="Other" handleLanguage={handleLanguage} ln={ln} />
    </div>
  </div>
);

export default LanguageFilter;

const CheckBox = ({
  label,
  ln,
  handleLanguage,
}: {
  label: string;
  ln: string;
  handleLanguage: (ln: string) => void;
}) => (
  <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
    <input
      type="checkbox"
      className="checkbox checkbox-xs checkbox-primary"
      checked={ln === label.toLowerCase()}
      onChange={() => handleLanguage(label.toLowerCase())}
    />
    <span className="label-text">{label}</span>
  </label>
);
