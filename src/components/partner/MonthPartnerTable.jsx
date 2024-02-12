import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import {
  Card,
  NumberInput,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextInput,
  Title,
} from '@tremor/react';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import { editData, deleteRow, addRow } from '../../redux/features/partnerSlice';
import '../../routes/partnership/partner.scss';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { IoAddCircleOutline } from 'react-icons/io5';

const MonthPartnerTable = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.partner.tableData);

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

  const handleEditData = (monthIndex, dataIndex, newData) => {
    dispatch(editData({ monthIndex, dataIndex, newData }));
  };

  const handleDeleteRow = (monthIndex, rowId) => {
    dispatch(deleteRow({ monthIndex, rowId }));
  };

  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      name: '',
      amount: 0,
    };
    dispatch(addRow({ monthIndex: currentMonthIndex, newRow }));
  };

  return (
    <Card className='bg-gradient-to-r from-gray-800 to-gray-950 rounded-md'>
      <Title className='text-blue-400 text-center relative items-center flex justify-center'>
        <span>Income Breakdown Table</span>
        <div className='absolute right-5 cursor-pointer'>
          <IoAddCircleOutline size={40} className='text-green-500' />
        </div>
      </Title>
      <div className='mt-4 inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75'></div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell className='text-center font-semibold text-gray-200'>
              #
            </TableCell>
            <TableCell className='font-semibold text-gray-200 '>
              Names
            </TableCell>
            <TableCell
              className='font-semibold text-gray-200'
              colSpan={tableData[currentMonthIndex]?.data.length + 1 || 1}
            >
              <div>{tableData[currentMonthIndex]?.month}</div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='text-gray-400'>
          {tableData[currentMonthIndex]?.data.map((rowData, index) => (
            <TableRow key={rowData.id}>
              <TableCell className='text-center'>{index + 1}</TableCell>
              <TableCell className='text-center'>
                <TextInput
                  className='text-gray-300 bg-gradient-to-r from-gray-100 to-gray-300 max-w-[200px] font-medium'
                  type='text'
                  value={rowData.name}
                  onChange={(e) =>
                    handleEditData(currentMonthIndex, rowData.id, {
                      name: e.target.value,
                    })
                  }
                />
              </TableCell>
              <TableCell className='text-center'>
                <NumberInput
                  className='text-gray-300 bg-gradient-to-r from-gray-100 to-gray-300 max-w-[200px] font-medium'
                  type='number'
                  value={rowData.amount}
                  onChange={(e) =>
                    handleEditData(currentMonthIndex, rowData.id, {
                      amount: parseInt(e.target.value, 10) || 0,
                    })
                  }
                />
              </TableCell>
              <TableCell className='text-center'>
                <IoMdRemoveCircleOutline
                  onClick={() => handleDeleteRow(currentMonthIndex, rowData.id)}
                  className='text-red-500 cursor-pointer'
                  size={30}
                />
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell className='font-medium text-blue-300 text-center'>
              Total
            </TableCell>
            <TableCell></TableCell>
            <TableCell className='font-medium text-blue-300 text-center'>
              {calculateTotal(tableData[currentMonthIndex]?.data || [])}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className='flex gap-4 mt-2 justify-between'>
        <Button
          variant='outlined'
          className='flex items-center justify-between gap-2'
          onClick={handleAddRow}
        >
          Add Row
        </Button>

        <div className='flex justify-end'>
          <Button
            variant='outlined'
            className='flex items-center justify-between gap-2'
            onClick={moveToPreviousMonth}
            disabled={currentMonthIndex === 0}
          >
            <IoMdArrowBack className='text-2xl text-gray-200' />
            <span className='button-text'>Previous Month</span>
          </Button>
          <Button
            variant='outlined'
            className='flex items-center justify-between gap-2'
            onClick={moveToNextMonth}
            disabled={currentMonthIndex === tableData.length - 1}
          >
            <span className='button-text'>Next Month</span>
            <IoMdArrowForward className='text-2xl text-gray-200' />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MonthPartnerTable;
