import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout'
import { MakePost } from './components/MakePost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <MakePost /> } />
          {/* <Route path="" element={} />
          <Route path="" element={} />
          <Route path="" element={} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
