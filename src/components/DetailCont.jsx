import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '../action/userInfoAction';
import { Link } from 'react-router-dom';
import { timeForToday, Karma } from '../utile/script';

import '../css/detail.css';

export const DetailCont = ({story}) => {
  // console.log(story)

  const dispatch = useDispatch();
  const state = useSelector(state => state.userInfoReducer);
  useEffect(() => {
    dispatch(getUserInfo(story.by))
  }, []);
  
  const DetailDesc = () => {
    if(story.text){
      const text = story.text;
      return (
        <p className="detail__desc" dangerouslySetInnerHTML={{__html: text}}></p>
      )
    }
    return false;
  }
  const LinkUrl = () => {
    if(story.url){
      return (
        <a className="btn detail__btn-link" href={story.url}><span className="ir-blind">link</span></a>
      )
    }
    return false;
  }
  const CommentBtn = () => {
    if(story.kids){
      return (
        <Link to={`/comments/${story.id}`} className="btn detail__btn-commont" >{story.kids.length} commemts</Link>
        // <button className="btn detail__btn-commont">{story.kids.length} commemts</button>
      )
    }
    return false;
  }
  if(state.item.data){
    return (
      <section className="layer detail">
        <div className="layer__inner detail__inner">
          <Link to={`/`} className="btn layer__btn-back" ><span className="ir-blind">뒤로가기</span></Link>
          <div className="detail__header">
            <Karma karma={state.item.data.karma}/>
            <strong className="detail__user-name">{story.by}</strong>
            <strong className="detail__post-time">posted {timeForToday(story.time)}</strong>
          </div>
          <h3 className="detail__title">{story.title}</h3>
          <DetailDesc />
          <div className="detail__btn-wrap">
            <CommentBtn />
            <LinkUrl />
          </div>
        </div>
      </section>
    )   
  }
  return false;
}