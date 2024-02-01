import Image from "next/image";
import Link from "next/link";

interface Props {
  author: {
    name: string;
    slug: string;
    src: string;
  };
}

const AuthorCard = ({ author }: Props) => {
  const Frame = () => (
    <figure className="relative mask mask-squircle w-full h-32 rounded-t-md bg-base-300">
      {author.src && (
        <Image
          src={author.src}
          alt={author.name[0]}
          fill
          className="object-cover object-bottom"
          loading="lazy"
          placeholder="blur"
          blurDataURL="/books/logo.png"
          sizes="(max-width: 768px) 33vw, 10vw"
        />
      )}
    </figure>
  );

  const Title = () => (
    <h1 className="card-title text-base truncate group-hover:underline">
      {author.name}
    </h1>
  );

  return (
    <div className="card w-full bg-base-200 shadow-sm rounded-md pt-4 group">
      <Link href={`authors/${author.slug}`}>
        <Frame />

        <div className="card-body p-3 gap-0.5 justify-between">
          <Title />
        </div>
      </Link>
    </div>
  );
};

export default AuthorCard;
