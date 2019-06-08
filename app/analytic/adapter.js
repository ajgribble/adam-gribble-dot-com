import DS from 'ember-data';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';

const {
  Adapter,
  AdapterError,
  ConflictError,
  ForbiddenError,
  InvalidError,
  NotFoundError,
  ServerError,
  UnauthorizedError
} = DS;

export default class AnalyticAdapter extends Adapter.extend(AdapterFetch) {
  host = 'https://api.iextrading.com';
  namespace = '1.0/stock/market/batch';

  query(store, type, query) {
    const url = `${this.host}/${this.namespace}`;

    return this.ajax(url, 'GET', { data: query });
  }

  handleResponse(status, headers, payload, requestData) {
    if (this.isSuccess(status, headers, payload)) {
      return payload;
    } else if (this.isInvalid(status, headers, payload)) {
      return new InvalidError(payload.errors);
    }

    let errors = this.normalizeErrorResponse(status, headers, payload);
    let detailedMessage = this.generatedDetailedMessage(status, headers, payload, requestData);

    switch (status) {
      case 401:
        return new UnauthorizedError(errors, detailedMessage);
      case 403:
        return new ForbiddenError(errors, detailedMessage);
      case 404:
        return new NotFoundError(errors, detailedMessage);
      case 409:
        return new ConflictError(errors, detailedMessage);
      default:
        if (status >= 500) {
          return new ServerError(errors, detailedMessage);
        }
    }

    return new AdapterError(errors, detailedMessage);
  }

  isInvalid(status /*, headers, payload*/) {
    return status === 422;
  }

  isSuccess(status /*, headers, payload*/) {
    return (status >= 200 && status < 300) || status === 304;
  }
}
