import * as types from '../constants/actions';

export default (state = {}, action) => {
 switch (action.type) {
  case types.SET_TOGGLE:
      return {
   	    ...state,
   	   selectedToggleOption: action.payload,
      }
   case types.LOAD_SDK_DATA:
     console.log('action payload ', action.payload);
     const { installedSdks, uninstalledSdks } = action.payload;
     return {
        ...state,
        installedSdks,
        uninstalledSdks
     }
  default:
   return state
 }
}