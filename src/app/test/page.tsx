// "use client";


// import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
// import { addItemToCart } from "@/redux/features/cart-slice";

// const Test = () => {
//   const dispatch = useAppDispatch();
//   const { cartItems } = useAppSelector((state) => state.cart);

//   return (
//     <div>
//       <div>
//         {cartItems.map((item) => (
//           <div key={item.id}>
//             <p>{item.name}</p>
//             <p>{item.price}</p>
//             <p>{item.quantity}</p>
//           </div>
//         ))}
//       </div>

//       <p
//         onClick={() =>
//           dispatch(
//             addItemToCart({ id: "1", name: "lal", price: 120, quantity: 1 })
//           )
//         }
//       >
//         Test
//       </p>
//     </div>
//   );
// };

// export default Test;

const Test = () => {
  return (
    <div className="p-4">
      lal
    </div>
  );
};

export default Test;
