"use client";
import { capitalizeFirstLetterOfEachWord } from "@/utils";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    month: "Jan",
    sales: 4000,
    revenue: 2400,
    amt: 2400,
  },
  {
    month: "Feb",
    sales: 3000,
    revenue: 1398,
    amt: 2210,
  },
  {
    month: "Mar",
    sales: 2000,
    revenue: 9800,
    amt: 2290,
  },
  {
    month: "Apr",
    sales: 2780,
    revenue: 3908,
    amt: 2000,
  },
  {
    month: "May",
    sales: 1890,
    revenue: 4800,
    amt: 2181,
  },
  {
    month: "Jun",
    sales: 2390,
    revenue: 3800,
    amt: 2500,
  },
  {
    month: "Jul",
    sales: 3490,
    revenue: 4300,
    amt: 2100,
  },
];

interface CustomTooltipProps extends TooltipProps<number, string> {}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#1D1F2C",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0px 4px 30px rgba(46, 45, 116, 0.05)",
        }}
      >
        {payload.map((data, index) => (
          <div className="text-white flex items-center space-x-2" key={index}>
            <span
              className={`w-2 h-2 bg-gradient-to-r ${
                data.name === "revenue"
                  ? " from-[#2BB2FE] to-[#22CAAD]"
                  : "from-[#F86624] to-[#F9C80E]"
              }`}
            ></span>
            <p>{`${capitalizeFirstLetterOfEachWord(data.name as string)}: ${
              data.value
            }`}</p>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

const StatisticBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barCategoryGap={"2%"}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#22CAAD" stopOpacity={1} />
            <stop offset="95%" stopColor="#2BB2FE" stopOpacity={1} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFD700" stopOpacity={1} />
            <stop offset="95%" stopColor="#FF4500" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="top" align="right" />
        <Bar
          dataKey="revenue"
          fill="url(#colorUv)"
          barSize={10}
          radius={12}
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="sales"
          fill="url(#colorPv)"
          barSize={10}
          radius={12}
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatisticBarChart;
