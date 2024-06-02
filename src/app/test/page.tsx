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
      <div className="carousel rounded-box">
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Burger"
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
