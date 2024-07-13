import './App.css';

import MotionTranstion from './components/MotionTransiton';

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
        <MotionTranstion />
      </main>
    </>
  );
}

export default App;
