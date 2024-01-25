import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import AccessibilityModule from 'highcharts/modules/accessibility'
import './roundchart.scss'

AccessibilityModule(Highcharts)

const options = {
colors: ['#292727', '#899397', '#87f2d6','#c1dff6', '#ffffff'].map(function (color) {
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
    // spacing: [10, 10, 20, 20],
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: true,
    type: 'pie',
    backgroundColor: null,
    height: 176,
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

  plotOptions: {
    series: {
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
      ],
    },
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      type: 'pie',
      name: 'Under',
      data: [
        { name: 'All', y: 930, selected: true, sliced: true },
        { name: 'Sum', y: 325 },
        { name: 'Div', y: 190 },
        { name: 'Add', y: 431 },
        { name: 'Low', y: 1801 },
      ],
    },
  ],
}

const PieChartSavings = () => (
  <div className='relative'>
    <p className='absolute font-medium text-[17px] left-[185px]'>Max</p>
    <div className=''>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  </div>
)

export default PieChartSavings
