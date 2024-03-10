import { XMarkIcon } from "@heroicons/react/24/outline";

const CartItem = () => {
  return (
    <>
      <tr>
        <td className="py-4">
          <div className="flex items-center">
            <img
              className="h-16 w-16 mr-4"
              src="https://via.placeholder.com/150"
              alt="Product image"
            />
            <span className="font-semibold">Product name</span>
          </div>
        </td>
        <td className="py-4">Ksh. 19.99</td>
        <td className="py-4">
          <div className="flex items-center">
            <button className="border rounded-md py-2 px-4 mr-2">-</button>
            <span className="text-center w-8">1</span>
            <button className="border rounded-md py-2 px-4 ml-2">+</button>
          </div>
        </td>
        <td className="py-4">Ksh. 19.99</td>
        <td>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </td>
      </tr>
    </>
  );
};

export default CartItem;
