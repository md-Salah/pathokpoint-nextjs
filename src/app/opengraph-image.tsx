import { ImageResponse } from 'next/og';

export const runtime = "edge";

// Image metadata
export const alt = "Pathok Point";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  const logoSrc = await fetch(new URL("./logo.png", import.meta.url)).then(
    (res) => res.arrayBuffer()
  );

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
        <img src={logoSrc} height="100" />
      </div>
    ),
    {
      ...size,
      //   fonts: [
      //     {
      //       name: 'Inter',
      //       data: await interSemiBold,
      //       style: 'normal',
      //       weight: 600, // Set weight to match "SemiBold"
      //     },
      //   ],
    }
  );
}
