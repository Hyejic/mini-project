import Axios from "axios"
import { BASE_API_URL } from './constants';

export const getKidsStory = async (id) => {
  try {
    const story = await Axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

// export const getAskStories = () => async (dispatch, getState) => {
//   dispatch({type: "FETCH_ASK_REQUEST"})
//   try {
//     const { data: storyIds } = await Axios.get(
//       `${BASE_API_URL}/askstories.json`
//       );
//     const stories = await Promise.all(storyIds.slice(0, 5).map((storyId) => getAskStory(storyId)));
//     dispatch({type:"FETCH_ASK_SUCCESS", payload: stories})
//   } catch (error) {
//     dispatch({type:"FETCH_ASK_FAILURE", error: error})
//   }
// }
