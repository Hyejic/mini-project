import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import {ListView} from "./ListView"
import "../css/cardlist.css"

export const ListWrap = () => {
  const menu = ['Top', 'New', 'Ask', 'Show']
  return (
    <section className="list-section">
      <nav className="list-section__nav">
        {/* <button className="active">Top</button>
        <button>New</button>
        <button>Ask</button>
        <button>Show</button> */}
      </nav>
      {/* <ListNav /> */}
      <Swiper
      modules={[Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        pagination={{
          el: '.list-section__nav',
          clickable: true,
            renderBullet: function (index, className) {
              return '<button class="' + className + '">' + (menu[index]) + '</button>';
            },
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><ListView type="top"/></SwiperSlide>
        <SwiperSlide><ListView type="new"/></SwiperSlide>
        <SwiperSlide><ListView type="ask"/></SwiperSlide>
        <SwiperSlide><ListView type="show"/></SwiperSlide>
      </Swiper>
    </section>
  )
}