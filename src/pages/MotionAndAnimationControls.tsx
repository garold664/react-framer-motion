import { useState } from 'react';

import { motion, useAnimationControls } from 'framer-motion';

export default function MotionAndAnimationControls() {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimationControls();
  const controls2 = useAnimationControls();
  const listControls = useAnimationControls();

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9, rotate: 2.5 }}
        onClick={() =>
          controls
            .start('flip')
            .then(() => controls2.start('scale'))
            .then(() =>
              listControls.start((i) => ({
                opacity: 0,
                x: 100,
                transition: { delay: i * 0.3 },
              }))
            )
        }
      >
        Click me
      </motion.button>
      <motion.div
        variants={{
          initial: { rotate: 0 },
          flip: { rotate: 190 },
        }}
        style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
        whileHover={'flip'}
        initial={'initial'}
        animate={controls}
      ></motion.div>
      <motion.div
        variants={{
          initial: { scale: 1 },
          scale: { scale: 2 },
        }}
        style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
        whileHover={'scale'}
        initial={'initial'}
        animate={controls2}
      ></motion.div>

      <ul>
        <motion.li custom={0} animate={listControls}>
          0
        </motion.li>
        <motion.li custom={1} animate={listControls}>
          1
        </motion.li>
        <motion.li custom={2} animate={listControls}>
          2
        </motion.li>
      </ul>
    </>
  );
}
