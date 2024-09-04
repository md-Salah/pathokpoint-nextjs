import { ImageResponse } from 'next/og';

import { Book } from '@/interface';
import { getBookByPublicId } from '@/utils/api';
import { fetcher } from '@/utils/axiosConfig';

export const runtime = "edge";

export const contentType = "image/png";

interface Props {
  params: {
    public_id: string;
  };
}

// Image generation
export default async function Image({ params }: Props) {
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
          <img src={book.images[0].src} height="550px" alt={book.name} />
        ) : (
          <div style={{margin: "50px 25px"}}>
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
