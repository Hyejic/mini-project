import axios from 'axios';
import { BASE_API_URL } from './constants';

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
    return stories;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};
// const getStory = async (id) => {
//   const story = await (
//     await fetch(`${BASE_API_URL}/item/${id}.json`)
//   ).json();
// }

// export const getStories = async (type) => {
//   const { data: storyIds } = await fetch(`${BASE_API_URL}/${type}stories.json`);
//   const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
//   return stories;
// }


