import Image from 'next/image';
import { AiFillCloseCircle } from 'react-icons/ai';

interface Props {
  src: string;
  alt?: string;
  handleRemove: () => void;
}

const ImageWithRemoveIcon = ({ src, alt = "", handleRemove }: Props) => {
  return (
    <figure className="relative w-full h-full rounded">
      <Image
        src={src}
        alt={alt}
        className="w-full h-full rounded object-cover object-center"
        fill
      />
      <button
        className="btn btn-ghost btn-circle btn-xs absolute top-1 right-1"
        onClick={handleRemove}
      >
        <AiFillCloseCircle size="22" className="text-white" />
      </button>
    </figure>
  );
};

export default ImageWithRemoveIcon;
