import React, { type FC } from 'react';
import { TransparentHeart } from '../../../assets/images/icons';

const HeartButton: FC<{ active: boolean }> = ({ active }) => {
  return <TransparentHeart active={active} />;
};

export default HeartButton;
