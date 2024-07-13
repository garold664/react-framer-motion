import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

export default function MotionTransiton() {
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
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 190 }}
            // transition={{ type: 'spring', duration: 1.2 }}
            transition={{ ease: 'backInOut', duration: 1.2 }}
            exit={{ scale: 0, rotate: 0 }}
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
