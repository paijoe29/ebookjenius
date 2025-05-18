import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

// Memperbarui interface untuk menerima semua atribut HTML standar untuk elemen yang dirender
interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  // className sudah termasuk dalam React.HTMLAttributes<HTMLElement>
  animationType: 'from-right' | 'from-left' | 'from-bottom' | 'fade-in';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className, // className dari props akan digabungkan dengan cn()
  animationType,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  as: WrapperComponent = 'div',
  ...rest // Menangkap semua props lainnya, termasuk 'id', 'style' (meskipun style di-override sebagian), dll.
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const baseClasses = 'section-hidden';
  const animationSpecificClasses = {
    'from-right': 'section-slide-from-right',
    'from-left': 'section-slide-from-left',
    'from-bottom': 'section-slide-from-bottom',
    'fade-in': 'section-fade-in',
  };

  return (
    <WrapperComponent
      ref={ref}
      className={cn(
        baseClasses,
        animationSpecificClasses[animationType],
        inView ? 'section-visible' : '',
        className // className yang diberikan pengguna juga diterapkan
      )}
      style={{ ...rest.style, transitionDelay: `${delay}ms` }} // Gabungkan style dari props dengan transitionDelay
      {...rest} // Sebarkan sisa props (termasuk 'id') ke WrapperComponent
    >
      {children}
    </WrapperComponent>
  );
};

export default AnimatedSection;