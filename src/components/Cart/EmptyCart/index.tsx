import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';

const EmptyCart = () => (
  <div className="my-20 flex flex-col items-center">
    <h4 className="text-center font-bold text-xl">Empty cart!</h4>
    <h6 className="text-center text-xs mt-2">
      add items on the cart before you proceed to checkout
    </h6>
    <Link href="/" className="mt-4 btn btn-primary">
      <BsArrowLeft className="inline-block" />
      RETURN TO HOME
    </Link>
  </div>
);

export default EmptyCart;
