import { ErrorActions } from './actionTypes';

export default (state: any, { type, processId, error }: ErrorActions) => {
  const matches = /(.*)_(REQUEST|FAIL)/.exec(type);
  if (!matches) return state;
  const id = processId ? `_${processId}` : '';
  if (matches[2] === 'REQUEST') {
    return { ...state, [`${matches[1]}${id}`]: error };
  }
  const { [`${matches[1]}${id}`]: rm, ...loading } = state;
  return loading;
};
