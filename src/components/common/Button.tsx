'use client';

import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef, ElementType } from 'react';

// Framer Motion과 충돌하는 속성 제외
type MotionButtonProps = Omit<
  HTMLMotionProps<'button'>,
  'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'
>;

interface ButtonProps extends Omit<MuiButtonProps, keyof MotionButtonProps>, Partial<MotionButtonProps> {
  component?: ElementType;
}

const MotionButton = motion(MuiButton);

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <MotionButton
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
    />
  );
});

Button.displayName = 'Button';

export default Button;

