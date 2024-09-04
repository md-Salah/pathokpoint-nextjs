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
    
    // Convert ArrayBuffer to Data URL
    const dataUrl = arrayBufferToDataUrl(buffer, 'image/png');

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={dataUrl} height="630" width="1200"  alt='' />
      </div>
    )
  );
}
