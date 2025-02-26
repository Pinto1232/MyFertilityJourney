import React from 'react';
import { BiHome, BiSolidUserRectangle } from 'react-icons/bi';
import { AiFillFileText } from "react-icons/ai";
import { LuBriefcaseMedical } from 'react-icons/lu';

const menuItems = [
  { text: 'Dashboard', icon: React.createElement(BiHome) },
  { text: 'My Profile', icon: React.createElement(BiSolidUserRectangle) },
  { text: 'Manage Practices', icon: React.createElement(LuBriefcaseMedical) },
  { text: 'Logs', icon: React.createElement(AiFillFileText) },
];

export default menuItems;

