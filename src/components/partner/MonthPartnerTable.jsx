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
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { IoAddCircleOutline } from 'react-icons/io5';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { FaPlus } from 'react-icons/fa';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const MonthPartnerTable = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.partner.tableData);

  const [newMonthName, setNewMonthName] = useState('');

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
              className='font-semibold text-gray-200 flex items-center gap-3'
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
                <BootstrapTooltip title='Remove' placement='top' arrow>
                  <button>
                    <IoMdRemoveCircleOutline
                      onClick={() =>
                        handleDeleteRow(currentMonthIndex, rowData.id)
                      }
                      className='text-red-500 cursor-pointer hover:text-red-300'
                      size={30}
                    />
                  </button>
                </BootstrapTooltip>
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell className='font-medium text-blue-300 text-center'>
              Total
            </TableCell>
            <TableCell></TableCell>
            <TableCell className='font-medium text-blue-300 text-center text-xl'>
              {calculateTotal(tableData[currentMonthIndex]?.data || [])}
            </TableCell>
            <TableCell>
              <Button
                variant='outlined'
                className='flex items-center justify-between gap-2'
                onClick={handleAddRow}
              >
                <BootstrapTooltip title='Add row' placement='top' arrow>
                  <button>
                    <FaPlus className='my-2' />
                  </button>
                </BootstrapTooltip>
              </Button>
            </TableCell>
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
    </Card>
  );
};

export default MonthPartnerTable;
