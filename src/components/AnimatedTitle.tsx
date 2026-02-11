'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from '../../styles/animatedTitle.module.css';

export default function AnimatedOverlay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000); // overlay lasts 3s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/AshirwadPathLogo.png" // logo in /public
            alt="ADC Logo"
            width={500}
            height={500}
            priority
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
