import Axios from 'axios'
import { BASE_API_URL } from './constants';

const getUser = async (id) => {
  try {
    const user = await Axios.get(`${BASE_API_URL}/user/${id}.json`);
    return user;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export default getUser;