"use client";
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Order } from '@/interface';
import { placeOrder } from '@/redux/features/admin-cart-slice';
import { AppDispatch } from '@/redux/store';

import CouponAndSummary from './CouponAndSummary';
import Items from './Items';
import Payments from './Payments';
import Shipping from './Shipping';
import Success from './Success';

const AddOrderForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [order, setOrder] = useState<Order | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const handlePlaceOrder = async () => {
    const action = await dispatch(placeOrder());
    if (placeOrder.fulfilled.match(action)) {
      setOrder(action.payload);
      modalRef.current?.showModal();
    }
  };

  return (
    <div className="max-w-[1024px] mx-auto">
      <Success order={order} modalRef={modalRef} />
      <Items />
      <Shipping />
      <Payments />

      {/* Customer */}

      <CouponAndSummary handlePlaceOrder={handlePlaceOrder} />
    </div>
  );
};

export default AddOrderForm;
