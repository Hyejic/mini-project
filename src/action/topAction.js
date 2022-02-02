import Axios from "axios"
import { BASE_API_URL } from './constants';

const getTopStory = async (id) => {
  try {
    const story = await Axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getTopStories = () => async (dispatch, getState) => {
  dispatch({type: "FETCH_TOP_REQUEST"})
  try {
    const { data: storyIds } = await Axios.get(
      `${BASE_API_URL}/topstories.json`
      );
    const stories = await Promise.all(storyIds.slice(0, 5).map((storyId) => getTopStory(storyId)));
    dispatch({type:"FETCH_TOP_SUCCESS", payload: stories})
  } catch (error) {
    dispatch({type:"FETCH_TOP_FAILURE", error: error})
  }
}
