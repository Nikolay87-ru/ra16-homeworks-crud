import { useNavigate, useParams } from 'react-router-dom';
import { PostForm } from '../PostForm';
import { PostService } from '../../api/posts';
import { usePost } from '../../hooks/usePost';

export const PostEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { post } = usePost(Number(id));

  const handleSubmit = async (content: string) => {
    if (id) {
      await PostService.update(Number(id), content);
      navigate(`/posts/${id}`);
    } else {
      await PostService.create(content);
      navigate('/');
    }
  };

  return (
    <div>
      <h1>{id ? 'Редактирование' : 'Создание'} поста</h1>
      <PostForm
        postContent={post?.content}
        onSubmit={handleSubmit}
        onCancel={() => navigate(id ? `/posts/${id}` : '/')}
        submitText={id ? 'Сохранить' : 'Опубликовать'}
      />
    </div>
  );
};