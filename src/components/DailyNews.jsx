import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDailyStories } from '../action/dailyAction';
import { timeForToday, Karma } from '../utile/script';
import { Link } from 'react-router-dom';
import getUser from '../action/userAction';
import '../css/daily.css';

export const DailyNews = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.dailyReducer);
  useEffect(() => {
    dispatch(getDailyStories())
  }, []);
  
  const DailyList = ({ story: { id, by, title, kids, time, score, url}}) => {
    const [karma, setKarma] = useState([]);

    useEffect(() => {
      getUser(by)
        .then((karma) => {
          setKarma(karma);
        })
        .catch(() => {
        });
    }, []);

    if(karma.data){
      return(
        <li className="daily-list">
          <div className="daily-list__header">
            <Karma karma={karma.data.karma}/>
            <strong className="daily-list__name">{by}</strong>
            <Link to={`/detail/${id}`} className="daily-list__tit"><p>{title}</p></Link>
            <span className="daily-list__time">{timeForToday(time)}</span>
          </div>
          <div className="daily-list__cont cont-aside">
            <a className="cont-aside__link" href={url} target="_blank" rel="noreferrer">{by}</a>
            <div className="cont-aside__info">
              <span className="cont-aside__score">{score}</span>
              {
                kids === undefined 
                ? <button className="btn btn-comment">0</button>
                : <Link to={`/comments/${id}`} className="btn btn-comment" >{kids.length}</Link>
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