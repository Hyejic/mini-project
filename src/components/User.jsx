import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from '../action/userInfoAction';
import { Link } from "react-router-dom";
import { timeForToday, karmaSet } from '../utile/script';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';
import 'swiper/css';

import '../css/user.css';

export const UserCont = () => {
  const menu = ['Submission', 'Comments', 'Favorites']
  return (
    <section className="layer user">
      <div className="layer__inner user__inner">
        <Link to={`/`} className="btn layer__btn-back" ><span className="ir-blind">뒤로가기</span></Link>
        <div className="user__header">
          <span className="user-rank super user__user-rank">Super karma</span>
          <strong className="user__user-name">Cameron Williamson</strong>
          <span className="user__post-karma">12345 karma</span>
          <span className="user__post-joined">joined 15 years ago</span>
        </div>
        <h3 className="user__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ut. Atque perspiciatis neque dolores eum dolorem tenetur deserunt sed. Atque repudiandae pariatur, ea numquam obcaecati aspernatur fugiat iure sapiente sed.</h3>
      </div>
      <div className="user__slider">
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
        >
          <SwiperSlide>1</SwiperSlide>
          <SwiperSlide>2</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}