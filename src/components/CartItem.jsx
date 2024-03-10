import { XMarkIcon } from "@heroicons/react/24/outline";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, quantity, price }) => {
  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td className="py-4">
          <div className="flex items-center">
            <img className="h-16 w-16 mr-4" src={img} alt="Product image" />
            <span className="font-semibold">{title}</span>
          </div>
        </td>
        <td className="py-4"> {price} </td>
        <td className="py-4">
          <div className="flex items-center">
            <button
              onClick={() => {
                if (quantity === 1) {
                  dispatch(removeItem(id));
                  return;
                }
                dispatch(decrease({ id }));
              }}
              className="border rounded-md py-2 px-4 mr-2"
            >
              -
            </button>
            <span className="text-center w-8"> {quantity} </span>
            <button
              onClick={() => {
                dispatch(increase({ id }));
              }}
              className="border rounded-md py-2 px-4 ml-2"
            >
              +
            </button>
          </div>
        </td>
        <td className="py-4">Ksh. 19.99</td>
        <td>
          <XMarkIcon
            onClick={() => {
              dispatch(removeItem(id));
            }}
            className="h-6 w-6 cursor-pointer "
            aria-hidden="true"
          />
        </td>
      </tr>
    </>
  );
};

export default CartItem;
