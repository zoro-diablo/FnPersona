import { Card } from '@tremor/react';
import './roundchart.scss';
import PieChart from './PieChart';
import BarChart from './BarChart';

const RoundChart = () => {
  return (
    <div className='boxshadow'>
      <Card
        className=' items-center grid grid-cols-2 justify-between bg-gradient-to-r from-gray-950 to-gray-900 boxshadow'
        decoration='bottom'
        decorationColor='gray'
      >
        <PieChart />

        <BarChart />
      </Card>
    </div>
  );
};

export default RoundChart;
