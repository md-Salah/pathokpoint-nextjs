"use client";
import { useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { Book } from '@/interface';

import Search from './Search';

interface Props {
  handleSelectBook: (book: Book) => void;
}

const AddItem = ({ handleSelectBook }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  const handleSelect = (book: Book) => {
    ref.current?.close();
    handleSelectBook(book);
  };

  return (
    <>
      <button
        className="btn btn-outline btn-sm btn-primary"
        onClick={() => ref.current?.showModal()}
      >
        <AiOutlinePlus className="inline-block" />
        Add Item
      </button>
      <dialog className="modal" ref={ref}>
        <div className="modal-box bg-white">
          <Search handleSelectBook={handleSelect} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AddItem;
