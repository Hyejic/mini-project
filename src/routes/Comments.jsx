import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getComments } from '../action/commentsAction';
import { CommentLIst } from '../components/CommentLIst';
import '../css/comments.css';

export const Comments = () => {
  const params = useParams();
  // console.log(params.id)
  
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

  const dispatch = useDispatch();
  const state = useSelector(state => state.commnetsReducer);
  
  useEffect(() => {
    dispatch(getComments(params.id))
  }, []);

  console.log(state)

  
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
