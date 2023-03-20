import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const Counter = lazy(() => import(/* webpackChunkName: "Counter" */ '../components/counter'));

export const Navigation = (): JSX.Element => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/counter">Counter</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/" element={<h1>Inicio</h1>} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
};