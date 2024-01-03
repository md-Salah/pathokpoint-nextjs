"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

const HeroSection = () => {
  const images = ["/banner (1).png", "/banner (2).png", "/banner (3).png"];

  return (
    <div className="mt-6">
      <Carousel>
        {images.map((image, index) => (
          <Box key={index} className="w-full relative" sx={{
            height: {
              xs: "120px",
              sm: "202px",
              md: "240px",
              lg: "343px",
            }
          }}
          >
            <Image
              src={image}
              alt="Banner"
              fill={true}
              style={{ objectFit: "cover", objectPosition: "top", borderRadius: "8px" }}
            />
          </Box>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
