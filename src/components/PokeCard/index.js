import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { useCart } from '../../hooks/cart';

import { Card, CardImg, Info, AddButton } from './styles'

export default function PokeCard({name, price, imgUrl}) {
  const [img, setImg] = useState('');

  const { addToCart } = useCart();

  function handleAddToCart(name, price, img) {
    const pokemon = {name, price, img}
    addToCart(pokemon);
  }

  useEffect(()=> {
    async function getImg(url){
      const response = await axios.get(url);
      setImg(response.data.sprites.front_default);
    }

    getImg(imgUrl)
  }, [img, imgUrl])
  var Name2 = name[0].toUpperCase() + name.slice(1)
  return (
    <Card>
      <CardImg src={img}/>
      <Info>
        
        <p>{Name2}</p>
        <br/>
        <p>Preço: R${price},00</p>
        <br/>
        <AddButton 
          onClick={() => handleAddToCart(name, price)}
          bgcolor={window.location.pathname === '/grass' ? "#78C850" : "#EA477f"}
        >Adicionar ao carrinho</AddButton>
      </Info>
    </Card>
  )
}
