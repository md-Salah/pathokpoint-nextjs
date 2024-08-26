import { GoKebabHorizontal } from 'react-icons/go';

const Menu = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-sm btn-circle"
      >
        <GoKebabHorizontal
          color="#363739"
          size={18}
          className="text-center rotate-90"
        />
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-44"
      >
        <li>
          <span>Send Invoice</span>
        </li>
        <li>
          <span>Print Invoice</span>
        </li>
        <li>
          <span>Delete Order</span>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
