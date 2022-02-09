import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { timeForToday } from '../utile/script';
import getStory from '../action/storyAction';

const List = ({ story: { id, by, title, kids, time, score, url}}) => {
  const firstKids = kids === undefined ? null : kids[0];
  const [comment, setComment] = useState([]);

  useEffect(() => {
    getStory(firstKids)
      .then((comment) => {
        setComment(comment);
      })
      .catch(() => {
      });
  }, [firstKids]);
  
  
  const CommnetText = () => {
    const [isOpen, setToggleClass] = useState(false);

    if(comment.data){
      const text = comment.data.text;
      return (
        <div className={isOpen ? "list-item__commnet comment-preview open": "list-item__commnet comment-preview"}>
          <div className="comment-preview__inner">
            <div className="comment-preview__info">
              <Link to={`/user/${comment.data.by}`} className="comment-preview__name">{comment.data.by}</Link>
              <span className="comment-preview__time">{timeForToday(comment.data.time)}</span>
            </div>
            <p className="comment-preview__desc"  dangerouslySetInnerHTML={{__html: text}}></p>
          </div>
          <button className="btn btn-dropdown" onClick={() => {
            setToggleClass(isOpen => !isOpen)
          }}>
            <span className="ir-blind">댓글 미리보기</span>
          </button>
        </div>
      )
    }
    return false;
  }
  return (
    <li className="list-item" id={id}>
      <div className="list-item__tit-wrap">
        <Link to={`/detail/${id}`} className="list-item__tit"><h3>{title}</h3></Link>
      </div>
      
      <CommnetText />
      
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
    </li>
  );
};

export default List;