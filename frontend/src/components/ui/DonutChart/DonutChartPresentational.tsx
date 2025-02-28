import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { DonutChartProps } from './DonutChart.types';
import { DonutItemContainer, DonutCenterText, DonutLabel } from './DonutChart.styles';

const DonutChartPresentational: React.FC<DonutChartProps> = ({
    percentage,
    label,
    color,
}) => {
    return (
        <DonutItemContainer>
            <Box display="flex" alignItems="center" gap={2}>
                <Box position="relative" display="flex">
                    <CircularProgress
                        variant="determinate"
                        value={100}
                        size={100}
                        thickness={6}
                        sx={{
                            color: '#E0E0E0',
                            position: 'absolute',
                        }}
                    />
                    <CircularProgress
                        variant="determinate"
                        value={percentage}
                        size={100}
                        thickness={6}
                        sx={{
                            color: color,
                        }}
                    />
                    <DonutCenterText variant="body1" fontSize={16} fontWeight={600}>
                        <CountUp start={0} end={percentage} duration={1.2} />%
                    </DonutCenterText>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="flex-start">
                    <Typography
                        variant="h4"
                        sx={{ color: 'rgba(65, 65, 65, 1)', fontWeight: 700 }}
                    >
                        <CountUp start={0} end={percentage} duration={1.2} />%
                    </Typography>
                    <DonutLabel variant="body1">{label}</DonutLabel>
                </Box>
            </Box>
        </DonutItemContainer>
    );
};

export default React.memo(DonutChartPresentational);
