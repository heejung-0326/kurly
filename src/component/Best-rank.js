import React from 'react';
import '../css/product.css'
import dummy3 from '../data/product3.json'

function Best_rank(props) {
  return (
    <>
      <article className="product">
        <h3 className="title">🏆실시간 인기 랭킹🏆</h3>
        <p className="title_sub">정관장부터 설화수까지, ~76% 할인 중!</p>
        <ul className="product_list3">
          {dummy3.products.map(product3=>(
            <li key={product3.id} className="product_item">
              <img src={`${process.env.PUBLIC_URL}/images/${product3.filename}`} alt="" className="main_img" />
              <img src={`${process.env.PUBLIC_URL}/images/badge.png`} alt="" className="badge" />
              <div className="bottom_box">
                <div className="left_box">
                <p>{product3.id}</p>
                </div>

                <div className="right_box">
                <p>
                  <span className="img_title3">{product3.title}</span>
                </p>
                <p className="before_price">{product3.before_price}</p>
                <p>
                <span className="sale1">{product3.sale}</span>
                <span className="price1">{product3.price}</span>
                </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}

export default Best_rank