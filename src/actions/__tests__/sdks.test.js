import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { setSelectedToggleOption, loadSdkData } from '../sdks'; 

const middlewares = []
const mockStore = configureStore(middlewares)

const props = {
  sdks: {
    selectedToggleOption: 'isdks',
    installedSdks: [],
    uninstalledSdks: [],
  }
}

const store = mockStore({})

it('sdks action setSelectedToggleOption ', () => {
  expect(setSelectedToggleOption('uisdks')).toMatchSnapshot()

});

it('sdks action loadSdkData ', () => {
  const installedSdks = [
  {
        "id": "1",
        "name": "SDK 1",
        "categories": ["Backend"],
        "firstSeenDate": "2017-11-16T10:48:53.000-08:00",
        "lastSeenDate": "2019-07-16T13:24:39.000-07:00",
        "__typename": "Sdk"
   },
  ];
  const uninstalledSdks = [
    {
        "id": "1",
        "name": "Sdk 1",
        "categories": ["App Performance Management"],
        "firstSeenDate": "2017-11-16T10:48:53.000-08:00",
        "lastSeenDate": "2019-03-15T06:12:41.000-07:00",
        "__typename": "Sdk"
      },
  ];	
  expect(loadSdkData()).toMatchSnapshot()

});