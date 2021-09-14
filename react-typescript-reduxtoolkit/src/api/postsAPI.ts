import { Post } from '../types/postType';
import axiosInstance from './axiosInstance';

export const getPosts = async () => {
    return await axiosInstance().get<Post[]>('https://jsonplaceholder.typicode.com/posts');
};