import React from 'react';
import '../css/product.css'
import dummy1 from '../data/product1.json'

function Family_food(props) {
  return (
    <>
      <article className="product">
        <h3 className="title">🍗간편하게 준비하는 가족 밥상</h3>
        <p className="title_sub">아이부터 어른까지 남녀노소 취향 저격!</p>
        <ul className="product_list">
          {dummy1.products.map(product1=>(
            <li key={product1.id}>
              <img src={`${process.env.PUBLIC_URL}/images/${product1.filename}`} alt="" />
              <p>
                <span className="img_title">{product1.title}</span>
              </p>
              <p className="before_price">{product1.before_price}</p>
              <p>
              <span className="sale1">{product1.sale}</span>
              <span className="price1">{product1.price}</span>
              </p>
            </li>
          ))}

        </ul>
      </article>
    </>
  );
}

export default Family_food;