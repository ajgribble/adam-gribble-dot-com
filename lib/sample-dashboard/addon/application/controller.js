import { computed } from "@ember/object";
import Controller from "@ember/controller";

const symbolOptions = [
  'AAPL',
  'GE',
  'GOOG',
  'VRSN'
]

export default class ApplicationController extends Controller {
  queryParams = ['symbols', 'types'];
  symbolOptions = symbolOptions;
  symbols = 'AAPL';
  types = 'chart,news';

  @computed('model.@each.chart')
  get candlestickData() {
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
  }

  @computed('model.@each.chart')
  get candlestickOptions() {
    return {
      title: {
        style: { "color": "#333333", "fontSize": "18px" },
        text: 'Value'
      }
    };
  }

  @computed('model.@each.chart')
  get lineData() {
    return this.model.reduce((acc, model) => {
      return [].concat(acc, {
        name: model.symbol,
        step: 'center',
        data: model.chart.map((dataPoint) => {
          return [ new Date(dataPoint.date).getTime(), dataPoint.volume ];
        })
      });
    }, []);
  }

  @computed('model.@each.chart')
  get lineOptions() {
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
  }

  @computed('model.@each.chart')
  get thirtyDayChange() {
    const start = this.get('model.firstObject.chart.firstObject.open');
    const end = this.get('model.firstObject.chart.lastObject.close');
    return `$${parseFloat(end - start).toFixed(2)}`;
  }

  @computed('model.@each.chart')
  get thirtyDayHigh() {
    return `$${Math.max(...this.get('model.firstObject.chart').mapBy('high')).toFixed(2)}`;
  }

  @computed('model.@each.chart')
  get thirtyDayLow() {
    return `$${Math.min(...this.get('model.firstObject.chart').mapBy('low')).toFixed(2)}`;
  }
}