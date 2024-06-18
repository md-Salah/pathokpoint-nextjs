import { Sidebar } from "@/components";
import React from "react";

const Dashboard = () => {
  return <div className="flex items-start">
    <Sidebar/>
    <div>Dashboard</div>
  </div>;
};

export default Dashboard;
