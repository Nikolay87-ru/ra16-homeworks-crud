import { Link } from 'react-router-dom';
import { PostCard } from '../PostCard';
import { usePosts } from '../../hooks/usePosts';
import './pages.css'

export const MainPage = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="make-post-container">
      <h1>Посты</h1>
      <Link to="/posts/new" className="make-post__btn">Создать пост</Link>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
