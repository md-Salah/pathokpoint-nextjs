import Image from 'next/image';
import { ImageResponse } from 'next/og';

import { Book } from '@/interface';
import { getBookByPublicId } from '@/utils/api';

export const contentType = "image/png";

interface Props {
  params: {
    public_id: string;
  };
}

// Image generation
export default async function ImageGenerator({ params }: Props) {
  const book: Book = await getBookByPublicId(params.public_id);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "1200px",
          height: "630px",
          backgroundColor: "white",
        }}
      >
        {book.images.length > 0 ? (
          <Image 
          src={book.images[0].src} height="186" width="130" alt={book.name} />
        ) : (
          <div style={{ margin: "50px 25px" }}>
            <h1>{book.name}</h1>
            {book.short_description && <p>{book.short_description}</p>}
            {!book.short_description && book.authors.length > 0 && (
              <>by {book.authors.map((author) => author.name).join(", ")}</>
            )}
          </div>
        )}
      </div>
    )
  );
}
