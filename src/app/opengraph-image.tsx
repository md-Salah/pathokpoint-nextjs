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
//   const logoSrc = await fetch(new URL("./logo/logo.png", import.meta.url)).then(
//     (res) => res.arrayBuffer()
//   );
 const   logoSrc = '/logo/logo.png';

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 64,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          // @ts-ignore
          src={logoSrc}
          alt="Pathok Point Logo"
          style={{ width: 300, height: "auto", marginBottom: 20 }}
        />
        <h1>Kire mama</h1>
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
