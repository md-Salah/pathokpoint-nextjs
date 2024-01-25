import Link from "next/link";

interface Props {
  title: string;
}

const Title = ({title}:Props) => {
  return (
    <div className="flex items-center">
      <h1 className="text-3xl font-semibold flex-1">{title}</h1>
      <Link href="/books">
        <div className="badge badge-outline badge-secondary cursor-pointer font-semibold primary-style p-3">
          more
        </div>
      </Link>
    </div>
  );
};

export default Title;
