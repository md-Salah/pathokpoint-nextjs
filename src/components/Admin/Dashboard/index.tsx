"use client";
import InventoryAnalysis from './InventoryAnalysis';
import OrderSummary from './OrderSummary';

const DashboardContent = () => {
  return (
    <div className="admin-container space-y-4 sm:space-y-8">
      <div className="pt-2">
        <h1 className="text-[#667085] text-lg md:text-xl tracking-wide">
          Welcome!
        </h1>
      </div>

      <div className="space-y-4 bg-white p-4 sm:p-8">
        <h1 className="text-lg md:text-2xl font-semibold">Order</h1>
        <OrderSummary />
      </div>

      <div className="space-y-4 bg-white p-4 sm:p-8">
        <h1 className="text-lg md:text-2xl font-semibold">Inventory</h1>
        <InventoryAnalysis />
      </div>
    </div>
  );
};

export default DashboardContent;
