import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



function LineChart(props: any) {
  const mappedData = props.data.map(([number, date]: [number, string]) => ({
    x: new Date(date).getTime(),
    y: number,
    label: number,
    data: { y: number}
  }));

  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
  const options: Highcharts.Options = {
    title: {
      text: props.name
    },
    series: [{
      type: 'spline',
      name: props.name,
      data: mappedData
    }],
    plotOptions: {
        series: {
            cursor: 'pointer',
            className: 'popup-on-click',
            marker: {
                lineWidth: 1
            }
        }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        // rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        },
      }
    },
    tooltip: {
        xDateFormat: '%Y-%m-%d',
        pointFormat: '{series.name}: <b>{point.y}</b><br/>',
        valueSuffix: props.unit,
        shared: true
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'top'
    },
  }
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        xvalue="x"
        value="y"
        ref={chartComponentRef}
      />
    </div>
  )
}

export default LineChart
