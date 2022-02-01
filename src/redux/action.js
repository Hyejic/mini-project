import Axios from "axios"
import { BASE_API_URL } from '../utils/constants';

const getStory = async (id) => {
  try {
    const story = await Axios.get(`${BASE_API_URL}/item/${id}.json`);
    // console.log(story)
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
    // dispatch({type:"FETCH_STORY_FAILURE", error: error})
  }
};

export const getStories = (type) => async (dispatch, getState) => {
  dispatch({type: "FETCH_STORY_REQUEST"})
  // console.log('type',type)
  try {
    const { data: storyIds } = await Axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );

    // console.log(storyIds)
    const stories = await Promise.all(storyIds.slice(0, 1).map((storyId) => getStory(storyId)));
    // console.log("stories",stories)
    dispatch({type:"FETCH_STORY_SUCCESS", payload: stories})
  } catch (error) {
    dispatch({type:"FETCH_STORY_FAILURE", error: error})
  }
}
