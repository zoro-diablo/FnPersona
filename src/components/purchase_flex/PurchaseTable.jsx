import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { Card } from '@tremor/react'
import './purchases.scss'

const columns = [
  { id: 'month', label: 'Month', minWidth: 170 },
  { id: 'code', label: '1', minWidth: 100 },
  {
    id: 'monthtwo',
    label: '2',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'monththree',
    label: '3',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'monthfour',
    label: '4',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
]

function createData(month, code, monthtwo, monththree) {
  const monthfour = monthtwo / monththree
  return { month, code, monthtwo, monththree, monthfour }
}

const rows = [
  createData('Home Value', 9.2, 1324171354, 3287263, 100),
  createData('Debt', 9.998, 1403500365, 9596961, 200),
  createData('Equity in home', 9.187, 60483973, 301340, 300),
  createData('Interest on debt', 9.187, 327167434, 9833520, 400),
  createData('Mortgage payment', 9.17, 37602103, 9984670, 500),
  createData('Paid principal', 9.187, 25475400, 7692024, 600),
  createData('Insurance payment', 9.187, 83019200, 357578, 700),
  createData('Housing association dues', 9.187, 4857000, 70273, 800),
  createData('Maintenance', 9.187, 126577691, 1972550, 900),
  createData('Property tax', 9.187, 126317000, 377973, 1000),
  createData(
    'Income tax savings from interest deduction',
    7.22,
    67022000,
    640679,
    1100
  ),
  createData(
    'Total cash outflow in buying scenario',
    7.22,
    67545757,
    242495,
    1200
  ),
  createData(
    'Cashflow that could be spent on home-purchase/expenses',
    7.22,
    146793744,
    17098246,
    1300
  ),
  createData('Rent', 'NG', 200962417, 923768, 1400),
  createData('Savings when renting', 7.22, 210147125, 8515767, 1500),
]
const PurchaseTable = () => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = ( newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <div className='flex flex-col mx-10 mt-5 boxshadow'>
      <Card
        className='bg-gradient-to-r from-gray-950 to-gray-800'
        decoration='bottom'
        decorationColor='gray'
      >
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }} component={Paper}>
            <Table stickyHeader aria-label='sticky table' className='table-bar'>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        fontSize: '15px',
                        textAlign: 'center',
                        fontWeight: '600',
                      }}
                      className='bg-gradient-to-r from-gray-200 to-gray-300  rounded-t-none'
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          const value = row[column.id]
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{
                                textAlign: 'center',
                              }}
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={rows.length}
            className='bg-gradient-to-r from-gray-200 to-gray-700  rounded-b-none'
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Card>
    </div>
  )
}

export default PurchaseTable
