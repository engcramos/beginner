import React, { useCallback, useMemo } from 'react'
import Swal from 'sweetalert2'

import { useCart } from '../../hooks/cart';

import { CartContainer, CartHeader, Finish, Cart, CartItem, Total, CartImg } from './styles'

export default function CartComponent({minwidth, children}) {
  const { increment, decrement, pokemon, setEmpty } = useCart();
  
  const filteredPokemon = pokemon.filter(element => element.type === window.location.pathname);

  const cartTotal = useMemo(() => {
    const totalArray = filteredPokemon.map(
      element => element.price
    );

    let total = 0;
    if (totalArray.length > 0) {
      total = totalArray.reduce((a, b) => a + b);
    }

    if (total > 0) {
      return total;
    }
    return 0;
  }, [filteredPokemon]);

  const handleFinish = useCallback(()=> {
    Swal.fire({
      title: 'Parabens',
      text: `Compra realizada`,
      icon: 'success',
      confirmButtonText: 'OK'
    })

    setEmpty();
  },[cartTotal, setEmpty])

  return (
    <CartContainer minwidth={minwidth}>
      <>{children}</>
      <CartHeader>
        Carrinho
      </CartHeader>
      <Cart>
        {filteredPokemon.map( element => (
          <CartItem 
            key={`${element.name}-${element.quantity}-${element.price}-${element.img}`}
              
          >
            <CartImg src='https://image.flaticon.com/icons/svg/188/188918.svg'/>
            <p>
              {element.name}  
            </p>
            
            <p>
            R${element.price},00
            </p>
          </CartItem>
        ))}
      </Cart>
      { cartTotal > 0 
        ? <Total><p>Total</p><p>R${cartTotal},00</p></Total>
        : null
      }
      <Finish 
        onClick={handleFinish}
        
      >
        Finalizar
      </Finish>
    </CartContainer>
  )
}
