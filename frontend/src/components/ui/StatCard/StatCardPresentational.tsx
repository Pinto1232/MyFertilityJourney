import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { AiOutlineUser } from 'react-icons/ai';
import { FaBandAid } from 'react-icons/fa';
import { MdOutlineCoPresent, MdOutlineArrowUpward } from 'react-icons/md';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { LeftSection, RightSection, IconCircle, SecondIconCircle, CardContainer } from './StatCard.styles';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import {  StatCardPresentationalProps } from './StatCard.types';
import { useTheme } from '@mui/material/styles';

const MotionCardContainer = motion(CardContainer);

const StatCardPresentational: React.FC<StatCardPresentationalProps> = ({
  metrics,
}) => {
  const theme = useTheme(); // Add this line to use the theme

  const totalPossibleUsers = 1000;
  const totalPractices = 1000;
  const totalTreatments = 1000;
  const totalConsents = 1000;
  const totalConsentsSigned = 1000;
  const totalFactSheetsRead = 1000;

  return (
    <Box>
      <Grid container spacing={4}>
        {metrics && (
          <>
            <Grid item xs={12} md={4} py={4}>
              <MotionCardContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                sx={{
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                  '&:hover': { transform: 'scale(1.03)', boxShadow: '0px 8px 32px rgba(145, 158, 171, 0.4)', cursor: 'pointer' },
                }}
              >
                <LeftSection>
                  <Typography variant="h4" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontWeight: 600, mb: 2, fontSize: 14 }}>
                    Total Users
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <SecondIconCircle
                      sx={{
                        transition: 'transform 0.5s ease',
                        '&:hover': { transform: 'rotate(10deg) scale(1.1)', cursor: 'pointer' },
                      }}
                    >
                      <MdOutlineArrowUpward color={theme.palette.mode === 'dark' ? '#FFFF' : 'green'} size={16} />
                    </SecondIconCircle>
                    <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontWeight: 600, fontSize: 20 }}>
                      {Math.floor((metrics.totalUsers / totalPossibleUsers) * 100)}%
                    </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontSize: 32 }}>
                    <CountUp start={0} end={metrics.totalUsers} duration={1.2} separator="," />
                  </Typography>
                </LeftSection>
                <RightSection>
                  <IconCircle
                    sx={{
                      transition: 'transform 0.5s ease',
                      '&:hover': { transform: 'rotate(10deg) scale(1.1)', cursor: 'pointer' },
                    }}
                  >
                    <AiOutlineUser color="#5F97A0" size={30} />
                  </IconCircle>
                </RightSection>
              </MotionCardContainer>
            </Grid>
            <Grid item xs={12} md={4} py={4}>
              <MotionCardContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                sx={{
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                  '&:hover': { transform: 'scale(1.03)', boxShadow: '0px 8px 32px rgba(145, 158, 171, 0.4)', cursor: 'pointer' },
                }}
              >
                <LeftSection>
                  <Typography variant="h4" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontWeight: 600, mb: 2, fontSize: 14 }}>
                    Total Practices
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <SecondIconCircle
                      sx={{
                        transition: 'transform 0.5s ease',
                        '&:hover': { transform: 'rotate(10deg) scale(1.1)', cursor: 'pointer' },
                      }}
                    >
                      <MdOutlineArrowUpward color={theme.palette.mode === 'dark' ? '#FFFF' : 'green'} size={16} />
                    </SecondIconCircle>
                    <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontWeight: 600, fontSize: 20 }}>
                      {Math.floor(metrics.totalPractices / totalPractices * 100)}%
                    </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontSize: 32 }}>
                    <CountUp start={0} end={metrics.totalPractices} duration={1.2} separator="," />
                  </Typography>
                </LeftSection>
                <RightSection>
                  <IconCircle
                    sx={{
                      transition: 'transform 0.5s ease',
                      '&:hover': { transform: 'rotate(10deg) scale(1.1)', cursor: 'pointer' },
                    }}
                  >
                    <AiOutlineUser color="#5F97A0" size={30} />
                  </IconCircle>
                </RightSection>
              </MotionCardContainer>
            </Grid>

            <Grid item xs={12} md={4} py={4}>
              <MotionCardContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                sx={{
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                  '&:hover': { transform: 'scale(1.03)', boxShadow: '0px 8px 32px rgba(145, 158, 171, 0.4)', cursor: 'pointer' },
                }}
              >
                <LeftSection>
                  <Typography variant="h4" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontWeight: 600, mb: 2, fontSize: 14 }}>
                    Total Treatments
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <SecondIconCircle
                      sx={{
                        transition: 'transform 0.5s ease',
                        '&:hover': { transform: 'rotate(10deg) scale(1.1)', cursor: 'pointer' },
                      }}
                    >
                      <MdOutlineArrowUpward color={theme.palette.mode === 'dark' ? '#FFFF' : 'green'} size={16} />
                    </SecondIconCircle>
                    <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontWeight: 600, fontSize: 20 }}>
                      {Math.floor((metrics.totalTreatments / totalTreatments) * 100)}%
                    </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontSize: 32 }}>
                    <CountUp start={0} end={metrics.totalTreatments} duration={1.2} separator="," />
                  </Typography>
                </LeftSection>
                <RightSection>
                  <IconCircle
                    sx={{
                      transition: 'transform 0.5s ease',
                      '&:hover': { transform: 'rotate(10deg) scale(1.1)', cursor: 'pointer' },
                    }}
                  >
                    <FaBandAid color="#5F97A0" size={30} />
                  </IconCircle>
                </RightSection>
              </MotionCardContainer>
            </Grid>
            <Grid item xs={12} md={4} py={4}>
              <MotionCardContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                sx={{
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                  '&:hover': { transform: 'scale(1.03)', boxShadow: '0px 8px 32px rgba(145, 158, 171, 0.4)', cursor: 'pointer' },
                }}
              >
                <LeftSection>
                  <Typography variant="h4" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontWeight: 600, mb: 2, fontSize: 14 }}>
                    Total Consents
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <SecondIconCircle
                      sx={{
                        transition: 'transform 0.5s ease',
                        '&:hover': { transform: 'rotate(10deg) scale(1.1)', cursor: 'pointer' },
                      }}
                    >
                      <MdOutlineArrowUpward color={theme.palette.mode === 'dark' ? '#FFFF' : 'green'} size={16} />
                    </SecondIconCircle>
                    <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontWeight: 600, fontSize: 20 }}>
                      {Math.floor((metrics.totalConsents / totalConsents) * 100)}%
                    </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontSize: 32 }}>
                    <CountUp start={0} end={metrics.totalConsents} duration={1.2} separator="," />
                  </Typography>
                </LeftSection>
                <RightSection>
                  <IconCircle
                    sx={{
                      transition: 'transform 0.5s ease',
                      '&:hover': { transform: 'rotate(10deg) scale(1.1)', cursor: 'pointer' },
                    }}
                  >
                    <HiOutlineDocumentText color="#5F97A0" size={30} />
                  </IconCircle>
                </RightSection>
              </MotionCardContainer>
            </Grid>
            <Grid item xs={12} md={4} py={4}>
              <MotionCardContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                sx={{
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                  '&:hover': { transform: 'scale(1.03)', boxShadow: '0px 8px 32px rgba(145, 158, 171, 0.4)', cursor: 'pointer' },
                }}
              >
                <LeftSection>
                  <Typography variant="h4" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontWeight: 600, mb: 2, fontSize: 14 }}>
                    Total Consents Signed
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <SecondIconCircle
                      sx={{
                        transition: 'transform 0.5s ease',
                        '&:hover': { transform: 'rotate(10deg) scale(1.1)', cursor: 'pointer' },
                      }}
                    >
                      <MdOutlineArrowUpward color={theme.palette.mode === 'dark' ? '#FFFF' : 'green'} size={16} />
                    </SecondIconCircle>
                    <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontWeight: 600, fontSize: 20 }}>
                      {Math.floor((metrics.totalConsentsSigned / totalConsentsSigned) * 100)}%
                    </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontSize: 32 }}>
                    <CountUp start={0} end={metrics.totalConsentsSigned} duration={1.2} separator="," />
                  </Typography>
                </LeftSection>
                <RightSection>
                  <IconCircle
                    sx={{
                      transition: 'transform 0.5s ease',
                      '&:hover': { transform: 'rotate(10deg) scale(1.1)', cursor: 'pointer' },
                    }}
                  >
                    <MdOutlineCoPresent color="#5F97A0" size={30} />
                  </IconCircle>
                </RightSection>
              </MotionCardContainer>
            </Grid>
            <Grid item xs={12} md={4} py={4}>
              <MotionCardContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                sx={{
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                  '&:hover': { transform: 'scale(1.03)', boxShadow: '0px 8px 32px rgba(145, 158, 171, 0.4)', cursor: 'pointer' },
                }}
              >
                <LeftSection>
                  <Typography variant="h4" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontWeight: 600, mb: 2, fontSize: 14 }}>
                    Total Fact Sheets Read
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <SecondIconCircle
                      sx={{
                        transition: 'transform 0.5s ease',
                        '&:hover': { transform: 'rotate(10deg) scale(1.1)', cursor: 'pointer' },
                      }}
                    >
                      <MdOutlineArrowUpward color={theme.palette.mode === 'dark' ? '#FFFF' : 'green'} size={16} />
                    </SecondIconCircle>
                    <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontWeight: 600, fontSize: 20 }}>
                      {Math.floor((metrics.totalFactSheetsRead / totalFactSheetsRead) * 100)}%
                    </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#414141', fontSize: 32 }}>
                    <CountUp start={0} end={metrics.totalFactSheetsRead} duration={1.2} separator="," />
                  </Typography>
                </LeftSection>
                <RightSection>
                  <IconCircle
                    sx={{
                      transition: 'transform 0.5s ease',
                      '&:hover': { transform: 'rotate(10deg) scale(1.1)', cursor: 'pointer' },
                    }}
                  >
                    <HiOutlineDocumentText color="#5F97A0" size={30} />
                  </IconCircle>
                </RightSection>
              </MotionCardContainer>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default React.memo(StatCardPresentational);
