import Axios from 'axios'
import { BASE_API_URL } from './constants';
import getStory from './storyAction';

export const getComments = (id) => async (dispatch, getState) => {
  dispatch({type: "FETCH_COMMENTS_REQUEST"})
  try {
    const item = await Axios.get(`${BASE_API_URL}/item/${id}.json`);
    // console.log('item',item.data.kids)
    const kids = item.data.kids;
    // console.log('kids',kids)
    const stories = await Promise.all(kids.slice(0, 20).map((kid) => getStory(kid)))
    // console.log('stories',stories)
    dispatch({type:"FETCH_COMMENTS_SUCCESS", payload: stories})
  } catch (error) {
    dispatch({type:"FETCH_COMMENTS_FAILURE", error: error})
  }
}
