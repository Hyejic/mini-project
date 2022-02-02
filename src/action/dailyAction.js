import Axios from "axios"
import { BASE_API_URL } from './constants';

const getDailyStory = async (id) => {
  try {
    const story = await Axios.get(`${BASE_API_URL}/item/${id}.json`);
    // console.log(story)
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getDailyStories = () => async (dispatch, getState) => {
  dispatch({type: "FETCH_DAILY_REQUEST"})
  try {
    const { data: storyIds } = await Axios.get(
      `${BASE_API_URL}/newstories.json`
      );
    const stories = await Promise.all(storyIds.slice(0, 5).map((storyId) => getDailyStory(storyId)));
    dispatch({type:"FETCH_DAILY_SUCCESS", payload: stories})
  } catch (error) {
    dispatch({type:"FETCH_DAILY_FAILURE", error: error})
  }
}