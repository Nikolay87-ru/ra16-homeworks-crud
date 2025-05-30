import { type FormEvent, useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './pForm.css';

type Props = {
  postContent?: string;
  onSubmit: (content: string) => void;
  onCancel: () => void;
  submitText?: string;
};

export const PostForm = ({
  postContent = '',
  onSubmit,
  onCancel,
  submitText = 'Опубликовать',
}: Props) => {
  const [content, setContent] = useState(postContent);

  useEffect(() => {
    setContent(postContent);
  }, [postContent]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <button type="button" className="close-btn" onClick={onCancel}>
        <FaTimes />
      </button>
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder={content ? '' : "Введите текст сообщения..."}
        required
        autoFocus
      />
      <button type="submit" className="submit-btn">
        {submitText}
      </button>
    </form>
  );
};
