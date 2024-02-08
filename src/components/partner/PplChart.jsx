import { Card } from '@tremor/react';
import PiePercentage from './PiePercentage';

const PplChart = () => {
  return (
    <div className=''>
      <Card
        className='bg-gradient-to-r from-gray-950 to-gray-800   '
        decoration='top'
        decorationColor='gray'
      >
        <PiePercentage />
      </Card>
    </div>
  );
};
export default PplChart;
