import React from 'react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import item1 from '../images/item1.jpg';
import item2 from '../images/item2.jpg';
import item3 from '../images/item3.jpg';
import item4 from '../images/item4.jpg';
import pick from '../images/pick.png';


function Main(props) {
  return (
    <>
          <article>
          <h2>이미지 슬라이드</h2>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{delay:3000}}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className="slide"><img src={`${process.env.PUBLIC_URL}/images/slide1.png`} alt="배너1" /></SwiperSlide>
            <SwiperSlide className="slide"><img src={`${process.env.PUBLIC_URL}/images/slide2.jpg`} alt="배너2" /></SwiperSlide>
            <SwiperSlide className="slide"><img src={`${process.env.PUBLIC_URL}/images/slide3.png`} alt="배너3" /></SwiperSlide>
            <SwiperSlide className="slide"><img src={`${process.env.PUBLIC_URL}/images/slide4.png`} alt="배너4" /></SwiperSlide>
          </Swiper>
        </article>

      <h3 className="md_title">MD의 추천</h3>
      <ul className="category">
        <li className="active"><button>채소</button></li>
        <li><button>과일·견과·쌀</button></li>
        <li><button>수산·해산·건어물</button></li>
        <li><button>정육·계란</button></li>
        <li><button>국·반찬·메인요리</button></li>
        <li><button>샐러드·간편식</button></li>
        <li><button>면·양념·오일</button></li>
      </ul>

      <ul className="category">
        <li><button>생수·음료·우유·커피</button></li>
        <li><button>간식·과자·떡</button></li>
        <li><button>베이커리·치즈·델리</button></li>
        <li><button>건강식품</button></li>
        <li><button>와인</button></li>
        <li><button>전통주</button></li>
        <li><button>생활용품·리빙·캠핑</button></li>
      </ul>

      <ul className="category">
        <li><button>스킨케어·메이크업</button></li>
        <li><button>헤어·바디·구강</button></li>
        <li><button>주방용품</button></li>
        <li><button>가전제품</button></li>
        <li><button>선물하기</button></li>
        <li><button>반려동물</button></li>
        <li><button>베이비·키드·완구</button></li>
      </ul>

      <ul className="img_list">
        <li>
          <button>
            <img src={item1} alt="상품1" />
            <img src={pick} alt="pick" />
          </button>
        </li>

        <li>
          <button>
            <img src={item2} alt="상품2" />
            <img src={pick} alt="pick" />
          </button>
        </li>

        <li>
          <button>
            <img src={item3} alt="상품3" />
            <img src={pick} alt="pick" />
          </button>
        </li>

        <li>
          <button>
            <img src={item4} alt="상품4" />
            <img src={pick} alt="pick" />
          </button>
        </li>
      </ul>

      <ul className="txt_list">
        <li>
          <div>
            <button>
            <p>[골라담기] 인기 국탕찌개 12종 균일가(택2)</p>
            <p className="delete_price">7,500원</p>
            <p className="sale0">20% &nbsp;<span className="price0">6,000원</span></p></button>
          </div>
        </li>

        <li>
          <div>
            <button>
            <p>[KF365] 한돈 목살 구이용 600g~(냉장)</p>
            <p className="delete_price">18,800원</p>
            <p className="sale0">25% &nbsp; <span className="price0">13,980원~</span></p></button>
          </div>
        </li>

        <li>
          <div>
            <button>
            <p>[골라담기] 인기 여름 면요리 9종 (택2)</p>
            <p className="delete_price">5,900원</p>
            <p className="sale0">15% &nbsp; <span className="price0">5,015원~</span></p></button>
          </div>
        </li>

        <li>
          <div>
            <button>
            <p>[KF365] 에어프라이어용 통등심 돈까스 2종</p>
            <p className="delete_price">12,590</p>
            <p className="sale0">19% &nbsp; <span className="price0">10,190~</span></p></button>
          </div>
        </li>
      </ul>


    </>
  );
}

export default Main;