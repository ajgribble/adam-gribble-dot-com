import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['symbols', 'types'],

  symbols: 'aapl',
  types: 'chart,news',

  candlestickData: computed('model.@each.chart', function() {
    return this.model.reduce((acc, model) => {
      return [].concat(acc, {
        name: model.symbol,
        type: 'candlestick',
        data: model.chart.map((dataPoint) => {
          return [].concat(new Date(dataPoint.date).getTime(), dataPoint.close, dataPoint.high, dataPoint.low, dataPoint.open);
        }),
        dataGrouping: {
          units: [
              [
                  'week', // unit name
                  [1] // allowed multiples
              ], [
                  'month',
                  [1, 2, 3, 4, 6]
              ]
          ]
        },
        tooltip: {
          headerFormat: '<em>{point.key}</em><br/>'
        }
      });
    }, []);
  }),
  candlestickOptions: computed('model.@each.chart', function() {
    return {
      title: {
        style: { "color": "#333333", "fontSize": "18px" },
        text: 'Value'
      }
    };
  }),

  lineData: computed('model.@each.chart', function() {
    return this.model.reduce((acc, model) => {
      return [].concat(acc, {
        name: model.symbol,
        step: 'center',
        data: model.chart.map((dataPoint) => {
          return [ new Date(dataPoint.date).getTime(), dataPoint.volume ];
        })
      });
    }, []);
  }),
  lineOptions: computed('model.@each.chart', function() {
    return {
      title: {
        text: 'Volume'
      },
      xAxis: {
        dateTimeLabelFormats: {
          day: '%b %e',
          week: '%b %e'
        },
        labels: {
          rotation: 45
        },
        tickInterval: 5 * 24 * 3600 * 1000, // 5 days
        type: 'datetime'
      }
    }
  }),

  thirtyDayChange: computed('model.@each.chart', function() {
    const start = this.get('model.firstObject.chart.firstObject.open');
    const end = this.get('model.firstObject.chart.lastObject.close');
    return `$${parseFloat(end - start).toFixed(2)}`;
  }),
  thirtyDayHigh: computed('model.@each.chart', function() {
    return `$${Math.max(...this.get('model.firstObject.chart').mapBy('high')).toFixed(2)}`;
  }),
  thirtyDayLow: computed('model.@each.chart', function() {
    return `$${Math.min(...this.get('model.firstObject.chart').mapBy('low')).toFixed(2)}`;
  })
});