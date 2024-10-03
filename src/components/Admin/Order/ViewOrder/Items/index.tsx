import { useState } from 'react';

import { AddItem, CartItem } from '@/components/Admin/Order/Common';
import { useToken } from '@/hooks';
import { Book, CartItem as CartItemInterface, OrderItem } from '@/interface';
import axiosInstance, { extractAxiosErr, fetcher } from '@/utils/axiosConfig';

import ItemInMobile from './ItemInMobile';
import ItemsInPC from './ItemsInPC';

interface Props {
  order_id: string;
  order_items: OrderItem[];
  refresh: () => void;
}

const Items = (props: Props) => {
  const { order_id, order_items, refresh } = props;
  const { token } = useToken();

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editBtnLoading, setEditBtnLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");
  const [updateBtnLoading, setUpdateBtnLoading] = useState<boolean>(false);
  const [newItems, setNewItems] = useState<CartItemInterface[]>([]);

  const handleSelectBook = (book: Book) => {
    const item = newItems.find((item) => item.id === book.id);
    if (item) {
      item.selectedQuantity += 1;
      setNewItems([...newItems]);
    } else {
      setNewItems([...newItems, { ...book, selectedQuantity: 1 }]);
    }
  };

  const handleIncrement = (id: string) => {
    const item = newItems.find((item) => item.id === id);
    if (item && item.selectedQuantity < item.quantity) {
      item.selectedQuantity += 1;
      setNewItems([...newItems]);
    }
  };

  const handleDecrement = (id: string) => {
    const item = newItems.find((item) => item.id === id);
    if (item) {
      if (item.selectedQuantity === 1) {
        setNewItems(newItems.filter((item) => item.id !== id));
      } else {
        item.selectedQuantity -= 1;
        setNewItems([...newItems]);
      }
    }
  };

  const handleRemove = (id: string) => {
    setNewItems(newItems.filter((item) => item.id !== id));
  };

  const handleEdit = async () => {
    const ids = order_items.map((item) => item.book.id);
    try {
      setEditBtnLoading(true);
      const books = await fetcher(
        `/book/all?id__in=${ids.join(",")}&per_page=100`
      );
      setNewItems(
        order_items.map((item: OrderItem) => {
          const book = books.find((book: Book) => book.id === item.book.id);
          if (!book)
            setErr(`Book not found with public_id ${item.book.public_id}`);
          return {
            ...book,
            selectedQuantity: item.quantity,
          };
        })
      );
      setIsEdit(true);
    } catch (error) {
      console.log(error);
    } finally {
      setEditBtnLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEdit(false);
    setNewItems([]);
  };

  const handleUpdate = async () => {
    setErr("");
    setUpdateBtnLoading(true);
    try {
      const payload = newItems.map((item) => ({
        book_id: item.id,
        quantity: item.selectedQuantity,
      }));
      const res = await axiosInstance.patch(
        `/order/${order_id}`,
        {
          order_items: payload,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      refresh();
      setIsEdit(false);
      setNewItems([]);
    } catch (error) {
      setErr(extractAxiosErr(error));
      console.log(error);
    } finally {
      setUpdateBtnLoading(false);
    }
  };

  return (
    <div>
      <div className="mt-8">
        <div className="flex justify-between items-baseline mt-4">
          <h1 className="text-lg font-medium">Order Items</h1>
          {isEdit ? (
            <AddItem handleSelectBook={handleSelectBook} />
          ) : (
            <button
              onClick={handleEdit}
              className="btn btn-sm btn-primary btn-outline w-24"
            >
              {editBtnLoading && (
                <div className="loading loading-spinner"></div>
              )}
              Edit
            </button>
          )}
        </div>
        {isEdit ? (
          <div className="my-2 min-h-36">
            <table className="table table-px-0 border-t">
              <tbody>
                {newItems.map((item: CartItemInterface) => (
                  <CartItem
                    key={item.id}
                    book={item}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    handleRemove={handleRemove}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <>
            <div className="lg:hidden">
              {order_items.map((item: OrderItem) => (
                <ItemInMobile key={item.book.id} item={item} />
              ))}
            </div>
            <div className="hidden lg:block">
              <ItemsInPC order_items={order_items} />
            </div>
          </>
        )}
      </div>
      {isEdit && (
        <div className="mt-4">
          {err && <p className="mb-2 text-center text-highlight">{err}</p>}
          <div className="flex items-center gap-4 justify-center">
            <button
              className="btn btn-primary w-36"
              disabled={updateBtnLoading}
              onClick={handleUpdate}
            >
              {updateBtnLoading && (
                <div className="loading loading-spinner"></div>
              )}
              Update
            </button>
            <button
              className="btn btn-error btn-outline w-36"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Items;
