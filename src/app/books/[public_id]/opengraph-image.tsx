import { ImageResponse } from 'next/og';

import { Book } from '@/interface';
import axiosInstance, { fetcher } from '@/utils/axiosConfig';

export const runtime = "edge";

export const contentType = "image/png";

function arrayBufferToDataUrl(buffer: ArrayBuffer, mimeType: string): string {
  const uint8Array = new Uint8Array(buffer);
  const base64 = Buffer.from(uint8Array).toString("base64");
  return `data:${mimeType};base64,${base64}`;
}

interface Props {
  params: {
    public_id: string;
  };
}

// Image generation
export default async function Image({ params }: Props) {
  // const res = await fetch(new URL('./opengraph.png', import.meta.url));
  // const buffer = await res.arrayBuffer();
  // const dataUrl = arrayBufferToDataUrl(buffer, 'image/png');

  const book: Book = await fetcher(`/book/public_id/${params.public_id}`);

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
        <img src={book.images[0].src} width="1050" alt="" />
      </div>
    )
  );
}
