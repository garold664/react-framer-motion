import { Route, Routes } from 'react-router';
import './App.css';

import MotionTranstion from './pages/MotionTransiton';
import MotionAnimation from './pages/MotionAnimation';
import { NavLink } from 'react-router-dom';
import MotionAndGestures from './pages/MotionAndGestures';
import MotionAndAnimationControls from './pages/MotionAndAnimationControls';

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
          <NavLink to="/motion-animation">Motion Animation</NavLink>
          <NavLink to="/motion-gestures">Motion and Gestures</NavLink>
          <NavLink to="/motion-animation-controls">
            Motion and Animation Controls
          </NavLink>
        </nav>
        <Routes>
          <Route path="/motion-transition" element={<MotionTranstion />} />
          <Route path="/motion-animation" element={<MotionAnimation />} />
          <Route path="/motion-gestures" element={<MotionAndGestures />} />
          <Route
            path="/motion-animation-controls"
            element={<MotionAndAnimationControls />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
