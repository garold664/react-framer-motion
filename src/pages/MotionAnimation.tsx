import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

export default function MotionAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {' '}
      <motion.button layout onClick={() => setIsVisible(!isVisible)}>
        click
      </motion.button>
      <AnimatePresence
        // mode="wait"
        mode="popLayout"
        // mode="sync"
      >
        {isVisible && (
          <motion.div
            initial={{ y: 0, scale: 0 }}
            // animate={{ y: [200, -50, 0, 200] }}
            animate={{ scale: [2, 0, 1, 2] }}
            // transition={{ type: 'spring', duration: 1.2 }}
            transition={{
              ease: 'backInOut',
              duration: 1.2,
              times: [0, 0.2, 0.3, 1],
            }}
            exit={{ y: 0, scale: 0 }}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: 'red',
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
