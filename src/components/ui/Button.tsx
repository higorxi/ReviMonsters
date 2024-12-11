import React from 'react';
import Button from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material/styles';

interface CustomButtonProps {
  icon?: React.ReactNode;
  label: string;
  onClick: () => void;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  sx?: SxProps<Theme>; // Custom styles via MUI sx prop
}

const CustomButton: React.FC<CustomButtonProps> = ({ icon, label, onClick, color = 'primary', variant = 'contained', size = 'medium', sx }) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      startIcon={icon}
      sx={{
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        boxShadow: 3,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
        ...sx, // Integrate custom styles
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
