import { Box } from "@mui/material";
import Image from "next/image";

const BookImage = ({ src }: { src: string }) => {
  return (
    <Box
      className="w-full relative"
      sx={{
        height: {
          xs: "140px",
          sm: "230px",
          md: "300px",
          lg: "430px",
        },
      }}
    >
      <Image src={src} alt="Banner" layout="fill" objectFit="contain" />
    </Box>
  );
};

export default BookImage;
