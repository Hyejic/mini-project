import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '../action/userInfoAction';
import { timeForToday, Karma } from '../utile/script';
import {UserSubmission} from './UserSubmission';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';
import 'swiper/css';

import '../css/user.css';

export const UserCont = () => {
  const params = useParams();
  const menu = ['Submission', 'Comments', 'Favorites'];
  const dispatch = useDispatch();
  const state = useSelector(state => state.userInfoReducer);
  
  useEffect(() => {
    dispatch(getUserInfo(params.id))
  }, []);

  const UserInfo = () => {
    if(state.item.data){
      const desc = state.item.data.about;
      const DescWrap = () => {
        if(desc){
          return (
            <p className="user__desc" dangerouslySetInnerHTML={{__html: desc}}></p>
          )
        }
        return false;
      }
      return (
        <div className="user__inner">
          <div className="layer__back-wrap">
          <Link to={`/`} className="btn layer__btn-back" ><span className="ir-blind">뒤로가기</span></Link>
          </div>
          <div className="user__header">
            <Karma karma={state.item.data.karma}/>
            <strong className="user__user-name">{state.item.data.id}</strong>
            <span className="user__post-karma">{state.item.data.karma} karma</span>
            <span className="user__post-joined">joined {timeForToday(state.item.data.created)}</span>
          </div>
          <DescWrap />
        </div>
      )
    }
    return false;
  }
  return (
    <section className="layer user">
      {
        state.loading ? <div>Loading...</div>
        : 
        <div className="layer__inner">
          <UserInfo />
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
              <SwiperSlide><UserSubmission /></SwiperSlide>
              <SwiperSlide><UserSubmission /></SwiperSlide>
              <SwiperSlide><UserSubmission /></SwiperSlide>
            </Swiper>
          </div>
        </div>
        
      }
    </section>
  )
}
