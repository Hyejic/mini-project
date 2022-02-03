import Axios from "axios"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_API_URL } from '../action/constants';
import { DetailCont } from '../components/DetailCont';

import '../css/detail.css';

export const Detail = () => {
  const params = useParams();
  
  const getDtailStory = async (id) => {
    try {
      const story = await Axios.get(`${BASE_API_URL}/item/${id}.json`);
      return story;
    } catch (error) {
      console.log('Error while getting a story.');
    }
  };
  const useDataFetcher = (params) => {
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
      setIsLoading(true);
      getDtailStory(params)
      .then((stories) => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
    }, [params]);
    
    return { isLoading, stories };
  };
  const { isLoading, stories } = useDataFetcher(params.id);

  const Component = () => {
    if ( stories.data ) {
      return <DetailCont story={stories.data} />
    } 
    return null;
  } 
  
  return (
    isLoading 
    ? <div>isLoading...</div> 
    : <Component/>
  )
}
  // <section className="layer detail">
  //   {
  //     isLoading ? <div>loading...</div>
  //     : stories.data ? 
  //         <div className="layer__inner detail__inner">
  //           <Link to={`/`} className="btn layer__btn-back" ><span className="ir-blind">뒤로가기</span></Link>
  //           {/* <button className="btn layer__btn-back" onClick={}><span className="ir-blind">뒤로가기</span></button> */}
  //           <div className="detail__header">
  //             <span className="user-rank super detail__user-rank">Super karma</span>
  //             <strong className="detail__user-name">{stories.data.by}</strong>
  //             <strong className="detail__post-time">posted {timeForToday(stories.data.time)}</strong>
  //           </div>
  //           <h3 className="detail__title">{stories.data.title}</h3>
  //           <p className="detail__desc">
  //             I have the habit of looking at the date of things I consume online, it gives me a sense of relevance and context, both when I'm looking for things that are "from now" but more importantly when I'm looking for things given a temporal context, for instance, programming for an old compiler, finding out how to do something with an old piece of hardware or electronics. I feel like I'm encountering more and more sites and articles where I can't seem to find the date. Google will return irrelevant results from today rather than relevant results from 10 years ago. I feel it's getting worse, is it just me?
  //           </p>
  //           <div className="detail__btn-wrap">
  //             <button className="btn detail__btn-commont">{stories.data.kids.length} commemts</button>
  //             <a className="btn detail__btn-link" href={stories.data.url}><span className="ir-blind">link</span></a>
  //           </div>
  //         </div>
  //       :  null
  //   }
  // </section>