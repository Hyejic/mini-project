import Axios from 'axios'
import { BASE_API_URL } from './constants';
import getStory from './storyAction';

export const getNewStories = () => async (dispatch, getState) => {
  dispatch({type: "FETCH_NEW_REQUEST"})
  try {
    const { data: storyIds } = await Axios.get(
      `${BASE_API_URL}/newstories.json`
      );
    const stories = await Promise.all(storyIds.slice(0, 5).map((storyId) => getStory(storyId)));
    dispatch({type:"FETCH_NEW_SUCCESS", payload: stories})
  } catch (error) {
    dispatch({type:"FETCH_NEW_FAILURE", error: error})
  }
}
