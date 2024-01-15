import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import AccessibilityModule from 'highcharts/modules/accessibility'
import './roundchart.scss'

AccessibilityModule(Highcharts)

const options = {
  colors: ['#f0f2f3', '#1defc1', '#3c3c38'].map(function (color) {
    return {
      radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7,
      },
      stops: [
        [0, color],
        [1, Highcharts.color(color).brighten(-0.4).get('rgb')],
      ],
    }
  }),
  chart: {
    spacing: [10, 10, 20, 20],
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: true,
    type: 'pie',
    backgroundColor: null,
    height: 232,
    animation: {
      type: 'easeOut',
      duration: 500,
    },
    accessibility: {
      enabled: false,
    },
  },
  title: null,
  tooltip: {
    valueSuffix: '%',
    headerFormat:
      '<span style="font-size:15px; font-weight:600;padding-bottom:10px; color:{point.color}">{point.key}</span><br><table>',
    pointFormat:
      '<tr><td style="color:#484646;padding:0;font-weight:500;">{series.name} <b>:</b> </td>' +
      '<td style="padding:0; color: #090909;"><p style="font-weight:bold;">{point.y:.1f} %</p></td></tr>',
    footerFormat: '</table>',
    backgroundColor: 'rgba(255, 255, 255, 0.886)',
  },
  legend: {
    layout: 'vertical',

    align: 'center',
    verticalAlign: 'left',
    x: -85,
    y: 160,
    itemStyle: {
      color: '#ffffffb0',
      fontWeight: 'normal',
      fontFamily: 'Poppins',
      fontSize: '12px',
      padding: '0px 0px 0px 0px',
    },
    floating: true,
  },
  plotOptions: {
    pie: {
      innerSize: '50%', // This creates the donut hole
      // ... other pie options ...
    },
    series: {
      showInLegend: true,

      animation: {
        type: 'easeOut',
        duration: 500,
      },
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: [
        {
          enabled: false,
        },
        {
          enabled: false,
          distance: -30,
          format: '{point.percentage:.1f} %',

          filter: {
            operator: '>',
            property: 'percentage',
            value: 10,
          },
        },
      ],
    },
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      type: 'pie',
      name: 'Total',
      data: [
        { name: 'All', y: 938899, selected: true, sliced: true },
        { name: 'Maximum', y: 325251 },
        { name: 'Minimum', y: 238751 },
      ],
    },
  ],
}

const BarChart = () => (
  <div className='relative'>
    <p className='absolute font-medium text-[17px] '>Rate</p>
    <div className='relative mt-[-10px]'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  </div>
)

export default BarChart
