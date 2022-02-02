// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getStories } from '../redux/action';

// export const UseDataFetcher = (type) => {
  
//   const [isLoading, setIsLoading] = useState(false);
//   const [stories, setStories] = useState([]);
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state);

  
//   // console.log('🤔',state)
//   useEffect(() => {
//     // setIsLoading(true);
//     // setStories(stories);
//     dispatch(getStories(type))
//     //   .then((state) => {
//     //     setStories(state);
//     //     setIsLoading(false);
//     //   })
//     //   .catch(() => {
//     //     setIsLoading(false);
//     //   });
//   }, [type]);
//     // console.log(stories)
//     console.log('🤔',state)
      
//   return { isLoading, state };
// };