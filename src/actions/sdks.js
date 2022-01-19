import * as types from '../constants/actions';

export const setSelectedToggleOption = (option) => dispatch => {
 dispatch({
  type: types.SET_TOGGLE,
  payload: option,
 })
}

export const loadSdkData = (installedSdks, uninstalledSdks) => dispatch => {
    dispatch({
        type: types.LOAD_SDK_DATA,
        payload: {
            installedSdks,
            uninstalledSdks
        }
    })
}