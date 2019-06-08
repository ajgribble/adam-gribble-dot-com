import DS from 'ember-data';

const { JSONSerializer } = DS;

export default class AnalyticSerializer extends JSONSerializer {
  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = Object.keys(payload).reduce((acc, key, index) => {
      return [].concat(
        acc,
        Object.assign({}, payload[key], {
          id: index + 1,
          symbol: key
        })
      );
    }, []);
    return super.normalizeQueryResponse(store, primaryModelClass, newPayload, id, requestType);
  }
}
