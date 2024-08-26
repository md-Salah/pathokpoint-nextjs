import { useDispatch, useSelector } from 'react-redux';

import { AddItem, CartItem } from '@/components/Admin/Order/Common';
import { Book, CartItem as CartItemInterface } from '@/interface';
import {
    addItemToCart, handleDecrement, handleIncrement, removeItemFromCart
} from '@/redux/features/admin-cart-slice';
import { AppDispatch, RootState } from '@/redux/store';

const Items = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems } = useSelector((state: RootState) => state.adminCart);
  const handleSelectBook = (book: Book) => {
    dispatch(addItemToCart({ ...book, selectedQuantity: 1 }));
  };

  const handleInc = (id: string) => {
    dispatch(handleIncrement({ id }));
  };

  const handleDec = (id: string) => {
    dispatch(handleDecrement({ id }));
  };

  const handleRemove = (id: string) => {
    dispatch(removeItemFromCart({ id }));
  };

  return (
    <div className="admin-container lg:p-10 bg-white">
      <h1 className="text-lg sm:text-2xl font-medium">Create Order</h1>
      <div className="mt-4 flex justify-between items-baseline pb-1 border-b">
        <h4 className="text-base">Items</h4>
        <AddItem handleSelectBook={handleSelectBook} />
      </div>
      {cartItems.length > 0 ? (
        <table className="table table-px-0 border-t">
          <tbody>
            {cartItems.map((item: CartItemInterface) => (
              <CartItem
                key={item.id}
                book={item}
                handleIncrement={handleInc}
                handleDecrement={handleDec}
                handleRemove={handleRemove}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center py-12 text-black04">
          No item is selected
        </div>
      )}
    </div>
  );
};

export default Items;
