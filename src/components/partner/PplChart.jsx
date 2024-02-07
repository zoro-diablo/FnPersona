import { Card } from '@tremor/react';
import PiePercentage from './PiePercentage';



const PplChart = () => {
  return (
    <div className=''>
      <Card
        className='bg-gradient-to-r from-gray-950 to-gray-800 h-full ml-10 max-w-md my-10 mr-10'
        decoration='top'
        decorationColor='gray'
      >
        <PiePercentage />
      </Card>
    </div>
  );
};
export default PplChart;
