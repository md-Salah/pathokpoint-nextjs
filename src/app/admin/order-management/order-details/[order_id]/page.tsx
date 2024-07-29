"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { OrderDetailsContent, SidebarLayout } from "@/components";

const OrderDetails = () => {
  const params = useParams();
  const handleRestockModalOpen = () => {
    const modalElement = document.getElementById(
      "restock_modal"
    ) as HTMLDialogElement | null;
    modalElement?.showModal();
  };

  const handleRestockModalClose = () => {
    const modalElement = document.getElementById(
      "restock_modal"
    ) as HTMLDialogElement | null;
    modalElement?.close();
  };

  const handleChangeStatusModalOpen = () => {
    const modalElement = document.getElementById(
      "change_status_modal"
    ) as HTMLDialogElement | null;
    modalElement?.showModal();
  };

  const handleChangeStatusModalClose = () => {
    const modalElement = document.getElementById(
      "change_status_modal"
    ) as HTMLDialogElement | null;
    modalElement?.close();
  };
  const handleRefundModalOpen = () => {
    const modalElement = document.getElementById(
      "refund_modal"
    ) as HTMLDialogElement | null;
    modalElement?.showModal();
  };

  const handleRefundModalClose = () => {
    const modalElement = document.getElementById(
      "refund_modal"
    ) as HTMLDialogElement | null;
    modalElement?.close();
  };
  return (
    <SidebarLayout>
      <OrderDetailsContent
        orderId={params.order_id as string}
        handleRestockModalClose={handleRestockModalClose}
        handleRestockModalOpen={handleRestockModalOpen}
        handleChangeStatusModalClose={handleChangeStatusModalClose}
        handleChangeStatusModalOpen={handleChangeStatusModalOpen}
        handleRefundModalClose={handleRefundModalClose}
        handleRefundModalOpen={handleRefundModalOpen}
      />
    </SidebarLayout>
  );
};

export default OrderDetails;
