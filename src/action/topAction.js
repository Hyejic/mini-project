import Axios from "axios"
import { BASE_API_URL } from './constants';
import getStory from "./storyAction";

export const getTopStories = () => async (dispatch, getState) => {
  dispatch({type: "FETCH_TOP_REQUEST"})
  try {
    const { data: storyIds } = await Axios.get(
      `${BASE_API_URL}/topstories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 5).map((storyId) => getStory(storyId)))
    // const comment = await Promise.all(stories.slice(0, 5).map((story) => getStory(story.data.kids[0])))
    dispatch({type:"FETCH_TOP_SUCCESS", payload: stories})
    // dispatch({type:"FETCH_TOP_SUCCESS", payload: stories, comments: comment})
  } catch (error) {
    dispatch({type:"FETCH_TOP_FAILURE", error: error})
  }
}
