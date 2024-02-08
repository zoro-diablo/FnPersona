import React, { useEffect, useRef, useState } from 'react';
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
} from '@tremor/react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { FiMinusCircle } from 'react-icons/fi';
import { setTotal, selectTotal } from '../../redux/features/tableSlice';

const PartnerTable = () => {
  const [rows, setRows] = useState([{ chargeHead: '', amount: '' }]);
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  const total = useSelector(selectTotal);

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
    setRows((prevRows) => [...prevRows, { chargeHead: '', amount: '' }]);
  };

  const handleAmountChange = (value, index) => {
    const newRows = [...rows];
    newRows[index].amount = value;
    setRows(newRows);
  };

  const handleRemoveRow = (index) => {
    setRows((prevRows) => prevRows.filter((row, i) => i !== index));
  };

  return (
    <div className='max-w-[600px]'>
      <Card className='bg-gradient-to-r from-gray-950 to-gray-800'>
        <div className='flex justify-between items-center'>
          <Title className='text-white ml-3'>Add Details</Title>
          <div className='text-green-500 cursor-pointer hover:text-green-300'>
            <IoAddCircleOutline size={40} onClick={handleAddRow} />
          </div>
        </div>
        <Table className='mt-5'>
          <TableHead>
            <TableRow>
              <TableHeaderCell className='text-white'>
                Charge Head
              </TableHeaderCell>
              <TableHeaderCell className='text-white'>
                Amt in AED
              </TableHeaderCell>
              <TableHeaderCell className='text-white'></TableHeaderCell>
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
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].chargeHead = e.target.value;
                      setRows(newRows);
                    }}
                    className='outline-none border-none bg-transparent py-2'
                    placeholder='Type of Charge'
                  />
                </TableCell>
                <TableCell>
                  <NumberInput
                    value={row.amount}
                    onValueChange={(value) => handleAmountChange(value, index)}
                    enableStepper={false}
                    placeholder='Amount'
                    className='p-1 bg-gradient-to-r from-gray-100 to-gray-300 font-semibold text-black'
                  />
                </TableCell>
                <TableCell>
                  <div className='text-red-500 cursor-pointer hover:text-red-300 '>
                    <FiMinusCircle
                      size={30}
                      onClick={() => handleRemoveRow(index)}
                    />
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
        <Title className='text-gray-400'>Total Assets</Title>
        <Metric className='text-gray-400'>$ {total.toFixed(2)}</Metric>
      </Card>
    </div>
  );
};

export default PartnerTable;
