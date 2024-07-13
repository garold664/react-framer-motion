import { Route, Routes } from 'react-router';
import './App.css';

import MotionTranstion from './components/MotionTransiton';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          gap: '24px',
        }}
      >
        <nav
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            alignItems: 'center',
            height: '5vh',
            background: 'rgba(0,0,0,0.5)',
          }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/motion-transition">Motion Transition</NavLink>
        </nav>
        <Routes>
          <Route path="/motion-transition" element={<MotionTranstion />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
