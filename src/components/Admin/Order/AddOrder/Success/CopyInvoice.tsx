"use client";
import { useState } from 'react';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { VscCopy } from 'react-icons/vsc';

const CopyInvoice = ({ invoice }: { invoice: string }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("Invoice#" + invoice);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <button>
      {copied ? (
        <IoCheckmarkOutline className="text-black04" size="16" />
      ) : (
        <VscCopy className="text-black04" size="16" onClick={copyToClipboard} />
      )}
    </button>
  );
};

export default CopyInvoice;
