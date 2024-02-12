import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
} from '@tremor/react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { FiMinusCircle } from 'react-icons/fi';
import {
  addPartner,
  removePartner,
  updatePartner,
  selectTotal,
  selectPartners,
  setRemainingValueError,
  updatePartnerDate,
} from '../../redux/features/combinedSlice';
import { toast } from 'react-toastify';
import { MdDateRange } from 'react-icons/md';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { FaCalendarCheck } from 'react-icons/fa';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const NoPartnerTable = () => {
  const total = useSelector(selectTotal);
  const partners = useSelector(selectPartners);
  const dispatch = useDispatch();
  const [error, setError] = useState('');

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

  const handleAddPartner = () => {
    if (error) setError('');
    dispatch(addPartner({ name: '', income: '' }));
  };

  const handleRemovePartner = (index) => {
    if (error) setError('');
    dispatch(removePartner(index));
    const totalContributions = partners.reduce(
      (acc, curr) => acc + Number(curr.income || 0),
      0
    );
    const remainingAssets = total - totalContributions;
    if (remainingAssets < 0) {
      dispatch(setRemainingValueError(true));
      dispatch(updatePartner({ index: 0, partner: { name: '', income: '' } }));
      toast.error('Remaining value cannot be negative! All rows cleared.', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
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

  const handleIncomeChange = (value, index) => {
    if (error) setError('');

    const newTotal = partners.reduce(
      (acc, curr, currIndex) =>
        acc +
        (currIndex === index ? Number(value || 0) : Number(curr.income || 0)),
      0
    );
    if (newTotal > total) {
      toast.error(
        'Total contributions exceed available assets. Adjust the amounts.',
        {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        }
      );
      return;
    }

    dispatch(
      updatePartner({ index, partner: { ...partners[index], income: value } })
    );
  };

  const totalContributions = partners.reduce(
    (acc, curr) => acc + Number(curr.income || 0),
    0
  );
  const remainingAssets = total - totalContributions;

  return (
    <div className='max-w-[600px]'>
      <Card className='bg-gradient-to-r from-gray-950 to-gray-800'>
        <div className='flex justify-between items-center'>
          <Title className='text-white ml-3'>Add Partners</Title>
          <div
            className='text-green-500 cursor-pointer hover:text-green-300'
            onClick={handleAddPartner}
          >
            <BootstrapTooltip title='Add' placement='top' arrow>
              <button>
                <IoAddCircleOutline size={40} />
              </button>
            </BootstrapTooltip>
          </div>
        </div>
        <div className='mt-1 inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75'></div>
        {error && <div className='text-red-500 text-center mt-2'>{error}</div>}
        <Table className='mt-3'>
          <TableHead>
            <TableRow>
              <TableHeaderCell className='text-white'>Name</TableHeaderCell>
              <TableHeaderCell className='text-white'>
                Contribution
              </TableHeaderCell>
              <TableHeaderCell className='text-white text-center'>
                Action
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {partners.map((partner, index) => (
              <TableRow key={index}>
                <TableCell>
                  <input
                    type='text'
                    value={partner.name}
                    onChange={(e) => {
                      dispatch(
                        updatePartner({
                          index,
                          partner: { ...partner, name: e.target.value },
                        })
                      );
                    }}
                    className='outline-none border-none bg-transparent py-2 w-[120px]'
                    placeholder='Insert Name'
                  />
                </TableCell>
                <TableCell>
                  <NumberInput
                    value={partner.income}
                    onValueChange={(value) => handleIncomeChange(value, index)}
                    enableStepper={false}
                    placeholder='Contribution'
                    max={remainingAssets + Number(partner.income)}
                    className='p-1 bg-gradient-to-r from-gray-100 to-gray-300 font-semibold text-black '
                  />
                </TableCell>
                <TableCell className='flex gap-3 items-center justify-center p-0 mt-5'>
                  <div className='text-blue-500 cursor-pointer hover:text-blue-300 flex justify-center'>
                    <BootstrapTooltip
                      title={partner.date ? ` ${partner.date}` : 'Add Date'}
                      placement='top'
                      arrow
                    >
                      <button onClick={() => handleClickOpen(index)}>
                        {partner.date ? (
                          <FaCalendarCheck size={25} />
                        ) : (
                          <MdDateRange size={30} />
                        )}
                      </button>
                    </BootstrapTooltip>
                  </div>
                  <div
                    className='text-red-500 cursor-pointer hover:text-red-300 flex justify-center'
                    onClick={() => handleRemovePartner(index)}
                  >
                    <BootstrapTooltip title='Remove' placement='top' arrow>
                      <button>
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
                          Add Date
                        </Title>
                      }
                    </DialogTitle>
                    <DialogContent className=' max-w-[500px]'>
                      <div id='alert-dialog-slide-description'>
                        <input
                          type='date'
                          value={partner.date}
                          onChange={(e) => {
                            dispatch(
                              updatePartnerDate({
                                index,
                                date: e.target.value,
                              })
                            );
                          }}
                          className='outline-none border-none  p-1 px-2 rounded-sm bg-gradient-to-r from-gray-100 to-gray-300 font-semibold text-black cursor-pointer'
                        />
                      </div>
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
      {remainingAssets > 0 && (
        <Card
          className='mt-4 bg-gradient-to-r from-gray-950 to-gray-800 flex justify-between items-center'
          decoration='bottom'
          decorationColor='green'
        >
          <Title className='text-gray-400'>Assets Remaining</Title>
          <Metric className='text-gray-400'>
            $ {remainingAssets.toFixed(2)}
          </Metric>
        </Card>
      )}
    </div>
  );
};

export default NoPartnerTable;
