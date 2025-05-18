import { useParams, useNavigate } from 'react-router-dom';
import { PostCard } from '../PostCard';
import { usePost } from '../../hooks/usePost';
import { PostService } from '../../api/posts';
import { FaEdit } from "react-icons/fa";

export const PostView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { post, loading, error } = usePost(Number(id));

  const handleDelete = async () => {
    if (!id) return;
    await PostService.delete(Number(id));
    navigate('/');
  };

  if (loading) return <div>Загрузка...</div>;
  if (error || !post) return <div>{error || 'Пост не найден'}</div>;

  return (
    <div>
      <PostCard post={post} onDelete={handleDelete} />
      <button onClick={() => navigate(`/posts/${id}/edit`)}>
      <FaEdit />
      </button>
    </div>
  );
};