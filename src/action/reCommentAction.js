import Axios from 'axios'
import { BASE_API_URL } from './constants';
import getStory from './storyAction'

// export const getKidsStory = async (id) => {
//   try {
//     const story = await Axios.get(`${BASE_API_URL}/item/${id}.json`);
//     return story;
//   } catch (error) {
//     console.log('Error while getting a story.');
//   }
// };

export const getKidsStories = (id) => async (dispatch, getState) => {
  dispatch({type: "FETCH_RECOMMENT_REQUEST"})
  console.log('??????????????????',id)
  try {
    // const stories = await Axios.get(
    //   `${BASE_API_URL}/item/${id}.json`
    //   );
    const stories = await Promise.all(id.map((storyId) => getStory(storyId)));
    dispatch({type:"FETCH_RECOMMENT_SUCCESS", payload: stories})
  } catch (error) {
    dispatch({type:"FETCH_RECOMMENT_FAILURE", error: error})
  }
}
