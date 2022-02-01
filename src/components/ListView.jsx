import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStories } from "../redux/action";
import List  from './List';
 
export const ListView = ({type}) => {
  // console.log('1')
  const dispatch = useDispatch();
  // console.log('before',state)
  const state = useSelector((state) => state);
  // console.log('after',state)
  
  useEffect(() => {
    dispatch(getStories(type))
  }, [type])


  return (
    <ul>
      {
       console.log('state.loading',state) 
      }
      {
        state.loading ? <div>Loading...</div>
        : state.items.map(({ data: story }) => story && <List key={story.id} story={story} />)
      }
    </ul>
  )
}