import Image from "next/image";
import { Card, CardOverflow } from "@mui/joy";

interface item {
  dp: string;
  author: string;
  date: string;
  src: string;
  description: string;
}

const Review = ({ item }: { item: item }) => {
  return (
    <Card
      sx={{
        width: {
          xs: "250px",
          // sm: "40%",
          // md: "27%",
          // xl: "20%",
          // xs-90/2, sm-80/3, md-80/4, lg-80/5
        },
        boxShadow: "lg",
      }}
    >
      <div className="h-64 w-full overflow-clip">
        <Image
          src={item.src}
          alt={item.src}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "top", borderRadius: "8px" }}
        />
      </div>
    </Card>
  );
};

export default Review;
