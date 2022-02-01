// import axios from 'axios';
// import { BASE_API_URL } from './constants';

// const getStory = async (id) => {
//   try {
//     const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
//     return story;
//   } catch (error) {
//     console.log('Error while getting a story.');
//   }
// };

// export const getStories = async (type) => {
//   try {
//     const { data: storyIds } = await axios.get(
//       `${BASE_API_URL}/${type}stories.json`
//     );
//     const stories = await Promise.all(storyIds.slice(0, 10).map(getStory));
//     return stories;
//   } catch (error) {
//     console.log('Error while getting list of stories.');
//   }
// };

// export const getStoryComment = async (comment) => {
//   try {
//     const { data: commentIds } = await axios.get(
//       `${BASE_API_URL}/${comment}.json`
//     );
//     const comments = await Promise.all(commentIds.slice(0, 1).map(getStory));
//     return comments;
//   } catch (error) {
//     console.log('Error while getting list of stories.');
//   }
// };

