import Axios from 'axios'
import { BASE_API_URL } from './constants';
import getStory from './storyAction';

export const getTopStories = () => async (dispatch, getState) => {
  dispatch({type: "FETCH_TOP_REQUEST"})
  try {
    const { data: storyIds } = await Axios.get(
      `${BASE_API_URL}/topstories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 10).map((storyId) => getStory(storyId)))
    dispatch({type:"FETCH_TOP_SUCCESS", payload: stories})
  } catch (error) {
    dispatch({type:"FETCH_TOP_FAILURE", error: error})
  }
}
