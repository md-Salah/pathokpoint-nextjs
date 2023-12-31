import { Box, Divider } from "@mui/joy";
import { Categories, HeroSection, ReviewCarousel, Slider } from "./components";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
          },
          marginX: "auto",
        }}
      >
        <HeroSection />
        <Slider title="ইসলামিক কালেকশন" />
        <Slider title="Bangla OLD" />
        <Slider title="Imported English Books" />

        <Categories title={'Popular Authors'} />
        <Categories title={'Popular Genres'} />

        <ReviewCarousel />
      </Box>
    </div>
  );
}
