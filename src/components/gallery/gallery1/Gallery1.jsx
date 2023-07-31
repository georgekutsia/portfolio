import React from 'react'
import "./Gallery1"
function Gallery1({ products, setProducts }) {
  const addToCart = (index) => {
    const copyData = [...products]
    copyData[index].count+=1
    setProducts(copyData)
  };
  return (
    <div className="gallery1">
      {products.map((item, index) => (
        <div className="gallArray-each" key={index}>
          <h3>{item.name}</h3>
          <img src={item.img} alt={`${item.description}`} width={200} />
          <p>{item.count}</p>
          <button onClick={()=>addToCart(index)}>Añadir</button>
        </div>
      ))}
    </div>
  );
}

export default Gallery1