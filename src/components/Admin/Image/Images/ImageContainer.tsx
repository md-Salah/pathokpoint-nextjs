import Image from 'next/image';
import Link from 'next/link';

import { Image as ImgInterface } from '@/interface';

const ImageContainer = ({ img }: { img: ImgInterface }) => {
  return (
    <div className="w-40">
      <Link href={img.src} target="_blank">
        <figure className="relative group w-40 h-40 border rounded">
          <Image
            src={img.src}
            alt=""
            fill
            className="object-contain rounded group-hover:opacity-70 group-hover:cursor-pointer"
          />
        </figure>
      </Link>
      <h4 className="mt-2 text-black04 max-w-full text-center text-xs text-wrap break-words">
        {img.name}
      </h4>
    </div>
  );
};

export default ImageContainer;
