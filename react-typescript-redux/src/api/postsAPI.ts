import { Post } from '../types/PostType';
import axiosInstance from './axiosInstance';

export const getPosts = async () => {
    return await axiosInstance().get<Post[]>('https://jsonplaceholder.typicode.com/posts');
};