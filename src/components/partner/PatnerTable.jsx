import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeaderCell,
  Title,
  NumberInput,
  Metric,
  TextInput,
} from '@tremor/react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { FiMinusCircle } from 'react-icons/fi';
import {
  addRow,
  removeRow,
  updateRow,
  selectRows,
  setTotal,
  selectTotal,
  setRemainingValueError,
  selectPartners,
} from '../../redux/features/combinedSlice';
import { toast } from 'react-toastify';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { updateRemark } from '../../redux/features/combinedSlice';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const PartnerTable = () => {
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  const rows = useSelector(selectRows);
  const total = useSelector(selectTotal);
  const partners = useSelector(selectPartners);

  const [openRowIndex, setOpenRowIndex] = React.useState(null);

  const handleClickOpen = (index) => {
    setOpenRowIndex(index);
  };

  const handleClose = () => {
    setOpenRowIndex(null);
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

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, rows.length);
  }, [rows]);

  useEffect(() => {
    const newTotal = rows.reduce(
      (acc, curr) => acc + (Number(curr.amount) || 0),
      0
    );
    dispatch(setTotal(newTotal));
  }, [rows, dispatch]);

  useEffect(() => {
    const lastIndex = rows.length - 1;
    if (inputRefs.current[lastIndex]) {
      inputRefs.current[lastIndex].focus();
    }
  }, [rows.length]);

  const handleAddRow = () => {
    dispatch(addRow());
  };

  const handleRemarkChange = (value, index) => {
    dispatch(updateRemark({ index, remark: value }));
  };

  const handleAmountChange = (value, index) => {
    dispatch(updateRow({ index, amount: value }));
  };

  const handleRemoveRow = (index) => {
    dispatch(removeRow(index));
    if (total < 0) {
      dispatch(setRemainingValueError(true));
    }
  };

  useEffect(() => {
    if (total < 0) {
      toast.error('Remaining value cannot be negative!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      dispatch(setRemainingValueError(false));
    }
  }, [total, dispatch]);

  return (
    <div className='max-w-[600px]'>
      <Card className='bg-gradient-to-r from-gray-950 to-gray-800'>
        <div className='flex justify-between items-center'>
          <Title className='text-white ml-3'>Add Details</Title>
          <div className='text-green-500 cursor-pointer hover:text-green-300'>
            <BootstrapTooltip title='Add' placement='top' arrow>
              <button>
                <IoAddCircleOutline size={40} onClick={handleAddRow} />
              </button>
            </BootstrapTooltip>
          </div>
        </div>
        <Table className='mt-5'>
          <TableHead>
            <TableRow>
              <TableHeaderCell className='text-white '>
                Charge Head
              </TableHeaderCell>
              <TableHeaderCell className='text-white '>
                Amt in AED
              </TableHeaderCell>
              <TableHeaderCell className='text-white text-center'>
                Action
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    type='text'
                    value={row.chargeHead}
                    onChange={(e) =>
                      dispatch(updateRow({ index, chargeHead: e.target.value }))
                    }
                    className='outline-none border-none bg-transparent py-2 w-[110px]'
                    placeholder='Type of Charge'
                  />
                </TableCell>
                <TableCell>
                  <div className='flex gap-2'>
                    <NumberInput
                      value={row.amount}
                      onValueChange={(value) =>
                        handleAmountChange(value, index)
                      }
                      enableStepper={false}
                      placeholder='Amount'
                      className='p-1 bg-gradient-to-r from-gray-100 to-gray-300 font-semibold text-black '
                    />
                  </div>
                </TableCell>
                <TableCell className='flex gap-2 mt-[22px] p-0'>
                  <div className='text-blue-500 cursor-pointer hover:text-blue-300 flex justify-center items-center '>
                    <BootstrapTooltip
                      title={`${row.remarks || 'Add Remark'}`}
                      placement='top'
                      arrow
                    >
                      <button onClick={() => handleClickOpen(index)}>
                        {row.remarks ? (
                          <IoMdInformationCircleOutline size={35} />
                        ) : (
                          <MdOutlinePlaylistAdd size={35} />
                        )}
                      </button>
                    </BootstrapTooltip>
                  </div>
                  <div className='text-red-500 cursor-pointer hover:text-red-300 flex justify-center items-center'>
                    <BootstrapTooltip title='Remove' placement='top' arrow>
                      <button onClick={() => handleRemoveRow(index)}>
                        <FiMinusCircle size={30} />
                      </button>
                    </BootstrapTooltip>
                  </div>
                </TableCell>

                <Dialog
                  open={openRowIndex === index}
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
                          Add Remarks
                        </Title>
                      }
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id='alert-dialog-slide-description'>
                        <TextInput
                          placeholder='Remark...'
                          value={rows[openRowIndex]?.remarks || ''}
                          onChange={(e) =>
                            handleRemarkChange(e.target.value, openRowIndex)
                          }
                          className='p-1 mt-1 max-w-[300px]  bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button color='error' onClick={handleClose}>
                        Close
                      </Button>
                      <Button onClick={handleClose}>Add</Button>
                    </DialogActions>
                  </Card>
                </Dialog>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Card
        className='mt-4 bg-gradient-to-r from-gray-950 to-gray-800 flex justify-between items-center'
        decoration='bottom'
        decorationColor='green'
      >
        <Title className='text-gray-400'>Total Assets</Title>
        <Metric className='text-gray-400'>$ {total.toFixed(2)}</Metric>
      </Card>
    </div>
  );
};

export default PartnerTable;
