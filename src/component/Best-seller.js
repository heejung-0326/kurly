import React from 'react';
import '../css/product.css'
import dummy2 from '../data/product2.json'

function Best_seller(props) {
  return (
    <>
      <article className="product">
        <h3 className="title">💝가정의달 선물 베스트 셀러</h3>
        <p className="title_sub">정관장부터 설화수까지, ~76% 할인 중!</p>
        <ul className="product_list">
          {dummy2.products.map(product2=>(
            <li key={product2.id}>
              <img src={`${process.env.PUBLIC_URL}/images/${product2.filename}`} alt="" />
              <p>
                <span className="img_title2">{product2.title}</span>
              </p>
              <p className="before_price">{product2.before_price}</p>
              <p>
              <span className="sale1">{product2.sale}</span>
              <span className="price1">{product2.price}</span>
              </p>
            </li>
          ))}

        </ul>
      </article>
    </>
  );
}

export default Best_seller;