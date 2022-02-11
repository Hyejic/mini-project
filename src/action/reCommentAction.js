import getStory from './storyAction'

export const getKidsStories = (id) => async (dispatch, getState) => {
  dispatch({type: "FETCH_RECOMMENT_REQUEST"})
  try {
    const stories = await Promise.all(id.map((storyId) => getStory(storyId)));
    dispatch({type:"FETCH_RECOMMENT_SUCCESS", payload: stories})
  } catch (error) {
    dispatch({type:"FETCH_RECOMMENT_FAILURE", error: error})
  }
}
