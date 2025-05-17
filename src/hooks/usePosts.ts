import { useState, useEffect, useCallback } from 'react';
import { PostService } from '../api/posts';
import { type Post } from '../types/Post'

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await PostService.getAll();
      setPosts(data);
    } catch {
      setError('Ошибка загрузки постов');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, loading, error, refetch: fetchPosts };
};