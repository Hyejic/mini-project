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
      return (
        <div className="user__inner">
          <Link to={`/`} className="btn layer__btn-back" ><span className="ir-blind">뒤로가기</span></Link>
          <div className="user__header">
            {/* <span className="user-rank super user__user-rank">{karmaSet(state.item.data.karma)}</span> */}
            <Karma karma={state.item.data.karma}/>
            <strong className="user__user-name">{state.item.data.id}</strong>
            <span className="user__post-karma">{state.item.data.karma} karma</span>
            <span className="user__post-joined">joined {timeForToday(state.item.data.created)}</span>
          </div>
          <h3 className="user__desc" dangerouslySetInnerHTML={{__html: desc}}></h3>
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
        <div className='layer__inner'>
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
