import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import AccessibilityModule from 'highcharts/modules/accessibility';
import { useSelector } from 'react-redux';
import { selectPartners } from '../../redux/features/tableSlice';

AccessibilityModule(Highcharts);

Highcharts.setOptions({
  colors: [
    '#1defc1',
    '#c9d2f4',
    '#3c3c38',
    '#7dbbfa',
    '#e8ae3f',
    '#f09b9b',
  ].map(function (color) {
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
    };
  }),
});

const PiePercentage = () => {
    const partners = useSelector(selectPartners);


    const seriesData = partners.map((partner, index) => ({
      name: partner.name,
      y: Number(partner.income) || 0, 
      selected: index === 0 ? true : false,
      sliced: index === 0 ? true : false,
    }));

  const options = {
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
      itemWidth: 41,
      width: 260,
      useHTML: true,

      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'left',
      x: 0,
      y: 199,
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
            enabled: true,
            distance: -25,
            format: '{point.percentage:.1f} %',
            style: {
              fontSize: '11px',
              opacity: 0.8,
              textOutline: 'none',
              fontWeight: 'normal',
              color: '#ffffff',
              fontFamily: 'Poppins',
            },
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
        name: 'Amount',
        data: seriesData,
      },
    ],
  };

  return (
    <div className='relative max-w-md'>
      <p className='absolute font-medium text-[17px] text-white '>Percentage</p>
      <div className='py-4'>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default PiePercentage;
