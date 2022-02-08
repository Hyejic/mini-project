import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSubmission } from '../action/submissionAction';
import List  from './List'; 
 
export const UserSubmission = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.submissionReducer);
  
  useEffect(() => {
    dispatch(getSubmission())
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