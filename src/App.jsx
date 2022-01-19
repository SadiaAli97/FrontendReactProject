import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ToggleOptions } from './components/ToggleOptions';
import { TableView } from './containers/TableView';
import { getInstalledSdks, getUninstalledSdks } from './utils/data';
import { loadSdkData, setSelectedToggleOption } from './actions/sdks';
import { ISDKS } from './constants/app-constants';
import './css/sdksview.css';

const App = ({selectedToggleOption, loadSdkData, setSelectedToggleOption, installedSdks, uninstalledSdks}) => {
  
  useEffect(() => {
    loadSdkData(getInstalledSdks(), getUninstalledSdks());
    setSelectedToggleOption(ISDKS);
  }, []);

  const handleChange = (newAlignment) => {
    setSelectedToggleOption(newAlignment);
  };


  return (
    <div className="App">
      <div className="toggle-options">
        <ToggleOptions
          selectedToggle={selectedToggleOption}
          toggleChange={handleChange}
        />
      </div>
      <TableView
        data={selectedToggleOption ? (selectedToggleOption === ISDKS ? installedSdks : uninstalledSdks) : []}
        selectedToggleOption={selectedToggleOption}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedToggleOption: state.sdks.selectedToggleOption,
  installedSdks: state.sdks.installedSdks,
  uninstalledSdks: state.sdks.uninstalledSdks,
})

const mapDispatchToProps = (dispatch) => ({
  loadSdkData: (installedSdks, uninstalledSdks) => dispatch(loadSdkData(installedSdks, uninstalledSdks)),
  setSelectedToggleOption: (option) => dispatch(setSelectedToggleOption(option)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);