import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './styles.ts';

interface StepWrapperProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function StepWrapper({
  title,
  description,
  children,
}: StepWrapperProps) {
  return (
    <Box>
      <Typography variant="h2" sx={styles.title}>
        {title}
      </Typography>

      <Typography variant="body2" sx={styles.description}>
        {description}
      </Typography>

      {children}
    </Box>
  );
}
