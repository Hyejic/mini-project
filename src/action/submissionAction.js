import Axios from "axios"
import { BASE_API_URL } from './constants';
import getStory from "./storyAction";

export const getSubmission = () => async (dispatch, getState) => {
  dispatch({type: "FETCH_SUBMISSION_REQUEST"})
  try {
    const { data: storyIds } = await Axios.get(
      `${BASE_API_URL}/topstories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 5).map((storyId) => getStory(storyId)))
    dispatch({type:"FETCH_SUBMISSION_SUCCESS", payload: stories})
  } catch (error) {
    dispatch({type:"FETCH_SUBMISSION_FAILURE", error: error})
  }
}
