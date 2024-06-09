import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const Cart = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle btn-sm sm:btn-md text-black02 hover:bg-primary hover:text-white"
      >
        <div className="indicator">
          <CiShoppingCart className="w-7 h-7" />
          <span className="indicator-item rounded-full bg-highlight text-white px-1 font-bn text-xs">
            6
          </span>
        </div>
      </div>

      {/* Dropdown content */}
      <div
        tabIndex={0}
        className="card card-compact dropdown-content w-52 bg-white shadow mt-1"
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
