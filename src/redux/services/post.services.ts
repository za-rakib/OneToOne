import { api } from './api.services';
import { getPosts } from '../api/apis';

export const getPostsList = async () => {
  // try {
  //     const response = await api.get(getPosts);
  //     return response.data;
  // } catch (error) {
  //     throw error;
  // }
  const response = await api.get(getPosts);
  return response.data;
};
