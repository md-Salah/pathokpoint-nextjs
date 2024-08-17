"use client";
import { useState } from 'react';

interface Props {
  currentDate?: string | null;
  handleChange: (date: string) => void;
}

const DateInput = ({ currentDate, handleChange }: Props) => {
  const [date, setDate] = useState({
    day: currentDate ? new Date(currentDate).getDate() : "",
    month: currentDate ? new Date(currentDate).getMonth() + 1 : "",
    year: currentDate ? new Date(currentDate).getFullYear() : "",
  });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newDate = { ...date, [event.target.name]: event.target.value };
    setDate(newDate);
    handleChange(`${newDate.year}-${newDate.month}-${newDate.day}`);
  };

  return (
    <div className="flex gap-2">
      <select
        name="day"
        value={date.day}
        onChange={onChange}
        className="select select-bordered bg-white w-1/3 focus:outline-none focus:border-primary"
      >
        <option value="">Day</option>
        {Array.from({ length: 31 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <select
        name="month"
        value={date.month}
        onChange={onChange}
        className="select select-bordered bg-white w-1/3 focus:outline-none focus:border-primary"
      >
        <option value="">Month</option>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {new Date(0, i).toLocaleString("default", {
              month: "short",
            })}
          </option>
        ))}
      </select>
      <select
        name="year"
        value={date.year}
        onChange={onChange}
        className="select select-bordered bg-white w-1/3 focus:outline-none focus:border-primary"
      >
        <option value="">Year</option>
        {Array.from({ length: 100 }, (_, i) => (
          <option key={2024 - i} value={2024 - i}>
            {2024 - i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateInput;
