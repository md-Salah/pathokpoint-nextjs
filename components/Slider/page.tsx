"use client";
import { BookCard } from "../../components";
import { Stack, Typography } from "@mui/material";
import { items } from "../constant";
import { Anek_Bangla } from "next/font/google";

interface SliderProps {
  title: string;
}

const anekBangla = Anek_Bangla({ subsets: ["bengali"] });

const Slider: React.FC<SliderProps> = ({ title }) => {
  return (
    <div className="pt-6">
      {/* Title */}
      <Typography variant="h5" className={`py-2 ${anekBangla.className}`}>
        {title}
      </Typography>

      {/* Sliders */}
      <Stack
        direction="row"
        spacing={2}
        className="overflow-x-auto no-scrollbar"
      >
        {items.map((item, index) => (
          <BookCard key={index} item={item} />
        ))}
      </Stack>
    </div>
  );
};

export default Slider;
