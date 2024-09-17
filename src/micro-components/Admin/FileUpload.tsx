import { useEffect, useRef, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import { ImageWithRemoveIcon } from '@/micro-components/Admin';

interface Props {
  helperText?: string;
  setFile: (file: File | null) => void;
  handleTouched?: () => void;
}

const FileUpload = ({ helperText, setFile, handleTouched }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      if (handleTouched) handleTouched();
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    setFile(null);
  };

  return (
    <>
      {preview ? (
        <ImageWithRemoveIcon
          src={preview}
          alt="Preview"
          handleRemove={handleRemove}
        />
      ) : (
        <>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            className="h-full w-full bg-[#F6F6F6] btn"
            onClick={() => inputRef.current?.click()}
          >
            <FiPlusCircle size="20" className="text-black04" />
          </button>
          {helperText && (
            <p className="text-sm text-black04 mt-2">{helperText}</p>
          )}
        </>
      )}
    </>
  );
};

export default FileUpload;
