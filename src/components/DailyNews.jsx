import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getDailyStories } from '../action/dailyAction';
import { getUserInfo } from '../action/userInfoAction';
import { timeForToday, karmaSet } from '../utile/script'
import '../css/daily.css'
 

export const DailyNews = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.dailyReducer);
  useEffect(() => {
    dispatch(getDailyStories())
  }, []);
  console.log(state.items.map((item) => item.data.by))
  
  const DailyList = ({ story: { id, by, title, kids, time, score, url}}) => {
    const user = useSelector(user => user.userInfoReducer);
    useEffect(() => {
      dispatch(getUserInfo(by))
    }, [user]);
    console.log(user)
    if(user.item.data){
      return(
        <li className="daily-list">
          <div className="daily-list__header">
            <span className="user-rank normal daily__user-rank">{karmaSet(user.item.data.karma)}</span>
            <strong className="daily-list__name">{by}</strong>
            <h3 className="daily-list__tit">{title}</h3>
            <span className="daily-list__time">{timeForToday(time)}</span>
          </div>
          <div className="daily-list__cont cont-aside">
            <a className="cont-aside__link" href={url} target="_blank" rel="noreferrer">{by}</a>
            <div className="cont-aside__info">
              <span className="cont-aside__score">{score}</span>
              {
                kids === undefined 
                ? <button className="btn btn-comment">0</button>
                : <button className="btn btn-comment">{kids.length}</button>
              }
            </div>
          </div>
        </li>
      )
    }
    return false;
  }
  return (
    <div className="daily-wrap">
      <h2 className="daily-title">Daily News</h2>
      <ul className="daily-list-wrap">
        {
          state.loading ? <div>Loading...</div>
          : state.items.map(({ data: story }) => story && <DailyList key={story.id} story={story} />)
        }
      </ul>
    </div>
  )
}