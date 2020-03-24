import axios from '../config/axios';

export const fetchAllUsers = async () => {
  try {
    const { data } = await axios.get('/users');
    return data;
  } catch (err) {
    throw err;
  }
};
