
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Hospital as HospitalIcon, Bed } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  bgColor?: string;
  textColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  bgColor = "#1e293b", 
  textColor = "#ffffff" 
}) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      p: 1, 
      borderRadius: 1, 
      backgroundColor: bgColor, 
      color: textColor 
    }}>
      <Box sx={{ mr: 1 }}>
        {title.toLowerCase().includes('total') ? (
          <HospitalIcon style={{ height: 20, width: 20 }} />
        ) : (
          <Bed style={{ height: 20, width: 20 }} />
        )}
      </Box>
      <Box>
        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>{title}</Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{value}</Typography>
      </Box>
    </Box>
  );
};

export default StatCard;
