import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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