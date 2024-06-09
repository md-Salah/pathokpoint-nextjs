import Link from "next/link";
import { CartIcon } from "@/micro-components";

const Cart = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm sm:btn-md">
        <div className="indicator">
          <CartIcon />
          <span className="indicator-item rounded-full bg-highlight text-white px-1 font-bn text-xs">
            6
          </span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Link href="/cart" className="btn btn-primary btn-block">
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
