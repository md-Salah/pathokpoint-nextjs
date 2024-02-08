"use client";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const CopyToClipboard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <div className="flex">
      {copied ? (
        <span className="text-secondary-content">Copied!</span>
      ) : (
        <div className="tooltip" data-tip="Copy">
          <FaRegCopy className="text-xl cursor-pointer" onClick={copy} />
        </div>
      )}
    </div>
  );
};

export default CopyToClipboard;
