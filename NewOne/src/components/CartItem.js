import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../Context/Cart_Context';
import FormatPrice from '../Helpers/FormatPrice';
import CartAmountToggle from './CartAmountToggle';

const CartItem = ({id, name, image, price, amount}) => {
    const { removeItem }= useCartContext();

    const setDecrease = () => {
        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
      };
    
      const setIncrease = () => {
        // amount < quantity ? setAmount(amount + 1) : setAmount(quantity);
      };

  return <div className='cart_heading grid grid-five-column'>
    <div className="cart-image--name">
        <div>
            <figure>
                <img src={image} alt={id} />
            </figure>
        </div>
        <p>{name}</p>
    </div>
    {/* price */}
    <div className="cart-hide">
        <p> 
            <FormatPrice price={price}/>
        </p>
    </div>
    {/* Quantity */}
    <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />

      {/* subtotal */}
      <div className="cart-hide">
        <p>
            <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash className='remove_icon' onClick={()=>removeItem(id)}/>
      </div>


  </div>
  
}

export default CartItem