import React, { useContext } from 'react';
//icons
import { IoClose } from 'react-icons/io5';
//context
import { CartContext } from '../context/CartContext';
//components
import CartItem from './CartItem';

const Cart = () => {

  const { setIsOpen, cart } = useContext(CartContext);

  return (
    <div className='w-ful h-full px-4 text-white'>
      <div>
        <div onClick={() => setIsOpen(false)} className='text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer'>
          <IoClose />
        </div>
        <div>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
