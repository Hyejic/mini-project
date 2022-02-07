import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getNewStories } from '../action/newAction';
import List  from './List';
 
export const NewListView = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.newReducer);
  
  useEffect(() => {
    dispatch(getNewStories())
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