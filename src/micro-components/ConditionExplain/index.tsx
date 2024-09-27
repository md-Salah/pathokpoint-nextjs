"use client";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { LiaInfoCircleSolid } from 'react-icons/lia';

import { social } from '@/constants';

const ConditionExplain = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const closeDropdown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, [isOpen]);

  return (
    <div>
      <LiaInfoCircleSolid
        tabIndex={0}
        role="button"
        className="ml-2 cursor-pointer btn btn-circle btn-ghost btn-xs"
        size="20"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div
          ref={ref}
          className="dropdown-content left-0 right-0 z-[1] bg-white shadow-lg"
        >
          <div className="w-full bg-white p-4 space-y-3 text-sm">
            <h3 className="font-semibold text-lg">
              About Our Condition Ratings
            </h3>
            <div className="">
              <h4 className="text-black02">New:</h4>
              <p className="font-bn text-black03">
                নতুন বই, বর্তমান এডিশন।
              </p>
            </div>
            <div>
              <h4 className="text-black02">OLD-Like New:</h4>
              <p className="font-bn text-black03">
                পুরাতন, প্রায় নতুন বলা যাবে।
              </p>
            </div>
            <div>
              <h4 className="text-black02">OLD-Good Enough:</h4>
              <p className="font-bn text-black03">
                পুরাতন, যথেষ্ট ভালো কন্ডিশন, বইয়ে দাগ থাকতে পারে তবে অনায়াসে পড়া
                যাবে।
              </p>
            </div>
            <div>
              <h4 className="text-black02">OLD-Readable:</h4>
              <p className="font-bn text-black03">
                পুরাতন, আগের এডিশন। বইটি পাঠযোগ্য।
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConditionExplain;
