"use client";
import { useState } from "react";
import { IoMdShare } from "react-icons/io";

const ShareThisBook = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    let textWithUrl = `${text}\n\n${window.location.href}`;
    navigator.clipboard.writeText(textWithUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <button className="hover:text-primary cursor-pointer" onClick={copy}>
      <IoMdShare className="inline-block h-5 w-5" />
      <span className="ml-1">{copied ? "Link Copied!" : "Share This Book"}</span>
    </button>
  );
};

export default ShareThisBook;
