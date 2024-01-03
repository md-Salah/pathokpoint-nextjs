import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
import { Card, CardContent, Typography, Link, CardOverflow } from "@mui/joy";

interface item {
  author: string;
  slug: string;
  src: string;
}

const Category = ({ item }: { item: item }) => {
  return (
    <Card
      sx={{
        width: {
          xs: "48%",
          sm: "25%",
          md: "18%",
          xl: "16%",
          // xs-90/2, sm-80/3, md-80/4, xl-80/5
        },
        boxShadow: "lg",
      }}
      className="overflow-clip aspect-square"
    >
      <CardOverflow className="bg-gray-600 min-h-24 overflow-clip">
        <Image
          src={item.src}
          alt={item.author}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </CardOverflow>

      <CardContent>
        {/* Title */}
        <Link
          href={`/category/${item.slug}`}
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
          target="_blank"
        >
          <Typography level="body-md" noWrap={true}>
            {item.author}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Category;
