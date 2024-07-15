import { Route, Routes } from 'react-router';
import './App.css';

import MotionTranstion from './pages/MotionTransiton';
import MotionAnimation from './pages/MotionAnimation';
import { NavLink } from 'react-router-dom';
import MotionAndGestures from './pages/MotionAndGestures';
import MotionAndAnimationControls from './pages/MotionAndAnimationControls';
import MotionAndViewBasedAnimations from './pages/MotionAndViewBasedAnimations';
import MotionAndScrollAnimations from './pages/MotionAndScrollAnimations';

function App() {
  return (
    <>
      <nav
        style={{
          // position: 'sticky',
          inset: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          alignItems: 'center',
          height: '10vh',
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
        <NavLink to="/motion-view-based">
          Motion and View Based Animations
        </NavLink>
        <NavLink to="/motion-scroll">
          Motion and Scroll Based Animations
        </NavLink>
      </nav>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          gap: '24px',
        }}
      >
        <Routes>
          <Route path="/motion-transition" element={<MotionTranstion />} />
          <Route path="/motion-animation" element={<MotionAnimation />} />
          <Route path="/motion-gestures" element={<MotionAndGestures />} />
          <Route
            path="/motion-animation-controls"
            element={<MotionAndAnimationControls />}
          />
          <Route
            path="/motion-view-based"
            element={<MotionAndViewBasedAnimations />}
          />
          <Route
            path="/motion-scroll"
            element={<MotionAndScrollAnimations />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
