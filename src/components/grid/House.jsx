import * as React from 'react'
import { useRef, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { motion } from 'framer-motion'
import {
  Card,
  Flex,
  ProgressBar,
  Text,
  TextInput,
  NumberInput,
  Select,
  SelectItem,
  DatePicker,
} from '@tremor/react'
import { FaChevronDown } from 'react-icons/fa'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Radio from '@mui/material/Radio'
import { houseRows } from '../../utils/data'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import './house.scss'

const houseCols = [
  { field: 'id', headerName: 'ID', width: 30, headerAlign: 'center' },
  { field: 'Name', headerName: 'Name', width: 70, headerAlign: 'center' },
  {
    field: 'type',
    headerName: 'Bought on Loan/Cash',
    width: 160,
    headerAlign: 'center',
  },
  {
    field: 'outstanding',
    headerName: 'Outstanding Amount',
    type: 'number',
    width: 150,
    headerAlign: 'center',
  },
  {
    field: 'totalvalue',
    headerName: 'Total Value',
    width: 100,
    headerAlign: 'center',
  },
  {
    field: 'purchaseyear',
    headerName: 'Purchase Year',
    width: 120,
    headerAlign: 'center',
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 100,
    headerAlign: 'center',
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: (params) => {
      const onClickDelete = () => {
        const id = params.row.id
        console.log(`Delete button clicked for row with id: ${id}`)
      }

      const onClickEdit = () => {
        const id = params.row.id
        console.log(`Edit button clicked for row with id: ${id}`)
      }

      return (
        <div className='flex gap-x-2'>
          <FaEdit
            size={20}
            onClick={onClickEdit}
            className='cursor-pointer hover:text-white'
          />

          <MdDelete
            size={20}
            onClick={onClickDelete}
            className='cursor-pointer hover:text-white'
          />
        </div>
      )
    },
  },
]

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const House = () => {
  const [value, setValue] = useState('')
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const constraintsRef = useRef(null)

  return (
    <div className=''>
      <div className='relative'>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ x: 300, opacity: 1 }}
          title='Add New'
          className='hover:rounded-full cursor-pointer outline-none z-10 sm:static  lg:fixed'
          onClick={handleClickOpen}
        >
          <motion.svg
            whileHover={{
              rotate: 90,
              transition: { duration: 0.1, ease: 'easeOut' },
              loop: Infinity,
            }}
            xmlns='http://www.w3.org/2000/svg'
            width='50px'
            height='50px'
            viewBox='0 0 24 24'
            className='stroke-zinc-400  fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300 hover:fill-black'
          >
            <path
              d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z'
              strokeWidth='1.5'
            ></path>
            <path d='M8 12H16' strokeWidth='1.5'></path>
            <path d='M12 16V8' strokeWidth='1.5'></path>
          </motion.svg>
        </motion.button>
        <motion.div ref={constraintsRef}>
          <motion.img
            whileTap={{ scale: 0.9 }}
            whileHover={{
              y: ['0%', '10%', '0%'],
              transition: { duration: 1, ease: 'easeInOut', yoyo: Infinity },
            }}
            drag
            dragConstraints={constraintsRef}
            src='/home.png'
            alt='house'
            className='cursor-pointer'
          />
        </motion.div>
      </div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
        fullScreen={fullScreen}
        maxWidth='xl'
      >
        <Card
          decoration='bottom'
          decorationColor='gray'
          className='bg-gradient-to-r from-gray-950 to-gray-900  border-t-3 border-gray-200 rounded-s-none rounded-e-none   overflow-visible'
        >
          <DialogTitle className='text-white' sx={{ fontSize: 18 }}>
            {'Add / Update Units'}
          </DialogTitle>
          <DialogContent sx={{ width: 950, height: 500, overflow: 'visible' }}>
            <div className='text-white grid grid-cols-2 gap-3  p-5 dark justify-center items-center'>
              <TextInput
                placeholder='Name...'
                className=' h-10 mb-5 max-w-[385px]'
              />
              <NumberInput
                placeholder='Total Value...'
                className=' h-10 mb-5 max-w-[385px] ml-5'
              />
              <Select
                value={value}
                onValueChange={setValue}
                className='dark hover:bg-transparent overflow-visible h-10 max-w-[385px]'
                placeholder='Country...'
              >
                <SelectItem value='1'>India</SelectItem>
                <SelectItem value='2'>USA</SelectItem>
                <SelectItem value='3'>China</SelectItem>
                <SelectItem value='4'>Russia</SelectItem>
              </Select>
              <DatePicker className='max-w-sm mx-auto dark overflow-visible h-10' />

              <FormControl className='flex flex-row'>
                <FormLabel id='demo-row-radio-buttons-group-label '></FormLabel>
                <RadioGroup
                  row
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name='row-radio-buttons-group flex items-center my-auto '
                >
                  <p className='text-gray-400 flex items-center mr-5'>
                    Property Status:
                  </p>
                  <FormControlLabel
                    value='self'
                    control={<Radio />}
                    label='Self'
                  />
                  <FormControlLabel
                    value='rented'
                    control={<Radio />}
                    label='Rented'
                  />
                </RadioGroup>
              </FormControl>

              <FormControl className='flex flex-row'>
                <FormLabel id='demo-row-radio-buttons-group-label '></FormLabel>
                <RadioGroup
                  row
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name='row-radio-buttons-group flex item my-auto'
                >
                  <p className='text-gray-400 flex items-center mr-5 indent-6'>
                    Payment Mode:
                  </p>
                  <FormControlLabel
                    value='cash'
                    control={<Radio />}
                    label='cash'
                  />
                  <FormControlLabel
                    value='loan'
                    control={<Radio />}
                    label='loan'
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div style={{ height: 250, width: '100%' }}>
              <DataGrid
                rows={houseRows}
                columns={houseCols}
                sx={{
                  '& .MuiDataGrid-columnHeaderTitle': { color: 'white' },
                  '& .MuiDataGrid-cell': { color: 'gray' },
                }}
                initialState={{
                  pagination: {
                    paginationModel: { poutstanding: 0, poutstandingSize: 5 },
                  },
                }}
                poutstandingSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </DialogContent>

          <DialogActions>
            <Button variant='outlined' color='error' onClick={handleClose}>
              Close
            </Button>
            <Button variant='outlined' onClick={handleClose}>
              Add / Update
            </Button>
          </DialogActions>
        </Card>
      </Dialog>

      <div className='boxshadow'>
        <Card
          className=' mx-auto bg-gradient-to-r from-gray-950 to-gray-800'
          decoration='bottom'
          decorationColor='gray'
        >
          <Flex>
            <Text className='font-semibold text-white'>House 1</Text>
            <Text className='text-slate-300'>$ 20,000</Text>
          </Flex>
          <ProgressBar value={45} color='teal' className='mt-3' />
          <Flex className='mt-5'>
            <Text className='font-semibold text-white'>National ROI</Text>
            <Text className='text-slate-300'>$ 1,000</Text>
          </Flex>
          <ProgressBar value={25} color='gray' className='mt-3' />
          <div className=' mt-8 inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75'></div>
          <div className='flex justify-between mt-5 items-center bg-slate-300 py-2 px-1 rounded-lg shadow-lg'>
            <Text className='font-bold text-black ml-2'>Financing</Text>
            <div className='flex items-center'>
              <div className='flex justify-center items-center rounded-full bg-white w-8 h-8 cursor-pointer shadow-2xl ml-5 hover:bg-gray-800 '>
                <FaChevronDown className='text-black hover:text-white' />
              </div>
            </div>
          </div>
          <Flex className='mt-5'>
            <Text className='font-medium text-white ml-2'>Outstanding</Text>
            <Text className='text-slate-300 mr-2'>$ 2,000</Text>
          </Flex>
        </Card>
      </div>
    </div>
  )
}

export default House
