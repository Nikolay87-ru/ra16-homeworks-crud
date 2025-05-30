import { Link } from 'react-router-dom';
import { type Post } from '../types/Post';
import { FaEye } from 'react-icons/fa';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';
import './pCard.css';

interface PostCardProps {
  post: Post;
  onBack?: () => void;
  onDelete?: (id: number) => void;
  onEdit?: (id: number) => void;
}

export const PostCard = ({ post, onBack, onDelete, onEdit }: PostCardProps) => {
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
        {onBack && <TiArrowBack className="back-btn" title="Назад" onClick={() => onBack()} />}
        {onEdit && (
          <AiFillEdit className="edit-btn" title="Редактировать" onClick={() => onEdit(post.id)} />
        )}
        {onDelete && (
          <AiFillDelete className="delete-btn" title="Удалить" onClick={() => onDelete(post.id)} />
        )}

        {!onDelete && (
          <Link to={`/posts/${post.id}`} className="view-btn" title="Просмотр">
            <FaEye />
          </Link>
        )}
      </div>
    </div>
  );
};
