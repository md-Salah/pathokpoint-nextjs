import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
import {
  Card,
  CardContent,
  Typography,
  Link,
  Chip,
  CardOverflow,
} from "@mui/joy";

interface item {
  name: string;
  author: string;
  regular_price: number;
  sell_price: number;
  src: string;
  stock: number;
  condition: string;
  slug: string;
}

const BookCard = ({ item }: { item: item }) => {
  return (
    <Card
      sx={{
        minWidth: {
          xs: "48%",
          sm: "25%",
          md: "18%",
          xl: "16%",
          // xs-90/2, sm-80/3, md-80/4, xl-80/5
        },
        boxShadow: "lg",
      }}
      className="overflow-clip"
    >
      <CardOverflow className="bg-gray-600 h-64 overflow-clip">
        <Image
          src={item.src}
          alt={item.src}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </CardOverflow>

      <CardContent>
        {/* Author */}
        <Typography level="body-xs" noWrap={true}>
          {item.author}
        </Typography>

        {/* Title */}
        <Link
          href={`/books/${item.slug}`}
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          // endDecorator={<ArrowOutwardIcon />}
          target="_blank"
        >
          <Typography level="body-md" noWrap={true}>
            {item.name}
          </Typography>
        </Link>

        <Chip component="span" size="sm" variant="soft" color="success">
          {item.condition}
        </Chip>

        {/* Price */}
        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl", color: "#ff8200" }}
        >
          <b>{item.sell_price}</b>
          <b className="ml-1 font-extrabold">৳</b>
          <Typography level="body-xs" className="ml-2">
            <del>{item.regular_price} ৳</del>
          </Typography>
        </Typography>
        
      </CardContent>
    </Card>
  );
};

export default BookCard;
