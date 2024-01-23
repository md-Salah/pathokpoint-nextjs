import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container mx-auto">
      <div className="hero mt-32">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-7xl font-bold">404</h1>
            <p className="py-6 text-3xl">Page Not Found</p>
            <Link href="/">
              <button className="btn mt-2 btn-primary uppercase">
                <BsArrowLeft className="inline-block" />
                Back to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
