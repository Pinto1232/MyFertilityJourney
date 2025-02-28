import React from 'react';
import { Grid } from '@mui/material';
import StatCardPresentational from './StatCardPresentational';
import { AiOutlineUser } from 'react-icons/ai';
import { FaBaby, FaBandAid } from 'react-icons/fa';
import { MdOutlineCoPresent, MdOutlineArrowUpward } from 'react-icons/md';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { StatCardProps } from './StatCard.types';

const dummyData: StatCardProps[] = [
  {
    title: 'Total Practices',
    total: 11,
    percentage: '+15%',
    mainIcon: <AiOutlineUser color="#5F97A0" size={30} />,
    secondaryIcon: <MdOutlineArrowUpward color="green" size={16} />,
  },
  {
    title: 'Total Subscribers',
    total: 261,
    percentage: '+15%',
    mainIcon: <FaBaby color="#5F97A0" size={30} />,
    secondaryIcon: <MdOutlineArrowUpward color="green" size={16} />,
  },
  {
    title: 'Total Treatments',
    total: 135,
    percentage: '+15%',
    mainIcon: <FaBandAid color="#5F97A0" size={30} />,
    secondaryIcon: <MdOutlineArrowUpward color="green" size={16} />,
  },
  {
    title: 'Total Consents',
    total: 135,
    percentage: '+15%',
    mainIcon: <MdOutlineCoPresent color="#5F97A0" size={30} />,
    secondaryIcon: <MdOutlineArrowUpward color="green" size={16} />,
  },
  {
    title: 'Total Consents signed',
    total: 2159,
    percentage: '+15%',
    mainIcon: <HiOutlineDocumentText color="#5F97A0" size={30} />,
    secondaryIcon: <MdOutlineArrowUpward color="green" size={16} />,
  },
  {
    title: 'Total Fact sheets read',
    total: 2159,
    percentage: '+15%',
    mainIcon: <HiOutlineDocumentText color="#5F97A0" size={30} />,
    secondaryIcon: <MdOutlineArrowUpward color="green" size={16} />,
  },
];

const StatCardContainer: React.FC = () => {
  return (
    <Grid container spacing={4}>
      {dummyData.map((item, index) => (
        <Grid item xs={12} md={4}  py={4} key={index}>
          <StatCardPresentational
            title={item.title}
            total={item.total}
            percentage={item.percentage}
            mainIcon={item.mainIcon}
            secondaryIcon={item.secondaryIcon}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCardContainer;
