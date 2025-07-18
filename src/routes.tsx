import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PostDetails } from './pages/PostDetails';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post/:id' element={<PostDetails />} />
    </Routes>
  );
}
