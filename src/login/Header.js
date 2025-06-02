import React from 'react';
import '../css/kully.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faHeart, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <>
  <header>
    <div className="h_top">
      <div className="info">
        <ul className="top">
          <li>회원가입</li>
          <li><span>&nbsp;</span></li>
          <li><Link to='/LoginIndex' title="">로그인</Link></li>
          <li><span>&nbsp;</span></li>
          <li>고객센터</li>
        </ul>
      </div>
      <h2 className="logo">
        <Link to='/' title="">
        <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="로고" />
        </Link>
      </h2>
      <ul className="cate_list">
        <li>마켓컬리</li>
        <li><span>&nbsp;</span></li>
        <li>뷰티컬리</li>
        </ul>
        
      <div>
      <button type="text" className="search">검색어를 입력하세요</button>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '20px', marginLeft: '10px', color:'#680568', transform: 'translate(250px,-25px)' }} />
      </div>
      
      <div className="icom_group" >
        <ul className="icons">
          <li>
            <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: '30px', color:'#680568'}} />
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} style={{ fontSize: '30px', color:'#680568'}} />
          </li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '30px', color:'#680568'}} />
          </li>
        </ul>
      </div>
    </div>
    
    <div className="h_bottom">
      <nav>
        <ul className="bottom_cate">
          <li><FontAwesomeIcon icon={faBars} style={{ fontSize: '20px', paddingRight: '10px', transform: 'translateY(3px)' }} />카테고리</li>
          <li><Link to='/new' title="">신상품</Link></li>
          <li><Link to='/best' title="">베스트</Link></li>
          <li><Link to='/shopping' title="">알뜰쇼핑</Link></li>
          <li>특가/혜택</li>
        </ul>
      </nav>
    </div>
  </header>
  <hr />


    </>
  );
}

export default Header;