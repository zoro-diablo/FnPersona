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
} from '../../redux/features/combinedSlice';
import { toast } from 'react-toastify';

const NoPartnerTable = () => {
  const total = useSelector(selectTotal);
  const partners = useSelector(selectPartners);
  const dispatch = useDispatch();
  const [error, setError] = useState('');

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
      // Clear all rows in the NoPartnerTable
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
            <IoAddCircleOutline size={40} />
          </div>
        </div>
        {error && <div className='text-red-500 text-center mt-2'>{error}</div>}
        <Table className='mt-5'>
          <TableHead>
            <TableRow>
              <TableHeaderCell className='text-white'>Name</TableHeaderCell>
              <TableHeaderCell className='text-white'>Contribution</TableHeaderCell>
              <TableHeaderCell className='text-white'>Action</TableHeaderCell>
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
                    className='outline-none border-none bg-transparent py-2'
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
                    className='p-1 bg-gradient-to-r from-gray-100 to-gray-300 font-semibold text-black'
                  />
                </TableCell>
                <TableCell>
                  <div
                    className='text-red-500 cursor-pointer hover:text-red-300 flex justify-center'
                    onClick={() => handleRemovePartner(index)}
                  >
                    <FiMinusCircle size={30} />
                  </div>
                </TableCell>
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
        <Title className='text-gray-400'>Assets Remaining</Title>
        <Metric className='text-gray-400'>
          $ {remainingAssets.toFixed(2)}
        </Metric>
      </Card>
    </div>
  );
};

export default NoPartnerTable;
