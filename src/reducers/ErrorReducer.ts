import { ErrorActions } from './actionTypes';

export default (state: any, { type, processId, error, key }: ErrorActions) => {
  const matches = /(.*)_(REQUEST|FAIL)/.exec(type);
  if (matches) {
    const id = processId ? `_${processId}` : '';
    if (matches[2] === 'FAIL') {
      return { ...state, [`${matches[1]}${id}`]: error };
    }
    const { [`${matches[1]}${id}`]: rm, ...data } = state;
    return data;
  } else if (type === 'CLEAR_ERROR') {
    const { [`${key}`]: rm, ...data } = state;
    return data;
  } else {
    return state;
  }
};
