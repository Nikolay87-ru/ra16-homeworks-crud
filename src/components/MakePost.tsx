import { Link } from 'react-router-dom';
import { PostCard } from '../components/PostCard';
import { usePosts } from '../hooks/usePosts';

export const MakePost = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="make-post-container">
      <h1>Посты</h1>
      <Link to="/posts/new">Создать пост</Link>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
