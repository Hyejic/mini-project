import getStory from './storyAction';

export const getSubmission = (submission) => async (dispatch, getState) => {
  dispatch({type: "FETCH_SUBMISSION_REQUEST"})
  try {
    // const { data: storyIds } = await Axios.get(
    //   `${BASE_API_URL}/topstories.json`
    // );
    // console.log(storyIds)
    // console.log(submission)
    // // const { data: storyIds } = await submission;
    // console.log(storyIds)
    const stories = await Promise.all(submission.slice(0, 5).map((storyId) => getStory(storyId)))
    dispatch({type:"FETCH_SUBMISSION_SUCCESS", payload: stories})
  } catch (error) {
    dispatch({type:"FETCH_SUBMISSION_FAILURE", error: error})
  }
}
