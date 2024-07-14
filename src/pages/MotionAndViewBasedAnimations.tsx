import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MotionAndViewBasedAnimations() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <h1>whileInView prop and useInView hook</h1>
      <div
        style={{ height: '150vh', width: '100vw', backgroundColor: 'blue' }}
      ></div>
      <motion.div
        style={{
          height: '150px',
          width: '150px',
          backgroundColor: 'red',
        }}
        initial={{ opacity: 0, borderRadius: 0, rotate: 0 }}
        whileInView={{ opacity: 1, borderRadius: '50%', rotate: 360 }}
        transition={{ duration: 2 }}
      ></motion.div>

      <div
        ref={ref}
        style={{
          transition: 'all 1.5s ease',
          height: '250px',
          width: '250px',
          backgroundColor: isInView ? 'red' : 'blue',
          borderRadius: isInView ? '50%' : '0',
        }}
      ></div>
    </>
  );
}
