import Axios from "axios"
import { BASE_API_URL } from './constants';
import getStory from "./storyAction";

export const getDailyStories = () => async (dispatch, getState) => {
  dispatch({type: "FETCH_DAILY_REQUEST"})
  try {
    const { data: storyIds } = await Axios.get(
      `${BASE_API_URL}/newstories.json`
      );
    const stories = await Promise.all(storyIds.slice(0, 10).map((storyId) => getStory(storyId)));
    dispatch({type:"FETCH_DAILY_SUCCESS", payload: stories})
  } catch (error) {
    dispatch({type:"FETCH_DAILY_FAILURE", error: error})
  }
}
