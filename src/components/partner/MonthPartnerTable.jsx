import * as React from 'react';
import { Card, Metric, Title } from '@tremor/react';
import '../../routes/partnership/partner.scss';
import { IoAddCircleOutline } from 'react-icons/io5';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import IncomeTable from './IncomeTable';
import ExpenseTable from './ExpenseTable';
import { useDispatch, useSelector } from 'react-redux';
import { calculateAndUpdateProfits } from '../../redux/features/combinedSlice';

const MonthPartnerTable = () => {
  const dispatch = useDispatch();
  const currentMonthIndex = useSelector(
    (state) => state.currentMonth.currentMonthIndex
  );
  const tableDataEx = useSelector((state) => state.expense.tableDataEx);
  const tableData = useSelector((state) => state.partner.tableData);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  const total1 = tableData[currentMonthIndex]?.total;
  const total2 = tableDataEx[currentMonthIndex]?.total;

  const result = total1 - total2;

  React.useEffect(() => {
    dispatch(calculateAndUpdateProfits({ result }));
  }, [total1, total2, dispatch]);

  return (
    <div>
      <Card className='bg-gradient-to-r from-gray-800 to-gray-950 rounded-md' decoration='top'
      decorationColor='gray'>
        <div className=' text-blue-400 text-center relative items-center flex justify-center'>
          <Title className='text-blue-400'>Income Breakdown Table</Title>
          <div
            className='absolute right-5 cursor-pointer '
            onClick={handleClickOpen}
          >
            <BootstrapTooltip title='Add Month' placement='top' arrow>
              <button>
                <IoAddCircleOutline
                  size={38}
                  className='text-green-500 hover:text-green-300'
                />
              </button>
            </BootstrapTooltip>
          </div>
        </div>
        <div className='my-3 inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75'></div>
        <IncomeTable
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
        <div className='mt-4 inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75'></div>
        <ExpenseTable />
      </Card>
      <Card
        className={`mt-4 bg-gradient-to-r from-gray-950 to-gray-800 flex justify-between items-center ${
          result < 0 ? 'border-red-500' : 'border-green-500'
        }`}
        decoration='bottom'
        decorationColor={result < 0 ? 'red' : 'green'}
      >
        <div className='text-gray-400 font-medium text-2xl'>Profit</div>
        <Metric className='text-gray-400'>$ {result}</Metric>
      </Card>
    </div>
  );
};

export default MonthPartnerTable;
