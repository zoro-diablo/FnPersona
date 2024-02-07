export const assetData = [
  {
    date: 'Jan 23',
    Amount: 167,
  },
  {
    date: 'Feb 23',
    Amount: 125,
  },
  {
    date: 'Mar 23',
    Amount: 156,
  },
  {
    date: 'Apr 23',
    Amount: 165,
  },
  {
    date: 'May 23',
    Amount: 153,
  },
  {
    date: 'Jun 23',
    Amount: 124,
  },
  {
    date: 'Jul 23',
    Amount: 164,
  },
  {
    date: 'Aug 23',
    Amount: 123,
  },
  {
    date: 'Sep 23',
    Amount: 132,
  },
];

export const roundPeople = [
  {
    name: 'New Members',
    numbers: 9800,
  },
  {
    name: 'Pending Teams',
    numbers: 3398,
  },
  {
    name: 'Active Teams',
    numbers: 4398,
  },
  {
    name: 'Total Teams',
    numbers: 1398,
  },
];

export const roundPpl = [
  {
    work: 'Sunny',
    tockens: 10,
  },
  {
    work: 'Snowy',
    tockens: 5,
  },
  {
    work: 'Cloudy',
    tockens: 4,
  },
];

export const chartdata = [
  {
    year: 1970,
    savingsAmount: 500,
  },
  {
    year: 1971,
    savingsAmount: 550,
  },
  {
    year: 1973,
    savingsAmount: 400,
  },
  {
    year: 1974,
    savingsAmount: 220,
  },
];

export const cities = [
  {
    name: 'New York',
    sales: 9800,
  },
  {
    name: 'London',
    sales: 4567,
  },
  {
    name: 'Hong Kong',
    sales: 3908,
  },

  {
    name: 'Singapore',
    sales: 1908,
  },
];

export const houseRows = [
  {
    id: 1,
    type: 'Cash',
    Name: 'Jon',
    outstanding: 35,
    totalvalue: 100,
    purchaseyear: 2010,
    country: 'India',
  },
  {
    id: 2,
    type: 'Loan',
    Name: 'Cersei',
    outstanding: 42,
    totalvalue: 100,
    purchaseyear: 2010,
    country: 'India',
  },
];

export const contentDataDock = [
  {
    key: 'partnership',
    imgSrc: '/valult.webp',
    alt: 'babylon',
    text: 'Partnership',
    link: '/partnership',
  },
  { key: 'loan', imgSrc: '/erase.png', alt: 'loan', text: 'Loan' },
  {
    key: 'purchase',
    imgSrc: '/perce.webp',
    alt: 'purchase',
    text: 'Purchase',
    link: '/purchase',
  },
  {
    key: 'Ramsy',
    imgSrc: '/folder.png',
    alt: 'Ramsy',
    text: 'Ramsy',
    link: '/ramsy',
  },
  {
    key: 'kiyosaki',
    imgSrc: '/wallets.webp',
    alt: 'kiyosaki',
    text: 'Kiyosaki',
  },
  { key: 'emi', imgSrc: '/card.png', alt: 'emi', text: 'EMI' },
  {
    key: 'babylon',
    imgSrc: '/blkhouse.png',
    alt: 'retirement',
    text: 'Babylon',
    link: '/babylon',
  },
];

import { FaMoneyCheckAlt } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { MdOutlineSecurity } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { SiHomeassistant } from 'react-icons/si';
import { GiTakeMyMoney } from 'react-icons/gi';

export const accordionItems = [
  {
    id: 'one',
    header: 'Pay Yourself First',
    body: 'No matter how much or how little you earn, set aside at least 10% of your earnings, before you spend on anything else.',
    calloutcolour: 'emerald',
    callouttitle: 'Savings',
    calloutamount: `${10000} $`,
    callouticon: FaMoneyCheckAlt,
  },
  {
    id: 'two',
    header: 'Live within your means',
    body: 'If you pay yourself at least 10% of what you earn, it means you must control your expenses and spend 90% or less of your income.',
    calloutcolour: 'amber',
    callouttitle: 'Expenses',
    calloutamount: `${9000} $`,
    callouticon: GiReceiveMoney,
  },
  {
    id: 'three',
    header: 'Put Your Money to Work',
    body: 'The principles above help you to accumulate funds that you can invest. Every dollar invested is like a worker who works tireless for you. Invest your savings, and also the returns from those savings, to build an army of workers earning money for you.',
    calloutcolour: 'blue',
    callouttitle: 'Future Value',
    calloutamount: `${600} $`,
    callouticon: BiBarChartAlt2,
  },
  {
    id: 'four',
    header: 'Protect your Wealth',
    body: 'It’s easy to lose your hard-earned money to poor investments, swindlers, or misfortune. Get advice only from people who have successfully saved and built their wealth. Ensure your capital is protected, the returns are reasonable, and you can reclaim both principle and interest safely.',
    calloutcolour: 'teal',
    callouttitle: 'Source',
    calloutamount: `${900} $`,
    callouticon: MdOutlineSecurity,
  },
  {
    id: 'five',
    header: 'Be a Homeowner',
    body: 'Rather than pay their landlord a high rent every month, it’s better to pay a monthly mortgage and own a home that you can be proud of at the end of several years.',
    calloutcolour: 'rose',
    callouttitle: 'Y/N',
    calloutamount: `${98} $`,
    callouticon: FaHome,
  },
  {
    id: 'six',
    header: 'Insure Your Future Income',
    body: 'Plan in advance for unforeseen circumstances, e.g. death or the inability to work, by leveraging on compounding and insurance/investment options.',
    calloutcolour: 'teal',
    callouttitle: 'Future Inc',
    calloutamount: `${20000} $`,
    callouticon: SiHomeassistant,
  },
  {
    id: 'seven',
    header: 'New Income Streams',
    body: 'Increase your wealth by improving your earning ability. In full summary, we touch on what it takes to increase your earning capacity, and how you can concurrently pay off your debts and build wealth, no matter how bad your current financial circumstances.',
    calloutcolour: 'purple',
    callouttitle: 'Potential',
    calloutamount: `${90008} $`,
    callouticon: GiTakeMyMoney,
  },
];
export const financialaccordion = [
  {
    id: 'one',
    header: 'Save one month of your salary',
    body: 'No matter how much or how little you earn, set aside at least 10% of your earnings, before you spend on anything else.',
    calloutcolour: 'emerald',
    callouttitle: 'Savings',
    calloutamount: `${10000} $`,
    callouticon: FaMoneyCheckAlt,
  },
  {
    id: 'two',
    header: 'Become Debt Free,except Home Loan',
    body: 'If you pay yourself at least 10% of what you earn, it means you must control your expenses and spend 90% or less of your income.',
    calloutcolour: 'amber',
    callouttitle: 'Expenses',
    calloutamount: `${9000} $`,
    callouticon: GiReceiveMoney,
  },
  {
    id: 'three',
    header: 'Save 1/2 year of your Salary',
    body: 'The principles above help you to accumulate funds that you can invest. Every dollar invested is like a worker who works tireless for you. Invest your savings, and also the returns from those savings, to build an army of workers earning money for you.',
    calloutcolour: 'blue',
    callouttitle: 'Future Value',
    calloutamount: `${600} $`,
    callouticon: BiBarChartAlt2,
  },
  {
    id: 'four',
    header: 'Set aside the education',
    body: 'It’s easy to lose your hard-earned money to poor investments, swindlers, or misfortune. Get advice only from people who have successfully saved and built their wealth. Ensure your capital is protected, the returns are reasonable, and you can reclaim both principle and interest safely.',
    calloutcolour: 'teal',
    callouttitle: 'Source',
    calloutamount: `${900} $`,
    callouticon: MdOutlineSecurity,
  },
  {
    id: 'five',
    header: 'Invest 15% your income into cashflow items',
    body: 'Rather than pay their landlord a high rent every month, it’s better to pay a monthly mortgage and own a home that you can be proud of at the end of several years.',
    calloutcolour: 'rose',
    callouttitle: 'Y/N',
    calloutamount: `${98} $`,
    callouticon: FaHome,
  },
];

export const retirementData = [
  {
    date: 'Jan 23',
    2022: 45,
    2023: 78,
  },
  {
    date: 'Feb 23',
    2022: 52,
    2023: 71,
  },
  {
    date: 'Mar 23',
    2022: 48,
    2023: 80,
  },
  {
    date: 'Apr 23',
    2022: 61,
    2023: 65,
  },
  {
    date: 'May 23',
    2022: 55,
    2023: 58,
  },
  {
    date: 'Jun 23',
    2022: 67,
    2023: 62,
  },
  {
    date: 'Jul 23',
    2022: 60,
    2023: 54,
  },
  {
    date: 'Aug 23',
    2022: 72,
    2023: 49,
  },
  {
    date: 'Sep 23',
    2022: 65,
    2023: 52,
  },
  {
    date: 'Oct 23',
    2022: 68,
    2023: null,
  },
  {
    date: 'Nov 23',
    2022: 74,
    2023: null,
  },
  {
    date: 'Dec 23',
    2022: 71,
    2023: null,
  },
];

export const weatherIndicatordata = [
  {
    type: 'Net Worth',
    value: 'Autocalculated value',
  },
  {
    type: 'Asset ',
    value: 'Autocalculated value',
  },
  {
    type: 'Liabilities ',
    value: 'Autocalculated value',
  },
];

export const totalPurchaseList = [
  {
    type: 'Home value after 10 years ',
    value: 999999.8,
  },
  {
    type: 'Debt after 10 years ',
    value: 8349999.8,
  },
  {
    type: 'Home Equity after 10 years ',
    value: 199.8,
  },
  {
    type: 'Transaction costs of selling in year 10 ',
    value: 3299.8,
  },
  {
    type: 'Net cash if home sold in 10 years ',
    value: 87999.8,
  },
  {
    type: 'Savings after 10 years if renting ',
    value: 0.598,
  },
  {
    type: 'Present value benefit of owning vs. renting for 10 years ',
    value: 4599.8,
  },
];

export const cashflowdata = [
  {
    type: 'Income ',
    value: 'Autocalculated value',
  },
  {
    type: 'Expenditure  ',
    value: 'Autocalculated value',
  },
  {
    type: 'Liabilities ',
    value: 'Autocalculated value',
  },
  {
    type: 'Assets  ',
    value: 'Autocalculated value',
  },
];
