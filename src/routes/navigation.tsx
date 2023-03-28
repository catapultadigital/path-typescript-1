import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const Counter = lazy(() => import(/* webpackChunkName: "Counter" */ '../components/counter'));
const Shopping = lazy(() => import(/* webpackChunkName: "Shopping" */ '../components/shopping'));

const Home = (): JSX.Element => {
  return (
    <section>
      <h1>Inicio</h1>
      <p>These pages are using Suspense and Lazy components.</p>
    </section>
  );
};

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
              <li>
                <NavLink to="/shopping">Shopping</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
};