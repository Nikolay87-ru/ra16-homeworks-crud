import { Link } from 'react-router-dom';

export const MakePost = () => {
  return (
    <div className='make-post-container'>
      <h1>Посты</h1>
      <Link to="/posts/new">Создать пост</Link>
    </div>
  );
};
