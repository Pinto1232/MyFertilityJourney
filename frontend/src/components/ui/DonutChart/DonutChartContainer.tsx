import React from 'react';
import { Grid } from '@mui/material';
import DonutChartPresentational from './DonutChartPresentational';
import { DonutChartProps } from './DonutChart.types';

const dummyData: DonutChartProps[] = [
  { percentage: 24, label: 'Pending', color: '#F79A2E' },
  { percentage: 56, label: 'Registered', color: '#67AD49' },
  { percentage: 20, label: 'Post Treatment', color: '#2E86C1' },
];

const DonutChartContainer: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {dummyData.map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <DonutChartPresentational
            percentage={item.percentage}
            label={item.label}
            color={item.color}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default DonutChartContainer;
