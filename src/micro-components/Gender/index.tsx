"use client";

interface Props {
  gender: string;
  handleChange: (gender: string) => void;
}

const Gender = ({ gender, handleChange }: Props) => {
  return (
    <div>
      <div className="flex gap-2">
        <label className="label cursor-pointer bg-white border border-black05 rounded px-3 md:px-4 gap-2 h-12">
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => handleChange(e.target.value)}
            className="radio checked:bg-primary radio-xs"
          />
          <span>Male</span>
        </label>
        <label className="label cursor-pointer bg-white border border-black05 rounded px-3 md:px-4 gap-2 h-12">
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => handleChange(e.target.value)}
            className="radio checked:bg-primary radio-xs"
          />
          <span>Female</span>
        </label>
        <label className="label cursor-pointer bg-white border border-black05 rounded px-3 md:px-4 gap-2 h-12">
          <input
            type="radio"
            value="others"
            checked={gender === "others"}
            onChange={(e) => handleChange(e.target.value)}
            className="radio checked:bg-primary radio-xs"
          />
          <span>Others</span>
        </label>
      </div>
    </div>
  );
};

export default Gender;
