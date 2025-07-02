import { Navigate, Route, Routes } from 'react-router';
import { NavBar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />

      <div className='container'>
        <Routes>
          <Route path='/marvel' element={<MarvelPage />} />
          <Route path='/dc' element={<DcPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/hero' element={<HeroPage />} />

          {/* Falta Search y el Hero by ID */}
          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  );
};
