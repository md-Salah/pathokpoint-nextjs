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
    <figure className="relative w-full h-32 rounded-t-md bg-gray-200">
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover object-bottom"
        loading="lazy"
        placeholder="blur"
        blurDataURL="/books/logo.png"
        sizes="50vw"
      />
    </figure>
  );

  const Title = () => (
    <h1 className="card-title text-base group-hover:underline flex-1 truncate">
      {category.name}
    </h1>
  );

  return (
    <div className="card w-full bg-white shadow-sm rounded-md group">
      <Link href={`categories/${category.slug}`}>
        <Frame />

        <div className="card-body p-3 gap-0.5 justify-between">
          <Title />
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
