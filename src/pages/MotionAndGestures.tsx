import { useState } from 'react';

import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

export default function MotionAndGestures() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <MotionConfig transition={{ duration: 0.3, ease: 'easeInOut' }}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9, rotate: 2.5 }}
        >
          Click me
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9, rotate: 2.5 }}
        >
          Click me
        </motion.button>
      </MotionConfig>
    </>
  );
}
