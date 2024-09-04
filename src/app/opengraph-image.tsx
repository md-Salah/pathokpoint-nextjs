import { ImageResponse } from 'next/og';

export const runtime = "edge";

export const contentType = "image/png";

function arrayBufferToDataUrl(buffer: ArrayBuffer, mimeType: string): string {
    const uint8Array = new Uint8Array(buffer);
    const base64 = Buffer.from(uint8Array).toString('base64');
    return `data:${mimeType};base64,${base64}`;
  }

// Image generation
export default async function Image() {
    const res = await fetch(new URL('./logo.png', import.meta.url));
    const buffer = await res.arrayBuffer();
    const dataUrl = arrayBufferToDataUrl(buffer, 'image/png');


  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '1200px',
          height: '630px',
          backgroundColor: 'white',
        }}
      >
        <img src={dataUrl} width="1100"  alt='' />
      </div>
    )
  );
}
