import { useEffect } from 'react';
import './worldmap.css';

const WorldMap = () => {
  let chartConfig = {
    shapes: [
      {
        type: 'zingchart.maps',
        options: {
          bbox: [67.177, 36.494, 98.403, 6.965], // get bbox from zingchart.maps.getItemInfo('world-countries','ind');
          ignore: ['IND'], // ignore India because we are rendering a more specific India map below
          name: 'world.countries',
          panning: true, // turn of zooming. Doesn't work with bounding box
          style: {
            tooltip: {
              borderColor: '#000',
              borderWidth: '2px',
              fontSize: '18px',
            },
            controls: {
              visible: true, // turn of zooming. Doesn't work with bounding box
            },
            hoverState: {
              alpha: 0.28,
            },
          },
          zooming: true, // turn of zooming. Doesn't work with bounding box
        },
      },
      
      {
        type: 'zingchart.maps',
        options: {
          name: 'ind',
          panning: true, // turn of zooming. Doesn't work with bounding box
          zooming: true,
          scrolling: true,
          style: {
            backgroundColor: 'black',
            borderColor: 'white',
            tooltip: {
              borderColor: 'white',
              borderWidth: '2px',
              fontSize: '18px',
            },
            borderWidth: '1px',
            controls: {
              visible: true, // turn of zooming. Doesn't work with bounding box
            },
            hoverState: {
              alpha: 0.5,
              backgroundColor: 'white',
              cursor: 'pointer',
            },
            items: {
              style: {
                backgroundColor: 'red',
                color: 'red',
              },
              KA: {
                tooltip: {
                  text: '',
                  backgroundColor: 'white',
                },
                backgroundColor: 'black',
                label: {
                  visible: false,
                },
              },
              MH: {
                tooltip: {
                  text: '',
                  backgroundColor: 'white',
                },
                backgroundColor: 'black',
                label: {
                  visible: false,
                },
              },
              TL: {
                tooltip: {
                  text: '',
                  backgroundColor: 'white',
                },
                backgroundColor: 'black',
                label: {
                  visible: false,
                },
              },
              TN: {
                tooltip: {
                  text: '',
                  backgroundColor: 'white',
                },
                backgroundColor: 'black',
                label: {
                  visible: false,
                },
              },
            },
            label: {
              // text displaying. Like valueBox
              fontSize: '15px',
              visible: false,
            },
          },
        },
      },
    ],
    plot: {
      tooltip: {
        visible: false
      },
      hoverState: {
        visible: true,
        backgroundColor: '#DFF0D8'
      },
      click: function(p) {
        // Get the bounding box of the clicked state
        let bbox = zingchart.maps.getItemInfo('world.countries', p.shapeid, 'bbox');
        
        // Zoom into the clicked state
        zingchart.exec('myChart', 'zoomTo', {
          x: [bbox[0], bbox[2]],
          y: [bbox[1], bbox[3]]
        });
      }
    },
    // rest of your configuration

  };
  useEffect(() => {
    zingchart.loadModules('maps,maps-ind');
    zingchart.render({
      id: 'myChart',
      data: chartConfig,
      height: '100%',
      width: '100%',
      
    });
  }, []);

  return (
    <div id='myChart' className='chart--container py-5' >
      <a className='zc-ref' href='https://www.zingchart.com/'>
        Powered by ZingChart
      </a>
    </div>
  );
};

export default WorldMap;
