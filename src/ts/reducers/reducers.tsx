/* reducers.tsx */

import { initialState } from '@store/initialState';

const rootReducer = (state: any = initialState, action: any) => {
  if (typeof state === 'undefined') {
    return state;
  }

  if (action.type === '@@INIT') {
    console.log('Initializing...');
    return state;
  }

  if (action.payload === null || action.payload === undefined) {
    console.log('null or undefined ' + action.payload + ' ' + action.type);
    return state;
  } else {
    switch (action.type) {
      
      default:
        return state;
    }
  }
};

export default rootReducer;
