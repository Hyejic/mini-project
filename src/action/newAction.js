import Axios from "axios"
import { BASE_API_URL } from './constants';

const getNewStory = async (id) => {
  try {
    const story = await Axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getNewStories = () => async (dispatch, getState) => {
  dispatch({type: "FETCH_NEW_REQUEST"})
  try {
    const { data: storyIds } = await Axios.get(
      `${BASE_API_URL}/newstories.json`
      );
    const stories = await Promise.all(storyIds.slice(0, 5).map((storyId) => getNewStory(storyId)));
    dispatch({type:"FETCH_NEW_SUCCESS", payload: stories})
  } catch (error) {
    dispatch({type:"FETCH_NEW_FAILURE", error: error})
  }
}
