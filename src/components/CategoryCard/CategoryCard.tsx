import Image from "next/image";
import Link from "next/link";

interface Props {
  category: {
    id: string;
    name: string;
    description: string;
    banglish_name: string;
    slug: string;
    hidden: boolean;
    image: string;
    banner: string;
  };
}

const CategoryCard = ({ category }: Props) => {
  const Frame = () => (
    <Link href={`categories/${category.slug}`}>
      <figure className="relative w-full h-32 rounded-t-md bg-gray-200">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover object-bottom"
          loading="lazy"
          placeholder="blur"
          blurDataURL="/books/logo.png"
        />
      </figure>
    </Link>
  );

  const Title = () => (
    <Link href={`categories/${category.slug}`}>
      <h1 className="card-title text-base hover:underline flex-1 truncate">
        {category.name}
      </h1>
    </Link>
  );

  return (
    <div className="card w-full bg-white shadow-sm rounded-md">
      <Frame />

      <div className="card-body p-3 gap-0.5 justify-between">
        <Title />
      </div>
    </div>
  );
};

export default CategoryCard;
