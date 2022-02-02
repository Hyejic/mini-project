import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import {TopListView} from "./TopListView"
import {NewListView} from "./NewListView"
import {AskListView} from "./AskListView"
import {ShowListView} from "./ShowListView"
import "../css/cardlist.css"

export const ListWrap = () => {
  const menu = ['Top', 'New', 'Ask', 'Show']
  return (
    <section className="list-section">
      <nav className="list-section__nav">
      </nav>
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
        <SwiperSlide><TopListView /></SwiperSlide>
        <SwiperSlide><NewListView /></SwiperSlide>
        <SwiperSlide><AskListView /></SwiperSlide>
        <SwiperSlide><ShowListView /></SwiperSlide>
      </Swiper>
    </section>
  )
}