import { useState } from 'react';
import * as React from 'react';
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
import {
  editData,
  deleteRow,
  addRow,
  addMonth,
} from '../../redux/features/partnerSlice';
import '../../routes/partnership/partner.scss';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FaPlus } from 'react-icons/fa';
import Slide from '@mui/material/Slide';
import {
  setCurrentMonthIndex,
  incrementMonthIndex,
  decrementMonthIndex,
} from '../../redux/features/currentMonthSlice';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const IncomeTable = ({ open, handleClose }) => {
  const currentMonthIndex = useSelector(
    (state) => state.currentMonth.currentMonthIndex
  );

  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.partner.tableData);

  const [newMonthName, setNewMonthName] = useState('');

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

  const calculateTotal = (monthData) => {
    return monthData.reduce((total, item) => total + item.income, 0);
  };

   const moveToPreviousMonth = () => {
    dispatch(decrementMonthIndex());
  };

  const moveToNextMonth = () => {
    dispatch(incrementMonthIndex());
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
      income: 0,
    };
    dispatch(addRow({ monthIndex: currentMonthIndex, newRow }));
  };
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className='text-center font-semibold text-gray-200'></TableCell>
          <TableCell className='font-semibold text-gray-200 '>Names</TableCell>
          <TableCell
            className='font-semibold text-gray-200 flex items-center gap-3 justify-center'
            colSpan={tableData[currentMonthIndex]?.data.length + 1 || 1}
          >
            <Button
              variant='outlined'
              className='flex items-center justify-between gap-2'
              onClick={moveToPreviousMonth}
              disabled={currentMonthIndex === 0}
            >
              <IoMdArrowBack className='text-2xl text-gray-200' />
            </Button>
            <div>{tableData[currentMonthIndex]?.month}</div>
            <Button
              variant='outlined'
              className='flex items-center justify-between gap-2'
              onClick={moveToNextMonth}
              disabled={currentMonthIndex === tableData.length - 1}
            >
              <IoMdArrowForward className='text-2xl text-gray-200' />
            </Button>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody className='text-gray-400'>
        {tableData[currentMonthIndex]?.data.map((rowData, index) => (
          <TableRow key={rowData.id}>
            <TableCell className='text-center'>{index + 1}</TableCell>
            <TableCell className='text-center '>
              <TextInput
                className='text-gray-300 bg-gradient-to-r from-gray-100 to-gray-300  font-semibold p-1'
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
                className='text-gray-300 bg-gradient-to-r from-gray-100 to-gray-300  font-semibold p-1'
                type='number'
                value={rowData.income}
                onChange={(e) =>
                  handleEditData(currentMonthIndex, rowData.id, {
                    income: parseInt(e.target.value, 10) || 0,
                  })
                }
              />
            </TableCell>
            <TableCell className='text-center flex gap-4 mt-2 '>
              <BootstrapTooltip title='Remove' placement='top' arrow>
                <button>
                  <IoMdRemoveCircleOutline
                    onClick={() =>
                      handleDeleteRow(currentMonthIndex, rowData.id)
                    }
                    className='text-red-500 cursor-pointer hover:text-red-300'
                    size={25}
                  />
                </button>
              </BootstrapTooltip>
              {index === tableData[currentMonthIndex]?.data.length - 1 && (
                <BootstrapTooltip title='Add row' placement='top' arrow>
                  <div>
                    <button
                      className='flex items-center '
                      onClick={handleAddRow}
                    >
                      <FaPlus
                        className='my-2 text-blue-500 hover:text-blue-200'
                        size={20}
                      />
                    </button>
                  </div>
                </BootstrapTooltip>
              )}
            </TableCell>
          </TableRow>
        ))}

        <TableRow>
          <TableCell></TableCell>
          <TableCell className='font-medium text-center text-lg mr-8 pb-1 '>
            Total Income
          </TableCell>
          <TableCell className='font-medium flex justify-center gap-x-2 mt-2 mr-8 items-center text-xl'>
            $
            <p className=' text-blue-300'>
              {calculateTotal(tableData[currentMonthIndex]?.data || [])}
            </p>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby='alert-dialog-slide-description'
          style={{ borderRadius: '20px' }}
        >
          <Card
            className='bg-gradient-to-r from-gray-950 to-gray-800 rounded-none '
            decorationColor='blue'
            decoration='top'
          >
            <DialogTitle>
              {
                <Title className='font-semibold text-gray-400'>
                  Month Name
                </Title>
              }
            </DialogTitle>
            <DialogContent>
              <div id='alert-dialog-slide-description'>
                <TextInput
                  placeholder='Month...'
                  className='p-1 mt-1 max-w-[300px] bg-gradient-to-r from-gray-100 to-gray-300 font-semibold text-black'
                  value={newMonthName}
                  onChange={(e) => setNewMonthName(e.target.value)}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button color='error' onClick={handleClose}>
                Close
              </Button>
              <Button
                onClick={() => {
                  if (newMonthName.trim() !== '') {
                    dispatch(addMonth({ monthName: newMonthName }));
                    setNewMonthName('');
                    handleClose();
                  }
                }}
              >
                Add
              </Button>
            </DialogActions>
          </Card>
        </Dialog>
      </TableBody>
    </Table>
  );
};
export default IncomeTable;
