import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import { Error404 } from './pages/Error404';
import AdvertPage from './pages/adverts/AdvertPage';
import AdvertsPage from './pages/adverts/AdvertsPage';
import NewAdvertPage from './pages/adverts/NewAdvertPage';
import LoginPage from './pages/auth/LoginPage/LoginPage';
import { RequireAuth } from './pages/auth/components/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage className='login' />}></Route>
      <Route
        path='/adverts'
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route index element={<AdvertsPage />} />
        <Route path=':advertId' element={<AdvertPage />} />
        <Route path='new' element={<NewAdvertPage />} />
      </Route>
      <Route path='/' element={<Navigate to='/adverts' />} />
      <Route path='/404' element={<Error404 />} />
      <Route path='*' element={<Navigate to='/404' />} />
    </Routes>
  );
}

export default App;
