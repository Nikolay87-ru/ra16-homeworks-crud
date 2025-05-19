import { useParams, useNavigate } from 'react-router-dom';
import { PostCard } from '../PostCard';
import { usePost } from '../../hooks/usePost';
import { PostService } from '../../api/posts';

export const PostView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { post, loading, error } = usePost(Number(id));

  const handleEdit = () => {
    navigate(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    if (!id) return;
    await PostService.delete(Number(id));
    navigate('/');
  };

  if (loading) return <div>Загрузка...</div>;
  if (error || !post) return <div>{error || 'Пост не найден'}</div>;

  return (
    <div>
      <PostCard post={post} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};
