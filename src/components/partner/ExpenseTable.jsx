import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  styled,
} from '@mui/material';
import { TextInput, NumberInput } from '@tremor/react';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa';
import { tooltipClasses } from '@mui/material/Tooltip';
import {
  addRowEx,
  deleteRowEx,
  editDataEx,
} from '../../redux/features/expenseSlice';
import '../../routes/partnership/partner.scss';

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

const ExpenseTable = () => {
  const currentMonthIndex = useSelector(
    (state) => state.currentMonth.currentMonthIndex
  );

  const dispatch = useDispatch();
  const tableDataEx = useSelector((state) => state.expense.tableDataEx);

  const handleAddRow = () => {
    const newRow = { id: Date.now(), expenseType: '', expense: 0 };
    dispatch(addRowEx({ monthIndex: currentMonthIndex, newRow }));
  };

  const handleDeleteRow = (rowId) => {
    dispatch(deleteRowEx({ monthIndex: currentMonthIndex, rowId }));
  };

  const handleEditRow = (id, field, value) => {
    const newValue = field === 'expense' ? Number(value) : value;
    dispatch(
      editDataEx({
        monthIndex: currentMonthIndex,
        dataIndex: id,
        newData: { [field]: newValue },
      })
    );
  };

  return (
    <Table>
      <TableHead>
        <TableRow className='relative'>
          <div className='text-center font-semibold text-gray-200'></div>
          <div className='outline-none border-none my-16'>
            <p className='font-semibold text-gray-200 text-[14px] absolute left-[60px] top-[25px]'>
              Expenses
            </p>
          </div>
        </TableRow>
      </TableHead>
      <TableBody className='text-gray-400'>
        {tableDataEx[currentMonthIndex]?.data.map((rowData, index) => (
          <TableRow key={rowData.id}>
            <TableCell className='text-center'>
              <p className='text-gray-300'>{index + 1}</p>
            </TableCell>
            <TableCell className='text-center'>
              <TextInput
                className='text-gray-300 bg-gradient-to-r from-gray-100 to-gray-300 font-semibold p-1'
                type='text'
                value={rowData.expenseType}
                onChange={(e) =>
                  handleEditRow(rowData.id, 'expenseType', e.target.value)
                }
              />
            </TableCell>
            <TableCell className='text-center'>
              <NumberInput
                className='text-gray-300 bg-gradient-to-r from-gray-100 to-gray-300 font-semibold p-1'
                type='number'
                value={rowData.expense}
                onChange={(e) =>
                  handleEditRow(rowData.id, 'expense', e.target.value)
                }
              />
            </TableCell>
            <TableCell>
              <div className='text-center flex gap-4 mt-2'>
                {tableDataEx[currentMonthIndex]?.data.length > 1 && (
                <BootstrapTooltip title='Remove' placement='top' arrow>
                  <button onClick={() => handleDeleteRow(rowData.id)}>
                    <IoMdRemoveCircleOutline
                      className='text-red-500 cursor-pointer hover:text-red-300'
                      size={25}
                    />
                  </button>
                </BootstrapTooltip>
                )}
                {index === tableDataEx[currentMonthIndex]?.data.length - 1 && (
                  <BootstrapTooltip title='Add row' placement='top' arrow>
                    <button
                      className='flex items-center'
                      onClick={handleAddRow}
                    >
                      <FaPlus
                        className='my-2 text-blue-500 hover:text-blue-200'
                        size={20}
                      />
                    </button>
                  </BootstrapTooltip>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell></TableCell>
          <TableCell>
            <div className='font-medium text-center text-lg mr-8 pb-1 text-gray-400'>
              Total Expense
            </div>
          </TableCell>
          <TableCell>
            <div className=' flex justify-center gap-x-2 mt-2 mr-8 items-center text-xl'>
              <span className='font-medium text-gray-400'>$</span>
              <p className=' text-blue-300'>
                {tableDataEx[currentMonthIndex]?.total}
              </p>
            </div>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ExpenseTable;
