import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { Layout } from './components/Layout';
import { MakePost } from './components/MakePost';
import './index.css';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MakePost />} />
          {/* <Route path="" element={} />
          <Route path="" element={} />
          <Route path="" element={} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
}

