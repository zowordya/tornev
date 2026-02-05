import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'none';
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  direction = 'up' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.2 });

  const yOffset = direction === 'up' ? 30 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1], // Faster, smoother ease
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;