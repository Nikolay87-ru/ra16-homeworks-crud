import { Link } from 'react-router-dom';
import { type Post } from '../types/Post';
import './components.css';

interface PostCardProps {
  post: Post;
  onDelete?: (id: number) => void;
}

export const PostCard = ({ post, onDelete }: PostCardProps) => {
  const created = new Date(post.created).toLocaleString();

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-user">
          <img className="user-avatar" src="/src/assets/avatar.jpg" alt="Avatar" />
          <span className="user-name">User</span>
        </div>
        <span className="card-date">{created}</span>
      </div>
      <div className="card-content">{post.content}</div>
      <div className="card-actions">
        {onDelete ? (
          <button className="delete-btn" onClick={() => onDelete(post.id)}>
            Удалить
          </button>
        ) : (
          <Link to={`/posts/${post.id}`} className="view-btn">
            Просмотр
          </Link>
        )}
      </div>
    </div>
  );
};
