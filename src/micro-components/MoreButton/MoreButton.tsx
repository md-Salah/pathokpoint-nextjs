import Link from "next/link";

const MoreButton = ({ href }: { href: string }) => {
  return (
    <div>
      <Link href={href}>
        <div className="badge badge-outline cursor-pointer hover:text-primary font-semibold p-3">
          more
        </div>
      </Link>
    </div>
  );
};

export default MoreButton;
