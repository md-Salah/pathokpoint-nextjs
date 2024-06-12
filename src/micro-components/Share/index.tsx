"use client";
import { useState } from "react";
import { IoMdShare } from "react-icons/io";

const ShareThisBook = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    let textWithUrl = `${text}\n\n${window.location.href}`;
    navigator.clipboard.writeText(textWithUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <button
      className="btn btn-sm bg-[#F1F2F4] border-none h-full w-full"
      onClick={copyToClipboard}
    >
      {copied ? (
        "Copied!"
      ) : (
        <IoMdShare className="inline-block w-full h-full" />
      )}
    </button>
  );
};

export default ShareThisBook;
