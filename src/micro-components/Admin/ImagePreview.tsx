import { useEffect, useState } from 'react';

import ImageWithRemove from './ImageWithRemoveIcon';

interface Props {
  file: File | null;
}

const ImagePreview = ({ file }: Props) => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);

  if (!preview) return null;
  return (
    <ImageWithRemove
      src={preview}
      alt="preview"
      handleRemove={() => setPreview(null)}
    />
  );
};

export default ImagePreview;
