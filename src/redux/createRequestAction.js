import { CALL_API } from 'redux-api-middleware';

const createRequestAction = ({
  endpoint = '',
  method = 'GET',
  body,
  types = [],
}) => ({
  [CALL_API]: {
    endpoint,
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
    types,
  },
});

export default createRequestAction;
