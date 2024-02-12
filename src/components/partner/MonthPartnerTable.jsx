import { useState } from 'react';
import { Button } from '@mui/material';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from '@tremor/react';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import '../../routes/partnership/partner.scss';

const MonthPartnerTable = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const tableData = [
    {
      month: 'Nov-23',
      data: [
        { id: 1, name: 'Macron', amount: 2000 },
        { id: 2, name: 'Jimmy', amount: 900 },
        { id: 3, name: 'Lokeo', amount: 200 },
      ],
    },
    {
      month: 'Dec-23',
      data: [
        { id: 1, name: 'John', amount: 1800 },
        { id: 2, name: 'Alice', amount: 1200 },
        { id: 3, name: 'Bob', amount: 1500 },
      ],
    },
    {
      month: 'Jan-23',
      data: [
        { id: 1, name: 'John', amount: 100 },
        { id: 2, name: 'Alice', amount: 100 },
        { id: 3, name: 'Bob', amount: 100 },
      ],
    },
    {
      month: 'Feb-23',
      data: [
        { id: 1, name: 'John', amount: 100 },
        { id: 2, name: 'Alice', amount: 120 },
        { id: 3, name: 'Bob', amount: 500 },
      ],
    },
  ];

  const calculateTotal = (monthData) => {
    return monthData.reduce((total, item) => total + item.amount, 0);
  };

  const moveToPreviousMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const moveToNextMonth = () => {
    if (currentMonthIndex < tableData.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  return (
    <Card className='bg-gradient-to-r from-gray-800 to-gray-950 rounded-md'>
      <Title className=' text-blue-400 text-center'>
        Income breakdown table
      </Title>
      <div className=' mt-4 inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75'></div>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell className='text-center font-semibold text-gray-200'>
              #
            </TableHeaderCell>
            <TableHeaderCell className='font-semibold text-gray-200 text-center'>
              Names
            </TableHeaderCell>
            <TableHeaderCell
              className='font-semibold text-gray-200 text-center'
              colSpan={tableData[currentMonthIndex].data.length + 1}
            >
              {tableData[currentMonthIndex].month}
            </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody className='text-gray-400'>
          {tableData[currentMonthIndex].data.map((rowData, index) => (
            <TableRow key={rowData.id}>
              <TableCell className='text-center'>{index + 1}</TableCell>
              <TableCell className='text-center'>{rowData.name}</TableCell>
              <TableCell className='text-center'>{rowData.amount}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell className='font-medium text-blue-300 text-center'>
              Total
            </TableCell>
            <TableCell></TableCell>
            <TableCell className='font-medium text-blue-300 text-center'>
              {calculateTotal(tableData[currentMonthIndex].data)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className='flex gap-4 mt-2 justify-end '>
        <Button
          variant='outlined'
          className='flex items-center justify-between gap-2 '
          onClick={moveToPreviousMonth}
          disabled={currentMonthIndex === 0}
        >
          <IoMdArrowBack className='text-2xl text-gray-200' />
          <span className='button-text'>Previous Month</span>
        </Button>
        <Button
          variant='outlined'
          className='flex items-center justify-between gap-2 '
          onClick={moveToNextMonth}
          disabled={currentMonthIndex === tableData.length - 1}
        >
          <span className='button-text'>Next Month</span>
          <IoMdArrowForward className='text-2xl text-gray-200' />
        </Button>
      </div>
    </Card>
  );
};
export default MonthPartnerTable;
