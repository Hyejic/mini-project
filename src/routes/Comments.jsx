import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { timeForToday } from '../utile/script';
import { BASE_API_URL } from '../action/constants';
import { DetailCont } from '../components/DetailCont';

import '../css/comments.css';

export const Comments = () => {
  // const params = useParams();
  
  // const getDtailStory = async (id) => {
  //   try {
  //     const story = await Axios.get(`${BASE_API_URL}/item/${id}.json`);
  //     return story;
  //   } catch (error) {
  //     console.log('Error while getting a story.');
  //   }
  // };
  // const useDataFetcher = (params) => {
  //   const [stories, setStories] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
    
  //   useEffect(() => {
  //     setIsLoading(true);
  //     getDtailStory(params)
  //     .then((stories) => {
  //       setStories(stories);
  //       setIsLoading(false);
  //     })
  //     .catch(() => {
  //       setIsLoading(false);
  //     });
  //   }, [params]);
    
  //   return { isLoading, stories };
  // };
  // const { isLoading, stories } = useDataFetcher(params.id);

  // const Component = () => {
  //   if ( stories.data ) {
  //     return <DetailCont story={stories.data} />
  //   } 
  //   return null;
  // } 
  const [isOpen, setIsOpen] = useState(true);
  const [reIsOpen, setReIsOpen] = useState(true);
  const text = `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis doloremque tenetur tempore voluptatibus porro quisquam. In, alias eaque commodi quae odit porro iure consectetur, modi totam pariatur ratione tempore explicabo?</p>`
  
  return (
    <section className="layer comments">
      <div className="layer__inner">
        <div className="layer__back-wrap">
          <Link to={`/`} className="btn layer__btn-back" ><span className="ir-blind">뒤로가기</span></Link>
        </div>
        <h3 className="comments__tit">Comments</h3>
        <ul>
          <li className="comments-list">
            <div className={isOpen ? "comments-list__wrap open" : "comments-list__wrap"}>
              <div className="comments-list__info">
                <Link to={`/user/`} className="comments-list__name">name</Link>
                <span className="comments-list__time">{timeForToday(123213123)}</span>
              </div>
              <p className="comments-list__desc" dangerouslySetInnerHTML={{__html: text}}></p>
              <button className="btn btn-more-hide" onClick={() => {
                setReIsOpen(reIsOpen => !reIsOpen)
              }}>
                {reIsOpen ? "hide.." : "more.."}
              </button>
              <div className={reIsOpen ? "comments__re open" : "comments__re"}>
                <div className="comments-list__info">
                  <Link to={`/user/`} className="comments-list__name">name</Link>
                  <span className="comments-list__time">{timeForToday(123213123)}</span>
                </div>
                <p className="comments-list__desc" dangerouslySetInnerHTML={{__html: text}}></p>
              </div>
            </div>
            <button className="btn btn-dropdown" onClick={() => {
                setIsOpen(isOpen => !isOpen)
              }}>
              <span className="ir-blind">댓글 미리보기</span>
            </button>
          </li>
          <li className="comments-list">
            <div className={isOpen ? "comments-list__wrap open" : "comments-list__wrap"}>
              <div className="comments-list__info">
                <Link to={`/user/`} className="comments-list__name">name</Link>
                <span className="comments-list__time">{timeForToday(123213123)}</span>
              </div>
              <p className="comments-list__desc" dangerouslySetInnerHTML={{__html: text}}></p>
              <button className="btn btn-more-hide" onClick={() => {
                setReIsOpen(reIsOpen => !reIsOpen)
              }}>
                {reIsOpen ? "hide.." : "more.."}
              </button>
              <div className={reIsOpen ? "comments__re open" : "comments__re"}>
                <div className="comments-list__info">
                  <Link to={`/user/`} className="comments-list__name">name</Link>
                  <span className="comments-list__time">{timeForToday(123213123)}</span>
                </div>
                <p className="comments-list__desc" dangerouslySetInnerHTML={{__html: text}}></p>
              </div>
            </div>
            <button className="btn btn-dropdown" onClick={() => {
                setIsOpen(isOpen => !isOpen)
              }}>
              <span className="ir-blind">댓글 미리보기</span>
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}