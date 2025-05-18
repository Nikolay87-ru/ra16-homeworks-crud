import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { Layout } from './components/Layout';
import { MainPage } from './components/pages/MainPage';
import { PostView } from './components/pages/PostView';
import { PostEdit } from '../src/components/pages/PostEdit';
import './index.css';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="posts/:id" element={<PostView />} />
          <Route path="posts/new" element={<PostEdit />} />
          <Route path="posts/:id/edit" element={<PostEdit />} />
        </Route>
      </Routes>
    </Router>
  );
};

const root = document.getElementById('root');

createRoot(root!).render(<App />);
