import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getShowStories } from '../action/showAction';
import List  from './List';
 
export const ShowListView = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.showReducer);
  useEffect(() => {
    dispatch(getShowStories())
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