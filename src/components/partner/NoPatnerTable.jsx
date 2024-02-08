import {
  Badge,
  Card,
  NumberInput,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from '@tremor/react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { FiMinusCircle } from 'react-icons/fi';


const NoPatnerTable = () => {
  return (
    <div className='max-w-[600px]'>
      <Card className='bg-gradient-to-r from-gray-950 to-gray-800'>
        <div className='flex justify-between items-center'>
          <Title className='text-white ml-3'>Add Partners</Title>
          <div className='text-green-500'>
            <IoAddCircleOutline size={40} />
          </div>
        </div>
        <Table className='mt-5'>
          <TableHead>
            <TableRow>
              <TableHeaderCell className='text-white'>Name</TableHeaderCell>
              <TableHeaderCell className='text-white'>Position</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <input
                  type='text'
                  className='outline-none border-none bg-transparent py-2'
                  placeholder='Type of Charge'
                />
              </TableCell>
              <TableCell>
                <NumberInput
                  enableStepper={false}
                  placeholder='Income'
                  className=' p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
                />
              </TableCell>
              <div className='text-red-500 cursor-pointer hover:text-red-300 flex items-center justify-center pt-6'>
                  <FiMinusCircle
                    size={30}
                    onClick={() => handleRemoveRow(index)}
                  />
                </div>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
export default NoPatnerTable;
