import { useState } from 'react';

import Modal from '@/components/Modal';
import { isEnglish } from '@/utils';

interface NameSlug {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  modalRef: React.RefObject<HTMLDialogElement>;
  handleAddNew: (data: NameSlug) => void;
  err: string | null;
  loading: boolean;
}

const AddNewModal = ({ modalRef, handleAddNew, err, loading }: Props) => {
  const [data, setData] = useState<NameSlug>({
    id: "",
    name: "",
    slug: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Modal modalRef={modalRef}>
      <div className="grid gap-2 mb-2">
        <div className="relative">
          <label className="label-2">Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className={`input input-bordered w-full ${
              !isEnglish(data.name) && "font-bn"
            }`}
          />
          <span className="absolute bottom-0 right-1 text-xxs">
            {data.name.length}/100
          </span>
        </div>
        <div className="relative">
          <label className="label-2">Slug</label>
          <input
            type="text"
            name="slug"
            value={data.slug}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <span className="absolute bottom-0 right-1 text-xxs">
            {data.slug.length}/100
          </span>
        </div>
        {err && <p className="mt-4 text-error">{err}</p>}
        <button
          className="mt-4 btn btn-primary"
          disabled={loading}
          onClick={() => handleAddNew(data)}
        >
          {loading && <p className="loading loading-spinner"></p>}
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default AddNewModal;
