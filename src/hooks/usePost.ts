import { useState, useEffect } from 'react';
import { PostService } from '../api/posts';
import { type Post } from '../types/Post';

export const usePost = (id: number) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await PostService.getById(id);
        setPost(data);
      } catch {
        setError('Пост не найден');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return { post, loading, error };
};