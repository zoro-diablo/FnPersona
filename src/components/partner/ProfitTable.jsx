import {
  Card,
  Metric,
  NumberInput,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextInput,
  Title,
} from '@tremor/react';
import { useSelector } from 'react-redux';

const ProfitTable = () => {
  const partners = useSelector((state) => state.partnerAssets.profit.partners);

  return (
    <Card
      className='bg-gradient-to-r from-gray-800 to-gray-950 rounded-md'
      decoration='top'
      decorationColor='gray'
    >
      <Title className='text-blue-400 text-center'>Profit Table</Title>
      <div className='my-3 inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75'></div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell className='font-semibold text-gray-200 pl-8'>
              Names
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='text-gray-400'>
          {partners &&
            partners.map((partner, index) =>
              partner.name && partner.profitValue ? (
                <TableRow key={index}>
                  <TableCell>
                    <Card
                      className={`mt-4 bg-gradient-to-r from-gray-950 to-gray-800 flex justify-between items-center ${
                        partner.profitValue < 0
                          ? 'border-red-500'
                          : 'border-green-500'
                      }`}
                      decoration='bottom'
                      decorationColor={
                        partner.profitValue < 0 ? 'red' : 'green'
                      }
                    >
                      <div className='text-gray-400 font-medium text-[18px]'>
                        {partner.name}
                      </div>
                      <Title className='text-gray-400'>
                        $ {partner.profitValue.toFixed(2)}
                      </Title>
                    </Card>
                  </TableCell>
                </TableRow>
              ) : null
            )}
        </TableBody>
      </Table>
    </Card>
  );
};
export default ProfitTable;
