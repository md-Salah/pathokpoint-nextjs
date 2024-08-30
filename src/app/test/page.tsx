import { OrderStatusBadge } from '@/micro-components';

const Test = () => {
  const statusStyles = [
    { status: "pending", style: "bg-[#FFF1CE] text-[#FFC327]" },
    { status: "processing", style: "bg-[#FFF3E0] text-[#F57C00]" },
    { status: "on-delivery", style: "bg-[#C2E6FF] text-[#157892]" },
    { status: "delivered", style: "bg-[#CEFFEA] text-[#02BF6C]" },
    { status: "cancelled", style: "bg-[#FFD3D3] text-[#EE485C]" },
    { status: "default", style: "bg-[#FFD3D3] text-[#EE485C]" },
  ];

  return (
    <div className='bg-white space-y-3'>
      {statusStyles.map((statusStyle, index) => (
        <OrderStatusBadge key={index} status={statusStyle.status} />
      ))}
    </div>
  );
};

export default Test;
