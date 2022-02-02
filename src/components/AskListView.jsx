import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAskStories } from '../action/askAction';
import List  from './List';
 
export const AskListView = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.askReducer);
  useEffect(() => {
    dispatch(getAskStories())
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