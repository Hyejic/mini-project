import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { getKidsStory } from '../action/commentAction';
import Axios from "axios"
import { BASE_API_URL } from '../action/constants';

const List = ({ story: { id, by, title, kids, time, score, url}}) => {
  const firstKids = kids === undefined ? null : kids[0];
  
  // const [comment, setComment] = useState([]);
  // const getKidsStory = async (id) => {
  //   try {
  //     const story = await Axios.get(`${BASE_API_URL}/item/${id}.json`);
  //      console.log(story)
  //     return story;
  //   } catch (error) {
  //     console.log('Error while getting a story.');
  //   }
  // };
  // useEffect(() => {
  //   getKidsStory(firstKids)
    
  // }, []);

  return (
    <li className="list-item open" id={id}>
      <div className="list-item__tit-wrap">
      <Link to={`/detail/${id}`} className="list-item__tit"><h3>{title}</h3></Link>
      </div>
      <div className="list-item__commnet comment-priview">
      <div className="comment-priview__info">
          <strong className="comment-priview__name">{by}</strong>
          <span className="comment-priview__time">11 minutes ago</span>
        </div>
        <p className="comment-priview__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe porro sed nesciunt velit quae! Unde quam adipisci illo? Rem atque quisquam animi est officiis a debitis consectetur blanditiis dolorem earum?a debitis consectetur blanditiis dolorem earum?</p>
      </div>
      <div className="list-item__cont cont-aside">
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
      <button className="btn btn-dropdown">
        <span className="ir-blind">댓글 미리보기</span>
      </button>
    </li>
  );
};

export default List;