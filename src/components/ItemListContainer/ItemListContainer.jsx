import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='container'><h2 className='p-10'>{greeting}</h2><ItemCount parrafo={"Sur es el primer gin inspirado en la Patagonia, en sus bosques, sus lagos, sus más finos botánicos."} texto="Gin- Sur" stockItem="10" inicialContador="1"/></div>
  )
}

export default ItemListContainer