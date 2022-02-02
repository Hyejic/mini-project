import Axios from "axios"
import { BASE_API_URL } from './constants';

const getShowStory = async (id) => {
  try {
    const story = await Axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getShowStories = () => async (dispatch, getState) => {
  dispatch({type: "FETCH_SHOW_REQUEST"})
  try {
    const { data: storyIds } = await Axios.get(
      `${BASE_API_URL}/showstories.json`
      );
    const stories = await Promise.all(storyIds.slice(0, 5).map((storyId) => getShowStory(storyId)));
    dispatch({type:"FETCH_SHOW_SUCCESS", payload: stories})
  } catch (error) {
    dispatch({type:"FETCH_SHOW_FAILURE", error: error})
  }
}
