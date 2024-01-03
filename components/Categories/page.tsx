import React from "react";
import Category from "./Category";

import { Anek_Bangla } from "next/font/google";
const anekBangla = Anek_Bangla({ subsets: ["bengali"] });

import { items } from "../constant";
import { Stack } from "@mui/joy";

interface props {
  title: string;
}

const Categories = ({ title }: props) => {
  return (
    <div className="mt-4">
      <h5 className={`py-2 text-2xl ${anekBangla.className}`}>{title}</h5>

      <Stack
        direction={"row"}
        spacing={2}
        className="overflow-x-auto no-scrollbar"
      >
        {items.map((item, index) => (
          <Category key={index} item={item} />
        ))}
      </Stack>
    </div>
  );
};

export default Categories;
