import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getComments } from '../action/commentsAction';
import { CommentLIst } from '../components/CommentLIst';
import '../css/comments.css';

export const Comments = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector(state => state.commnetsReducer);
  
  useEffect(() => {
    dispatch(getComments(params.id))
  }, []);
  
  return (
    <section className="layer comments">
      <div className="layer__inner">
        <div className="layer__back-wrap">
          <Link to={`/`} className="btn layer__btn-back" ><span className="ir-blind">뒤로가기</span></Link>
        </div>
        <h3 className="comments__tit">Comments</h3>
        <ul>
          { state.loading ? <div>Loading...</div>
            : state.items.map(({ data: story }) => story && <CommentLIst key={story.id} story={story} /> )
          }
        </ul>
      </div>
    </section>
  )
}
