import { useEffect, useRef, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import { ImageWithRemoveIcon } from '@/micro-components/Admin';

interface Props {
  helperText?: string;
  setFiles: (files: File[]) => void;
  handleTouched?: () => void;
  success?: boolean;
  aspectRatio: string;
  widthClass: string;
}

const FileUpload = ({
  helperText,
  setFiles,
  handleTouched,
  success,
  aspectRatio,
  widthClass,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<{ file: File; preview: string }[]>(
    []
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);

    if (selectedFiles.length) {
      const newPreviews = selectedFiles.map((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise<{ file: File; preview: string }>((resolve) => {
          reader.onloadend = () => {
            resolve({ file, preview: reader.result as string });
          };
        });
      });

      Promise.all(newPreviews).then((filesWithPreviews) => {
        setPreviews((prev) => [...prev, ...filesWithPreviews]);
        setFiles([...previews.map((p) => p.file), ...selectedFiles]); // Update files in parent component
        if (handleTouched) handleTouched();
      });
    }
  };

  const handleRemove = (index: number) => {
    const updatedPreviews = previews.filter((_, i) => i !== index);
    setPreviews(updatedPreviews);
    setFiles(updatedPreviews.map((p) => p.file));
  };

  useEffect(() => {
    if (success) {
      setPreviews([]);
    }
  }, [success]);

  return (
    <>
      {previews.length > 0 &&
        previews.map((item, index) => (
          <div
            key={index}
            className={widthClass}
            style={{
              aspectRatio: aspectRatio,
            }}
          >
            <ImageWithRemoveIcon
              src={item.preview}
              alt={`Preview ${index}`}
              handleRemove={() => handleRemove(index)}
            />
          </div>
        ))}

      <div
        className={`${widthClass} relative`}
        style={{
          aspectRatio: aspectRatio,
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          className="h-full w-full btn bg-[#F6F6F6]"
          onClick={() => inputRef.current?.click()}
        >
          <FiPlusCircle size="20" className="text-black04" />
        </button>
        {helperText && (
          <p className="text-sm text-black04 mt-2 absolute">{helperText}</p>
        )}
      </div>
    </>
  );
};

export default FileUpload;
