// import { useState, useEffect } from 'react';
// import { getStories } from '../utils/apis';

// export const UseDataFetcher = (type) => {
//   const [stories, setStories] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     getStories(type)
//       .then((stories) => {
//         setStories(stories);
//         setIsLoading(false);
//       })
//       .catch(() => {
//         setIsLoading(false);
//       });
//   }, [type]);

//   return { isLoading, stories };
// };

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {fetchPosts} from "./action"

// const Posts = () => {

//   const dispatch = useDispatch()
//   const state = useSelector((state) => state)

//   useEffect(() => {
//     dispatch(fetchPosts())
//   }, []) 

//   const renderPosts = () => {
//     if(state.loading) {
//       return <h1>Loading</h1>
//     }
//     return state.items.map((el) => {
//       return <h3 key={el.id}>{el.title}</h3>
//     })
//   }

//   return (
//     <div>
//       {renderPosts()}
//     </div>
//   )
// }

// export default Posts;