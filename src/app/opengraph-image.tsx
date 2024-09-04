import { ImageResponse } from 'next/og';

import { defaultSrc } from '@/constants';

export const runtime = 'edge';

// Image metadata
export const alt = 'Pathok Point';
export const size = {
  width: 1200,
  height: 630,
};


export const contentType = 'image/png';

// Image generation
export default async function Image() {
  // Load the font
//   const interSemiBold = fetch(
//     new URL('./Inter-SemiBold.ttf', import.meta.url)
//   ).then((res) => res.arrayBuffer());

//   // Load the logo
//   const logo = fetch(
//     new URL(defaultSrc.logo, import.meta.url) // Replace with the correct path to your logo file
//   ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 64,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Logo */}
        <img
          src={defaultSrc.logo}
          alt="Pathok Point Logo"
          style={{ width: 300, height: 'auto', marginBottom: 20 }}
        />
        {/* Text */}
        <div>Pathok Point</div>
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
