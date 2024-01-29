import { Table, TableCell, TableContainer, TableHead } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';

const TaxTable = () => {
  function createData(one, two, three, four, five) {
    return { one, two, three, four, five };
  }

  const rows = [
    createData('Name'),
    createData('PAN'),
    createData('Age'),
    createData('Status'),
    createData('Type'),
  ];

  const data = {
    'Total Income': [
      { label: 'a) Salary Income', new: 0, old: 0, oldDeduction: 0 },
      { label: 'b) HP Income', new: 0, old: 0, oldDeduction: 0 },
      { label: 'c) Capital Gain', new: 0, old: 0, oldDeduction: 0 },
      {
        label: 'd) Income from Business/Profession',
        new: 0,
        old: 0,
        oldDeduction: 0,
      },
      { label: 'e) Income from Other Source', new: 0, old: 0, oldDeduction: 0 },
      { label: 'f) Exempt Income', new: 0, old: 0, oldDeduction: 0 },
      { label: 'Total', new: 0, old: 0, oldDeduction: 0 },
    ],
    'Exemptions & Deductions': [
      { label: 'a) Exemptions', new: 0, old: 0, oldDeduction: 0 },
      { label: 'b) Standard Deductions', new: 0, old: 0, oldDeduction: 0 },
      { label: 'c) Chapter IV', new: 0, old: 0, oldDeduction: 0 },
      { label: 'Total', new: 0, old: 0, oldDeduction: 0 },
    ],
    'Taxable Income': [
      { label: '', new: 0, old: 0, oldDeduction: 0 },
      { label: 'Total', new: 0, old: 0, oldDeduction: 0 },
    ],
    'Tax due on above': [
      { label: 'a) Tax @ Normal Rate', new: 0, old: 0, oldDeduction: 0 },
      { label: 'b) Tax @ special Rate', new: 0, old: 0, oldDeduction: 0 },
      { label: 'c) Rebate', new: 0, old: 0, oldDeduction: 0 },
      { label: 'd) Education Cess', new: 0, old: 0, oldDeduction: 0 },
      { label: 'F) TDS', new: 0, old: 0, oldDeduction: 0 },
      { label: 'Total', new: 0, old: 0, oldDeduction: 0 },
    ],
  };

  return (
    <div className='max-w-7xl mx-auto shadow-md'>
      <TableContainer
        component={Paper}
        style={{
          background: 'linear-gradient(45deg, #8c8c8c 30%, #f7f7f7 90%)',
        }}
      >
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontWeight: 550,
                  background: 'linear-gradient(45deg, black 30%, gray 90%)',
                  color: 'white',
                  fontSize: '15px',
                  paddingRight: '10px',
                }}
              >
                Choose the best regime with tax optimization
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ paddingLeft: '40px', fontSize: '16px' }}>
                Printable Card
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell
                style={{
                  textAlign: 'center',
                  borderLeft: '1px solid gray',
                  fontSize: '16px',
                }}
                rowSpan={3}
              >
                Source
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.one}>
                <TableCell
                  component='th'
                  scope='row'
                  style={{
                    textAlign: 'center',
                    borderRight: '1px solid gray',
                    fontSize: '16px',
                  }}
                >
                  {row.one}
                </TableCell>
                <TableCell
                  style={{ textAlign: 'center', fontSize: '16px' }}
                  align='right'
                >
                  {row.two}
                </TableCell>
                <TableCell
                  style={{ textAlign: 'center', fontSize: '16px' }}
                  align='right'
                >
                  {row.three}
                </TableCell>
                <TableCell
                  style={{ textAlign: 'center', fontSize: '16px' }}
                  align='right'
                >
                  {row.four}
                </TableCell>
                <TableCell
                  style={{ textAlign: 'center', fontSize: '16px' }}
                  align='right'
                >
                  {row.five}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  borderBottom: '1px solid gray',
                }}
              ></TableCell>
              <TableCell
                style={{
                  borderBottom: '1px solid gray',
                }}
              ></TableCell>
              <TableCell
                style={{
                  textAlign: 'center',
                  borderRight: '1px solid gray',
                  borderLeft: '1px solid gray',
                  fontWeight: 550,
                  backgroundColor: '#e1e1e1',
                  borderBottom: '1px solid gray',
                  fontSize: '16px',
                  padding: '10px',
                }}
              >
                New
              </TableCell>
              <TableCell
                style={{
                  textAlign: 'center',
                  borderRight: '1px solid gray',
                  fontWeight: 550,
                  backgroundColor: '#e1e1e1',
                  borderBottom: '1px solid gray',
                  fontSize: '16px',
                  padding: '10px',
                }}
              >
                Old
              </TableCell>
              <TableCell
                style={{
                  textAlign: 'center',
                  borderRight: '1px solid gray',
                  fontWeight: 550,
                  backgroundColor: '#e1e1e1',
                  borderBottom: '1px solid gray',
                  fontSize: '16px',
                  padding: '10px',
                }}
              >
                Old (Deduction Fully Utilized )
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(data).map(([title, rows]) => (
              <React.Fragment key={title}>
                <TableRow>
                  <TableCell
                    rowSpan={rows.length}
                    style={{
                      color: '#b3b3b3',
                      textAlign: 'center',
                      borderRight: '1px solid gray',
                      fontWeight: '550',
                      border: '1px solid gray',
                      backgroundColor: '#4a4a4a',
                      fontSize: '16px',
                      padding: '10px',
                    }}
                  >
                    {title}
                  </TableCell>
                  <TableCell>{rows[0].label}</TableCell>
                  <TableCell
                    style={{
                      textAlign: 'center',
                      borderRight: '1px solid gray',
                      borderLeft: '1px solid gray',
                      fontSize: '16px',
                      padding: '10px',
                    }}
                  >
                    {rows[0].new}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: 'center',
                      borderRight: '1px solid gray',
                      fontSize: '16px',
                      padding: '10px',
                    }}
                  >
                    {rows[0].old}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: 'center',
                      borderRight: '1px solid gray',
                      fontSize: '16px',
                      padding: '10px',
                    }}
                  >
                    {rows[0].oldDeduction}
                  </TableCell>
                </TableRow>
                {rows.slice(1).map((row, index, slicedRows) => (
                  <TableRow
                    key={row.label}
                    style={
                      index === slicedRows.length - 1
                        ? { backgroundColor: 'lightgray'}
                        : null
                    }
                  >
                    <TableCell>{row.label}</TableCell>
                    <TableCell
                      style={{
                        textAlign: 'center',
                        borderRight: '1px solid gray',
                        borderLeft: '1px solid gray',
                        fontSize: '16px',
                        padding: '10px',
                      }}
                    >
                      {row.new}
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: 'center',
                        borderRight: '1px solid gray',
                        fontSize: '16px',
                        padding: '10px',
                      }}
                    >
                      {row.old}
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: 'center',
                        borderRight: '1px solid gray',
                        fontSize: '16px',
                        padding: '10px',
                      }}
                    >
                      {row.oldDeduction}
                    </TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default TaxTable;
