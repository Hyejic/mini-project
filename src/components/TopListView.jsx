import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopStories } from '../action/topAction';
import List  from './List';
 
export const TopListView = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.topReducer);
  
  useEffect(() => {
    dispatch(getTopStories())
  }, []);
  
  return (
    <ul>
      {
        state.loading ? <div>Loading...</div>
        : state.items.map(({ data: story }) => story && <List key={story.id} story={story} />)
      }
    </ul>
  )
}