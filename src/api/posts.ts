import axios from 'axios';
import type { Post } from '../types/Post'

const API_URL = 'http://localhost:7070/posts';

export const PostService = {
  async getAll() {
    const { data } = await axios.get<Post[]>(API_URL);
    return data;
  },
  async getById(id: number) {
    const { data } = await axios.get<{ post: Post }>(`${API_URL}/${id}`);
    return data.post;
  },
  async create(content: string) {
    await axios.post(API_URL, { id: 0, content });
  },
  async update(id: number, content: string) {
    await axios.put(`${API_URL}/${id}`, { id, content });
  },
  async delete(id: number) {
    await axios.delete(`${API_URL}/${id}`);
  }
};