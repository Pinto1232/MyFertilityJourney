import React from 'react';
import { Typography, Box } from '@mui/material';
import { StatCardProps } from './StatCard.types';
import { CardContainer, LeftSection, RightSection, IconCircle, SecondIconCircle } from './StatCard.styles';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const MotionCardContainer = motion(CardContainer);

const StatCardPresentational: React.FC<StatCardProps> = ({
  title,
  total,
  percentage,
  mainIcon,
  secondaryIcon,
}) => {
  return (
    <MotionCardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      sx={{
        transition: 'transform 0.5s ease',
        '&:hover': { transform: 'scale(1.03)' },
      }}
    >
      {/* Left side: Title & Main Value */}
      <LeftSection>
        <Typography variant="h4" sx={{ color: '#414141', fontWeight: 600, mb: 2, fontSize: 14 }}>
          {title}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <SecondIconCircle
            sx={{
              transition: 'transform 0.5s ease',
              '&:hover': { transform: 'rotate(10deg)' },
            }}
          >
            {secondaryIcon && secondaryIcon}
          </SecondIconCircle>
          <Typography variant="body2" sx={{ color: '#414141', fontWeight: 600, fontSize: 20 }}>
            {percentage}
          </Typography>
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#414141', fontSize: 32 }}>
          <CountUp start={0} end={total} duration={1.2} separator="," />
        </Typography>
      </LeftSection>

      <RightSection>
        <IconCircle>{mainIcon}</IconCircle>
      </RightSection>
    </MotionCardContainer>
  );
};

export default StatCardPresentational;
